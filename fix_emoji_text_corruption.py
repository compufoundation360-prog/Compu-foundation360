#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix corrupted emoji text patterns and trailing corruption
Specifically fixes:
- Ã°Å¸â'â (file/document emojis)
- Ã°Å¸â'Â (various emojis)
- ⚠️â¢Ã¯Â¸Â (partially fixed emojis with trailing corruption)
- Ã¯Â¸Â (emoji variation selector corruption)
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

# 1. Fix partially fixed emojis with trailing corruption
# Pattern: Emoji followed by corrupted characters
# Example: ⚠️â¢Ã¯Â¸Â should become just ⚠️

# Remove trailing corrupted characters after emojis
# Match emoji (Unicode range) followed by corrupted patterns
emoji_cleanup_patterns = [
    (r'([\u{1F300}-\u{1F9FF}][\uFE00-\uFE0F]?)\s*â[^\s<>"]*Ã[^\s<>"]*', r'\1'),  # Emoji + corrupted
    (r'([\u{1F300}-\u{1F9FF}][\uFE00-\uFE0F]?)\s*Ã[^\s<>"]*', r'\1'),  # Emoji + corrupted variant
    (r'⚠️â[^\s<>"]*Ã[^\s<>"]*', '⚠️'),  # Specific warning emoji cleanup
    (r'(✅|❌|💾|🧠|💿|📁|🔒|🔐|🔑|🚀|💻|🖥️|🔌|📱|🤖|📄|📊|💬|💥|⚡|⚙️|🎯|🛡️|🔍|📞|📟|📷|📢|🦠|🪱|💰|🔧|📦|🏰|🚪|💎|⌨️|🙆|👆|🔐|🔑|🔇|🪟|🎬|🖼️|📋|🗑️|📡|👁️)\s*â[^\s<>"]*Ã[^\s<>"]*', r'\1'),  # Clean known emojis
]

for pattern, replacement in emoji_cleanup_patterns:
    matches = len(re.findall(pattern, content, re.UNICODE))
    if matches > 0:
        content = re.sub(pattern, replacement, content, flags=re.UNICODE)
        fixed_count += matches
        changes.append(f"Cleaned {matches} emoji trailing corruption")

# 2. Fix corrupted emoji patterns in text
# Ã°Å¸â'â patterns - these are corrupted file/document emojis
corrupted_emoji_patterns = [
    # Document/File emojis
    ('Ã°Å¸â\'â', '📄'),  # Document
    ('Ã°Å¸â\'Â', '📁'),  # Folder (context-dependent)
    ('Ã°Å¸â\'Â¤', '💬'),  # Speech bubble
    ('Ã°Å¸â\'Â¥', '💥'),  # Explosion
    ('Ã°Å¸â\'Â±', '📱'),  # Mobile phone
    ('Ã°Å¸â\'Â', '📊'),  # Chart
    ('Ã°Å¸â\'ºâ', '📷'),  # Camera
    
    # Other common patterns
    ('Ã°Å¸Â¦â', '🔑'),  # Key
    ('Ã°Å¸Â"¶', '🙆'),  # Person
    ('Ã°Å¸â\'Â°', '💰'),  # Money
    ('Ã°Å¸ÂªÂ±', '🪱'),  # Worm
    ('Ã°Å¸Â¦Â', '🦠'),  # Microbe
    
    # Variation selector corruption
    ('Ã¯Â¸Â', ''),  # Remove standalone variation selector
]

for corrupted, replacement in corrupted_emoji_patterns:
    count = content.count(corrupted)
    if count > 0:
        content = content.replace(corrupted, replacement)
        fixed_count += count
        changes.append(f"Fixed '{corrupted[:15]}...' → '{replacement}': {count}")

# 3. Fix corrupted patterns in icon fields
icon_field_fixes = [
    (r'icon:\s*"Ã°Å¸â\'â"', 'icon: "📄"'),
    (r'icon:\s*"Ã°Å¸â\'Â"', 'icon: "📁"'),
    (r'icon:\s*"Ã°Å¸â\'Â¤"', 'icon: "💬"'),
    (r'icon:\s*"Ã°Å¸â\'Â¥"', 'icon: "💥"'),
    (r'icon:\s*"Ã°Å¸â\'Â±"', 'icon: "📱"'),
    (r'icon:\s*"[^"]*Ã[^"]*"', 'icon: "⚠️"'),  # Generic corrupted icon
]

for pattern, replacement in icon_field_fixes:
    matches = len(re.findall(pattern, content))
    if matches > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += matches
        changes.append(f"Fixed icon fields: {matches}")

