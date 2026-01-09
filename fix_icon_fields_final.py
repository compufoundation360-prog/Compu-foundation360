#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Final pass - fix remaining icon field corruptions
"""

import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content
fixed_count = 0

# Specific icon field patterns that need fixing
icon_fixes = [
    # Network status icons
    (r'icon:\s*"⚠️\s*Ã¯Â¸Â"', 'icon: "⚠️"'),
    (r'icon:\s*"Ã¢Â"', 'icon: "❌"'),
    
    # Generation icons (1G, 2G, 3G, etc.)
    (r'icon:\s*"Ã°Å¸â"Å¾"', 'icon: "📞"'),
    (r'icon:\s*"Ã°Å¸â"Å¸"', 'icon: "📟"'),
    (r'icon:\s*"Ã°Å¸Å½Â"', 'icon: "📱"'),
    
    # Web/Internet icons
    (r'icon:\s*"Ã°Å¸â"Â¤"', 'icon: "💬"'),
    (r'icon:\s*"Ã°Å¸â"Â¥"', 'icon: "💥"'),
    (r'icon:\s*"Ã°Å¸â"â"', 'icon: "📊"'),
    (r'icon:\s*"Ã°Å¸â"Â"', 'icon: "📄"'),
    (r'icon:\s*"Ã°Å¸â"ºâ"', 'icon: "📷"'),
    (r'icon:\s*"Ã°Å¸â"ºâ"', 'icon: "📷"'),
    
    # Security icons
    (r'icon:\s*"Ã°Å¸Â"° Walls"', 'icon: "🏰 Walls"'),
    (r'icon:\s*"Ã°Å¸â"Â¡Ã¯Â¸Â Gate"', 'icon: "🚪 Gate"'),
    (r'icon:\s*"Ã°Å¸â\'\xadÅ½ Vault"', 'icon: "💎 Vault"'),
    
    # Password icons
    (r'icon:\s*"Ã°Å¸â"Â"', 'icon: "🔐"'),
    (r'icon:\s*"Ã°Å¸â"Â£"', 'icon: "🔒"'),
    (r'icon:\s*"Ã°Å¸Â¦â"', 'icon: "🔑"'),
    (r'icon:\s*"Ã°Å¸â"â"', 'icon: "🔄"'),
    (r'icon:\s*"Ã°Å¸Â"¶"', 'icon: "🙆"'),
    (r'icon:\s*"Ã¢Å"¨Ã¯Â¸Â"', 'icon: "⌨️"'),
    
    # MFA icons
    (r'icon:\s*"Ã°Å¸â"Â±"', 'icon: "📱"'),
    (r'icon:\s*"Ã°Å¸â\'\xadâ"', 'icon: "👆"'),
    (r'icon:\s*"Ã°Å¸â"Â¢"', 'icon: "🔐"'),
    (r'icon:\s*"Ã°Å¸â"Â"Ã¯Â¸Â"', 'icon: "🔑"'),
    
    # Malware icons
    (r'icon:\s*"Ã°Å¸Â¦Â"', 'icon: "🦠"'),
    (r'icon:\s*"Ã°Å¸ÂªÂ±"', 'icon: "🪱"'),
    (r'icon:\s*"Ã°Å¸â\'\xadÂ°"', 'icon: "💰"'),
    (r'icon:\s*"Ã°Å¸•ÂµÃ¯Â¸Â"', 'icon: "🔍"'),
    (r'icon:\s*"Ã°Å¸â"Âº"', 'icon: "📢"'),
]

for pattern, replacement in icon_fixes:
    matches = len(re.findall(pattern, content))
    if matches > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += matches
        print(f"Fixed {matches} icon fields")

# Also fix corrupted emojis in name fields (like "Ã°Å¸Â"° Walls")
name_fixes = [
    (r'name:\s*"Ã°Å¸Â"° Walls"', 'name: "🏰 Walls"'),
    (r'name:\s*"Ã°Å¸â"Â¡Ã¯Â¸Â Gate"', 'name: "🚪 Gate"'),
    (r'name:\s*"Ã°Å¸â\'\xadÅ½ Vault"', 'name: "💎 Vault"'),
]

for pattern, replacement in name_fixes:
    matches = len(re.findall(pattern, content))
    if matches > 0:
        content = re.sub(pattern, replacement, content)
        fixed_count += matches
        print(f"Fixed {matches} name fields")

# Fix any remaining Ã¯Â¸Â (emoji modifier) patterns
modifier_pattern = r'([\u{1F300}-\u{1F9FF}])\s*Ã¯Â¸Â'
matches = len(re.findall(modifier_pattern, content, re.UNICODE))
if matches > 0:
    content = re.sub(modifier_pattern, r'\1', content)
    fixed_count += matches
    print(f"Fixed {matches} emoji modifiers")

# Fix remaining corruption after emojis
remaining_after_emoji = r'([\u{1F300}-\u{1F9FF}])\s*Ã[^"]*"'
matches = len(re.findall(remaining_after_emoji, content, re.UNICODE))
if matches > 0:
    content = re.sub(remaining_after_emoji, r'\1"', content)
    fixed_count += matches
    print(f"Fixed {matches} post-emoji corruptions")

remaining = len(re.findall(r'Ã[¢°]', content))
print(f"\nTotal fixes: {fixed_count}")
print(f"Remaining corrupted characters: {remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Final pass complete!")
else:
    print("⚠️  No changes")
