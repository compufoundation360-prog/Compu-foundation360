#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Direct fix for corrupted emoji text patterns
"""

import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

file_path = 'src/pages/ModuleDetail.tsx'

print("Reading file...")
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content
fixed_count = 0
changes = []

# 1. Remove trailing corruption after emojis (like ⚠️â¢Ã¯Â¸Â)
# Pattern: Known emoji + corrupted trailing characters
emoji_cleanup = [
    ('⚠️â¢Ã¯Â¸Â', '⚠️'),
    ('⚠️ â¢Ã¯Â¸Â', '⚠️'),
    ('⚠️Ã¯Â¸Â', '⚠️'),
    ('⚠️ Ã¯Â¸Â', '⚠️'),
]

for old, new in emoji_cleanup:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed_count += count
        changes.append(f"Cleaned ⚠️ corruption: {count}")

# 2. Fix specific corrupted emoji patterns
corrupted_fixes = [
    # Common corrupted patterns found in the file
    ('Ã°Å¸â"ºÂ¡Ã¯Â¸Â', '🚪'),  # Door/Gate
    ('⚠️â"Ã¯Â¸Â', '⚠️'),  # Warning variants
    ('⚠️ Ã¯Â¸Â', '⚠️'),  # Warning with space
    ('Ã°Å¸â"Â¥Ã¯Â¸Â', '🖥️'),  # Desktop
    ('Ã°Å¸â"Â±Ã¯Â¸Â', '📱'),  # Mobile
    ('Ã°Å¸â"Â¨Ã¯Â¸Â', '🖨️'),  # Printer
    ('Ã¢"â"Ã¯Â¸Â', '✅'),  # Checkmark
    ('Ã°Å¸â"Â¼Ã¯Â¸Â', '🖼️'),  # Picture
    ('Ã°Å¸â"Å"Ã¯Â¸Â', '🔑'),  # Key
    ('Ã°Å¸â"â'Ã¯Â¸Â', '📊'),  # Chart
    ('Ã¢â Â©Ã¯Â¸Â', '©️'),  # Copyright
    ('Ã°Å¸Â¦Â¿Ã¯Â¸Â', '🛡️'),  # Shield
    ('Ã°Å¸â"Â¥Ã¯Â¸Â', '🖥️'),  # Desktop
]

for old, new in corrupted_fixes:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed_count += count
        changes.append(f"Fixed '{old[:15]}...' → '{new}': {count}")

# 3. Fix text-5xl divs with corrupted emojis
# These need context-based replacement
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    original_line = line
    
    if 'text-5xl' in line and 'Ã' in line:
        context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
        emoji = '⚠️'  # Default
        
        # Context-based emoji detection
        if 'Server' in context or 'Desktop' in context:
            emoji = '🖥️'
        elif 'Mobile' in context or 'Phone' in context or 'Smartphone' in context:
            emoji = '📱'
        elif 'Printer' in context:
            emoji = '🖨️'
        elif 'Picture' in context or 'Image' in context or 'Photo' in context:
            emoji = '🖼️'
        elif 'Warning' in context or 'Important' in context or 'Risk' in context:
            emoji = '⚠️'
        elif 'Key' in context or 'Password' in context:
            emoji = '🔑'
        elif 'Chart' in context or 'Graph' in context:
            emoji = '📊'
        elif 'Copyright' in context or '©' in context:
            emoji = '©️'
        elif 'Shield' in context or 'Security' in context:
            emoji = '🛡️'
        elif 'Gate' in context or 'Door' in context:
            emoji = '🚪'
        
        # Replace corrupted emoji in text-5xl divs
        old = line
        line = re.sub(r'(<div[^>]*text-5xl[^>]*>)[^<]*Ã[^<]*?Ã¯Â¸Â?[^<]*?(</div>)', f'\\1{emoji}\\2', line)
        
        if line != original_line:
            fixed_count += 1
            if fixed_count <= 30:
                changes.append(f"Line {i+1}: Fixed text-5xl ({emoji})")
    
    # Also fix in name fields and other contexts
    if 'name:' in line and 'Ã' in line:
        if 'Gate' in line:
            line = line.replace('Ã°Å¸â"ºÂ¡Ã¯Â¸Â', '🚪')
        if 'Guards' in line:
            line = line.replace('⚠️â"Ã¯Â¸Â', '⚠️')
            line = line.replace('⚠️ Ã¯Â¸Â', '⚠️')
    
    # Fix feedback text with corrupted emojis
    if 'feedback:' in line and '⚠️' in line and 'Ã' in line:
        line = line.replace('⚠️ Ã¯Â¸Â', '⚠️')
        line = line.replace('⚠️â"Ã¯Â¸Â', '⚠️')
    
    # Fix arrows with corruption in text
    if 'Ã¢â' in line and ('Phone' in line or 'Laptop' in line or '→' in line):
        line = re.sub(r'Ã¢â[^<]*?Ã¯Â¸Â', '→', line)
    
    if line != original_line:
        fixed_count += 1
    
    new_lines.append(line)

content = '\n'.join(new_lines)

# 4. Remove standalone variation selectors
variation_selector_count = content.count(' Ã¯Â¸Â')
if variation_selector_count > 0:
    content = content.replace(' Ã¯Â¸Â', ' ')
    fixed_count += variation_selector_count
    changes.append(f"Removed {variation_selector_count} standalone variation selectors")

# Count remaining problematic patterns
remaining = {
    '⚠️â': len(re.findall(r'⚠️â', content)),
    'Ã¯Â¸Â': len(re.findall(r'Ã¯Â¸Â', content)),
    'Ã°Å¸â"': len(re.findall(r'Ã°Å¸â"', content)),
}

total_remaining = sum(remaining.values())

print("\nChanges made:")
for change in changes[:30]:
    print(f"  - {change}")
if len(changes) > 30:
    print(f"  ... and {len(changes) - 30} more")

print(f"\nTotal fixes: {fixed_count}")
print(f"Remaining corrupted patterns:")
for pattern, count in remaining.items():
    if count > 0:
        print(f"  - {pattern}: {count}")
print(f"  - Total: {total_remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("\n✅ Fixed emoji text corruption!")
else:
    print("\n⚠️  No changes made")
