#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive fix for ALL modules in ModuleDetail.tsx
Fixes corrupted emojis, icons, bullet points, and arrows across all modules
"""

import re

file_path = 'src/pages/ModuleDetail.tsx'

print("Reading file...")
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original_content = content
fixed_count = 0

# Comprehensive replacement patterns based on common corruptions
replacements = []

# 1. Fix bullet points (multiple variations)
replacements.extend([
    ('Ã¢â¬Â¢', '•'),
    ('Ã¢â\x80\xa2', '•'),
    ('â¬Â¢', '•'),
    ('â\x80\xa2', '•'),
    ('•¬Â¢', '•'),
    ('•¬Â', '•'),
])

# 2. Fix arrows
replacements.extend([
    ('Ã¢â â', '→'),
    ('Ã¢â', '→'),  # General arrow pattern
    ('Ã¢â\x80\x99', '→'),
    ('Ã¢â\x80\x94', '→'),
])

# 3. Fix Launch Simulator icons - replace corrupted rocket emoji spans
launch_pattern = r'<span[^>]*className="mr-2"[^>]*>[^<]*Ã[^<]*</span>\s*Launch Simulator'
content = re.sub(launch_pattern, '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator', content, flags=re.MULTILINE)
if re.search(launch_pattern, content):
    fixed_count += 1
    print("Fixed Launch Simulator buttons")

# 4. Fix Previous/Next Topic navigation buttons
prev_pattern = r'(<Button[^>]*onClick=\{\(\) => navigate\([^)]*\)\}[^>]*>)\s*Ã¢â[^<]*Previous Topic'
content = re.sub(prev_pattern, r'\1<ArrowLeft className="mr-2 h-4 w-4 inline" /> Previous Topic', content, flags=re.MULTILINE)

next_pattern = r'(Next Topic:[^<]*?)Ã¢â[^<]*?(</Button>)'
content = re.sub(next_pattern, r'\1 <ArrowRight className="ml-2 h-4 w-4 inline" />\2', content, flags=re.MULTILINE)

# 5. Fix corrupted emoji icons in arrays and text
# Common emoji patterns that get corrupted
emoji_replacements = {
    # Technology emojis
    r'Ã°Å¸Å¡â¬': '💻',  # Laptop/computer
    r'Ã°Å¸â¥Ã¯Â¸Â': '🖥️',  # Desktop
    r'Ã°Å¸â"Å': '🔌',  # Plug
    r'Ã°Å¸Â§Â': '🧠',  # Brain
    r'Ã°Å¸â\'\xadÂ¾': '💾',  # Floppy disk
    r'Ã°Å¸â\'\xadÂ¿': '💽',  # Disk
    r'Ã°Å¸â\'\xad\xa2': '💪',  # Flex/bicep
    r'Ã°Å¸â\'\xad¤–': '🤖',  # Robot
    r'Ã°Å¸â\'\xad": '🔄',  # Refresh
    r'Ã°Å¸Å¡â\x80": '🚀',  # Rocket
    r'Ã°Å¸Å¡Â«': '🔧',  # Wrench
    r'Ã°Å¸Å¡Â¦': '📦',  # Package
    r'Ã°Å¸â"§': '🔧',  # Wrench
    r'Ã°Å¸â\'\xadŽ': '💎',  # Gem
    r'Ã°Å¸â\'\xad°': '💰',  # Money bag
    r'Ã°Å¸Å¡Â¦': '📦',  # Package
    r'Ã°Å¸Å¡â\x80': '🚀',  # Rocket
    r'Ã°Å¸Å¡â¬': '💻',  # Laptop
    r'Ã°Å¸â¥Ã¯Â¸Â': '🖥️',  # Desktop
    r'Ã°Å¸â"Å': '🔌',  # Plug
    
    # Warning/symbol emojis
    r'âš¡': '⚡',  # Lightning
    r'âš™ï¸': '⚙️',  # Gear
    r'âœ…': '✅',  # Checkmark
    r'Ã°Å¸â\'\xad¤': '🎯',  # Target
}

# Apply emoji replacements
for pattern, replacement in emoji_replacements.items():
    matches = len(re.findall(pattern, content))
    if matches > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += matches
        print(f"Fixed {matches} instances of emoji pattern")

# 6. Apply simple text replacements
for old, new in replacements:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed_count += count
        print(f"Fixed {count} instances of '{old[:20]}...' → '{new}'")

# 7. Fix bullet points in span tags specifically
bullet_span_pattern = r'(<span[^>]*className="text-primary"[^>]*>)[^<]*Ã[^<]*?(</span>)'
matches = len(re.findall(bullet_span_pattern, content))
if matches > 0:
    content = re.sub(bullet_span_pattern, r'\1•\2', content)
    fixed_count += matches
    print(f"Fixed {matches} bullet point spans")

# 8. Fix corrupted emojis in icon fields (like in arrays)
icon_field_pattern = r'(icon:\s*"[^"]*)Ã[^"]*(")'
matches = len(re.findall(icon_field_pattern, content))
if matches > 0:
    # This is trickier - we'll handle common ones
    icon_fixes = [
        (r'icon:\s*"Ã°Å¸Å¡â¬"', 'icon: "💻"'),
        (r'icon:\s*"Ã°Å¸â¥Ã¯Â¸Â"', 'icon: "🖥️"'),
        (r'icon:\s*"Ã°Å¸â"Å"', 'icon: "🔌"'),
    ]
    for pattern, replacement in icon_fixes:
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            fixed_count += 1
            print(f"Fixed icon field: {pattern[:30]}...")

# 9. Fix text-4xl divs with corrupted emojis
text_4xl_pattern = r'(<div[^>]*text-4xl[^>]*>)[^<]*Ã[^<]*?(</div>)'
matches = len(re.findall(text_4xl_pattern, content))
if matches > 0:
    # Replace with a placeholder or try to decode
    # For now, we'll leave these as they might be context-specific
    print(f"Found {matches} text-4xl divs with corrupted content (may need manual review)")

# Count remaining corrupted characters
remaining = len(re.findall(r'Ã[¢°]', content))
if remaining > 0:
    print(f"\n⚠️  Warning: {remaining} corrupted characters still remain")
    print("These may need manual review or module-specific fixes")

# Write back if changes were made
if content != original_content:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"\n✅ Successfully fixed {fixed_count} corrupted characters/patterns")
    print(f"Remaining corrupted characters: {remaining}")
else:
    print("\n⚠️  No changes made - file may already be fixed or patterns don't match")