# 4. Clean up emoji variation selectors (Ã¯Â¸Â)
# These should be removed when they appear after emojis or alone
variation_selector_pattern = r'([\u{1F300}-\u{1F9FF}])\s*Ã¯Â¸Â'
matches = len(re.findall(variation_selector_pattern, content, re.UNICODE))
if matches > 0:
    content = re.sub(variation_selector_pattern, r'\1', content, flags=re.UNICODE)
    fixed_count += matches
    changes.append(f"Removed {matches} emoji variation selectors")

# Also fix standalone variation selectors
standalone_vs = content.count(' Ã¯Â¸Â')
if standalone_vs > 0:
    content = content.replace(' Ã¯Â¸Â', ' ')
    fixed_count += standalone_vs
    changes.append(f"Removed {standalone_vs} standalone variation selectors")

# 5. Fix specific corrupted text patterns in content
text_cleanup_patterns = [
    # Common corrupted emoji combinations
    (r'Ã°Å¸â\'â', '📄'),
    (r'Ã°Å¸â\'Â', '📁'),
    (r'Ã°Å¸Â"°', '🏰'),
    (r'Ã°Å¸â\'Â¡', '🚪'),
    (r'Ã°Å¸â\'Å½', '💎'),
    (r'Ã°Å¸â\'Â¾', '💾'),
    (r'Ã°Å¸â\'Â¿', '💿'),
]

for pattern, replacement in text_cleanup_patterns:
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += count
        changes.append(f"Fixed text pattern '{pattern[:15]}...': {count}")

# 6. Clean any remaining emoji + corrupted patterns more aggressively
# Match any emoji followed by corrupted characters and clean it
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    original_line = line
    
    # Remove corrupted characters that appear after emojis
    # Pattern: Emoji + whitespace + corrupted characters
    if '⚠️' in line or '✅' in line or '❌' in line or '💾' in line or '🧠' in line:
        # Clean trailing corruption after known emojis
        line = re.sub(r'(⚠️|✅|❌|💾|🧠|💿|📁|🔒|🔐|🔑|🚀|💻|🖥️|🔌|📱|🤖|📄|📊|💬|💥|⚡|⚙️|🎯|🛡️|🔍|📞|📟|📷|📢|🦠|🪱|💰|🔧|📦|🏰|🚪|💎|⌨️|🙆|👆|🔐|🔑|🔇|🪟|🎬|🖼️|📋|🗑️|📡|👁️)\s*[âÃ][^\s<>"]*', r'\1', line)
    
    # Clean corrupted patterns that appear as text (not in quotes or tags)
    if 'Ã°Å¸' in line and not ('icon:' in line or 'className=' in line):
        # Try to replace with appropriate emoji based on context
        context = ''.join(lines[max(0, i-5):min(len(lines), i+5)])
        if 'File' in context or 'Document' in context:
            line = line.replace('Ã°Å¸â\'â', '📄')
            line = line.replace('Ã°Å¸â\'Â', '📁')
        elif 'Folder' in context or 'Directory' in context:
            line = line.replace('Ã°Å¸â\'Â', '📁')
        else:
            # Generic replacement
            line = line.replace('Ã°Å¸â\'â', '📄')
            line = line.replace('Ã°Å¸â\'Â', '📁')
    
    if line != original_line:
        new_lines.append(line)
        fixed_count += 1
        if fixed_count <= 50:
            pass  # Don't print all
    else:
        new_lines.append(line)

content = '\n'.join(new_lines)

# Count remaining
remaining_patterns = [
    len(re.findall(r'Ã°Å¸â\'â', content)),
    len(re.findall(r'Ã°Å¸â\'Â', content)),
    len(re.findall(r'⚠️â', content)),
    len(re.findall(r'Ã¯Â¸Â', content)),
]

total_remaining = sum(remaining_patterns)

print("\nChanges made:")
for change in changes[:20]:  # Show first 20
    print(f"  - {change}")
if len(changes) > 20:
    print(f"  ... and {len(changes) - 20} more")

print(f"\nTotal fixes: {fixed_count}")
print(f"Remaining corrupted patterns:")
print(f"  - Ã°Å¸â'â: {remaining_patterns[0]}")
print(f"  - Ã°Å¸â'Â: {remaining_patterns[1]}")
print(f"  - ⚠️â: {remaining_patterns[2]}")
print(f"  - Ã¯Â¸Â: {remaining_patterns[3]}")
print(f"  - Total: {total_remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("\n✅ Fixed emoji text corruption!")
else:
    print("\n⚠️  No changes made")
