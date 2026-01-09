#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive fix for ALL modules - final version
"""

import re
import sys

# Set UTF-8 encoding for console output
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

file_path = 'src/pages/ModuleDetail.tsx'

print("Reading file...")
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content
fixed_count = 0
changes = []

# 1. Fix bullet points - all variations
bullet_patterns = ['Ã¢â¬Â¢', 'Ã¢â\x80\xa2', 'â¬Â¢', 'â\x80\xa2']
for pattern in bullet_patterns:
    count = content.count(pattern)
    if count > 0:
        content = content.replace(pattern, '•')
        fixed_count += count
        changes.append(f"Bullet points: {count}")

# 2. Fix arrows in text
arrow_patterns = ['Ã¢â â', 'Ã¢â\x80\x99', 'Ã¢â\x80\x94']
for pattern in arrow_patterns:
    count = content.count(pattern)
    if count > 0:
        content = content.replace(pattern, '→')
        fixed_count += count
        changes.append(f"Arrows: {count}")

# 3. Fix Launch Simulator buttons
launch_pattern = r'<span[^>]*className="mr-2"[^>]*>[^<]*Ã[^<]*?</span>\s*Launch Simulator'
matches = len(re.findall(launch_pattern, content))
if matches > 0:
    content = re.sub(launch_pattern, '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator', content)
    fixed_count += matches
    changes.append(f"Launch Simulator buttons: {matches}")

# 4. Fix Previous Topic buttons
prev_pattern = r'(<Button[^>]*onClick=\{\(\) => navigate\([^)]*\)\}[^>]*>)\s*Ã¢â[^<]*Previous Topic'
matches = len(re.findall(prev_pattern, content))
if matches > 0:
    content = re.sub(prev_pattern, r'\1<ArrowLeft className="mr-2 h-4 w-4 inline" /> Previous Topic', content)
    fixed_count += matches
    changes.append(f"Previous Topic buttons: {matches}")

# 5. Fix Next Topic buttons  
next_pattern = r'(Next Topic:[^<]*?)Ã¢â[^<]*?(</Button>)'
matches = len(re.findall(next_pattern, content))
if matches > 0:
    content = re.sub(next_pattern, r'\1 <ArrowRight className="ml-2 h-4 w-4 inline" />\2', content)
    fixed_count += matches
    changes.append(f"Next Topic buttons: {matches}")

# 6. Fix bullet points in span tags
bullet_span_pattern = r'(<span[^>]*className="text-primary"[^>]*>)[^<]*Ã[^<]*?(</span>)'
matches = len(re.findall(bullet_span_pattern, content))
if matches > 0:
    content = re.sub(bullet_span_pattern, r'\1•\2', content)
    fixed_count += matches
    changes.append(f"Bullet spans: {matches}")

# 7. Fix specific corrupted emoji patterns
emoji_replacements = [
    ('Ã°Å¸Å¡â¬', '💻'),  # Laptop
    ('Ã°Å¸â¥Ã¯Â¸Â', '🖥️'),  # Desktop
    ('Ã°Å¸â"Å', '🔌'),  # Plug
    ('Ã°Å¸Å¡â', '🚀'),  # Rocket
    ('Ã°Å¸Å¡Â«', '🔧'),  # Wrench
    ('Ã°Å¸Å¡Â¦', '📦'),  # Package
    ('Ã°Å¸Â§Â', '🧠'),  # Brain
    ('Ã°Å¸Å½Â¬', '📱'),  # Mobile
    ('Ã°Å¸Â¤â', '🤖'),  # Robot
    ('Ã°Å¸â"Â¤', '💬'),  # Speech
    ('Ã°Å¸â"Â¥', '💥'),  # Explosion
    ('Ã¢Å¡Â', '⚠️'),  # Warning
    ('Ã¢Å¡Â¡', '⚡'),  # Lightning
    ('Ã¢Å¡â¢Ã¯Â¸Â', '⚙️'),  # Gear
]

for corrupted, emoji in emoji_replacements:
    count = content.count(corrupted)
    if count > 0:
        content = content.replace(corrupted, emoji)
        fixed_count += count
        changes.append(f"Emoji '{corrupted[:15]}': {count}")

# 8. Fix icon fields in arrays
icon_field_patterns = [
    (r'icon:\s*"Ã°Å¸Å¡â¬"', 'icon: "💻"'),
    (r'icon:\s*"Ã°Å¸â¥Ã¯Â¸Â"', 'icon: "🖥️"'),
    (r'icon:\s*"Ã°Å¸â"Å"', 'icon: "🔌"'),
    (r'icon:\s*"Ã°Å¸Å¡â"', 'icon: "🚀"'),
    (r'icon:\s*"Ã°Å¸Å¡Â«"', 'icon: "🔧"'),
    (r'icon:\s*"Ã°Å¸Å¡Â¦"', 'icon: "📦"'),
    (r'icon:\s*"Ã°Å¸Â§Â"', 'icon: "🧠"'),
    (r'icon:\s*"Ã°Å¸Å½Â¬"', 'icon: "📱"'),
]

for pattern, replacement in icon_field_patterns:
    matches = len(re.findall(pattern, content))
    if matches > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += matches
        changes.append(f"Icon fields: {matches}")

# Print summary
print("\nChanges made:")
for change in changes:
    print(f"  - {change}")

# Count remaining corrupted characters
remaining = len(re.findall(r'Ã[¢°]', content))
print(f"\nTotal fixes: {fixed_count}")
print(f"Remaining corrupted characters: {remaining}")

# Write back
if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("\n✅ File updated successfully!")
else:
    print("\n⚠️  No changes made")
