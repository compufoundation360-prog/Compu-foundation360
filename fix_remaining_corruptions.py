#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Second pass - fix remaining corrupted patterns
"""

import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

file_path = 'src/pages/ModuleDetail.tsx'

print("Reading file for second pass...")
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content
fixed_count = 0
changes = []

# More specific emoji patterns found in the file
emoji_replacements_2 = [
    # Network/Internet emojis
    ('Ã°Å¸â"Å¾', '📞'),  # Phone
    ('Ã°Å¸â"Å¸', '📟'),  # Pager
    ('Ã°Å¸Å½Â', '📱'),  # Mobile
    ('Ã°Å¸Å¡â"', '🚀'),  # Rocket variant
    ('Ã°Å¸Â¤â"', '🤖'),  # Robot variant
    
    # Common corrupted patterns
    ('Ã°Å¸â"Â', '📄'),  # Document
    ('Ã°Å¸â"â', '📊'),  # Chart
    ('Ã°Å¸â"ºâ', '📷'),  # Camera
    ('Ã°Å¸â"Â¤', '💬'),  # Speech bubble
    ('Ã°Å¸â"Â¥', '💥'),  # Explosion
    ('Ã°Å¸â\'\xadÂ¾', '💾'),  # Disk
    ('Ã°Å¸â\'\xadÂ¿', '💽'),  # Disk variant
    ('Ã°Å¸â\'\xad\xa2', '💪'),  # Flex
    ('Ã°Å¸â\'\xad¤–', '🤖'),  # Robot variant
    ('Ã°Å¸â\'\xad"', '🔄'),  # Refresh
    
    # Symbol patterns
    ('Ã¢Å¡', '⚠️'),  # Warning variants
    ('âš', '⚡'),  # Lightning variants
    ('âœ…', '✅'),  # Checkmark
    ('Ã°Å¸â\'\xad¤', '🎯'),  # Target
]

for corrupted, emoji in emoji_replacements_2:
    count = content.count(corrupted)
    if count > 0:
        content = content.replace(corrupted, emoji)
        fixed_count += count
        changes.append(f"Pattern '{corrupted[:20]}': {count}")

# Fix icon fields with more patterns
icon_patterns_2 = [
    (r'icon:\s*"Ã°Å¸â"Å¾"', 'icon: "📞"'),
    (r'icon:\s*"Ã°Å¸â"Å¸"', 'icon: "📟"'),
    (r'icon:\s*"Ã°Å¸Å½Â"', 'icon: "📱"'),
    (r'icon:\s*"Ã°Å¸â"Â"', 'icon: "📄"'),
    (r'icon:\s*"Ã°Å¸â"â"', 'icon: "📊"'),
    (r'icon:\s*"Ã°Å¸â"Â¤"', 'icon: "💬"'),
    (r'icon:\s*"Ã°Å¸â"Â¥"', 'icon: "💥"'),
    (r'icon:\s*"Ã¢Å¡"', 'icon: "⚠️"'),
    (r'icon:\s*"Ã°Å¸â\'\xadÂ¾"', 'icon: "💾"'),
    (r'icon:\s*"Ã°Å¸â\'\xad\xa2"', 'icon: "💪"'),
]

for pattern, replacement in icon_patterns_2:
    matches = len(re.findall(pattern, content))
    if matches > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += matches
        changes.append(f"Icon pattern: {matches}")

# Fix remaining arrow patterns
arrow_patterns_2 = ['Ã¢â', '→']
# More aggressive arrow replacement in specific contexts
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    if 'Ã¢â' in line and ('Input' in line or 'Process' in line or 'Output' in line or '→' in line or 'e.g.' in line):
        old = line
        # Replace any remaining arrow-like corruption
        line = re.sub(r'Ã¢â[^<>\s]*?', '→', line)
        if line != old:
            fixed_count += 1
            if fixed_count <= 20:
                changes.append(f"Arrow in text at line {i+1}")
    new_lines.append(line)
content = '\n'.join(new_lines)

# Fix text-4xl divs with corrupted emojis - replace with placeholder
text_4xl_pattern = r'(<div[^>]*text-4xl[^>]*>)[^<]*Ã[^<]*?(</div>)'
matches = len(re.findall(text_4xl_pattern, content))
if matches > 0:
    # Try to decode common ones, or use placeholder
    content = re.sub(text_4xl_pattern, r'\1⚠️\2', content)
    fixed_count += matches
    changes.append(f"text-4xl divs: {matches}")

# Count remaining
remaining = len(re.findall(r'Ã[¢°]', content))

print("\nSecond pass changes:")
for change in changes[:30]:  # Limit output
    print(f"  - {change}")
if len(changes) > 30:
    print(f"  ... and {len(changes) - 30} more")

print(f"\nAdditional fixes: {fixed_count}")
print(f"Remaining corrupted characters: {remaining}")

# Write back
if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("\n✅ Second pass complete!")
else:
    print("\n⚠️  No additional changes")
