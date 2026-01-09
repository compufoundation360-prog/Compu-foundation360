#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Simple direct fix for remaining emoji corruption
"""

import re

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content
fixed = 0

# 1. Clean trailing corruption after emojis
replacements = [
    # Warning emoji cleanup
    ('⚠️â¢Ã¯Â¸Â', '⚠️'),
    ('⚠️ â¢Ã¯Â¸Â', '⚠️'),
    ('⚠️Ã¯Â¸Â', '⚠️'),
    ('⚠️ Ã¯Â¸Â', '⚠️'),
    ('⚠️â"Ã¯Â¸Â', '⚠️'),
    
    # Other common patterns
    ('Ã¯Â¸Â', ''),  # Remove standalone variation selector
    (' Ã¯Â¸Â', ' '),  # Remove with space
]

for old, new in replacements:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed += count
        print(f"Fixed '{old[:20]}...': {count}")

# 2. Fix specific corrupted patterns in divs
lines = content.split('\n')
new_lines = []

for i, line in enumerate(lines):
    original_line = line
    
    # Fix text-5xl divs with corrupted content
    if 'text-5xl' in line and 'Ã' in line:
        context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
        emoji = '⚠️'
        
        if 'Server' in context or 'Desktop' in context:
            emoji = '🖥️'
        elif 'Mobile' in context or 'Phone' in context:
            emoji = '📱'
        elif 'Printer' in context:
            emoji = '🖨️'
        elif 'Picture' in context or 'Image' in context:
            emoji = '🖼️'
        elif 'Warning' in context or 'Important' in context or 'Risk' in context:
            emoji = '⚠️'
        elif 'Key' in context or 'Password' in context:
            emoji = '🔑'
        elif 'Chart' in context:
            emoji = '📊'
        elif 'Copyright' in context:
            emoji = '©️'
        elif 'Shield' in context or 'Security' in context:
            emoji = '🛡️'
        elif 'Gate' in context:
            emoji = '🚪'
        
        # Replace any corrupted content in the div
        old = line
        line = re.sub(r'(<div[^>]*text-5xl[^>]*>)[^<]*Ã[^<]*?(</div>)', f'\\1{emoji}\\2', line)
        if line != original_line:
            fixed += 1
    
    # Fix name fields
    if 'name:' in line and 'Ã' in line:
        old = line
        line = line.replace('Ã°Å¸â"ºÂ¡Ã¯Â¸Â', '🚪')
        line = line.replace('⚠️â"Ã¯Â¸Â', '⚠️')
        line = line.replace('⚠️ Ã¯Â¸Â', '⚠️')
        if line != original_line:
            fixed += 1
    
    # Fix feedback fields
    if 'feedback:' in line and '⚠️' in line:
        old = line
        line = line.replace('⚠️ Ã¯Â¸Â', '⚠️')
        line = line.replace('⚠️â"Ã¯Â¸Â', '⚠️')
        if line != original_line:
            fixed += 1
    
    # Fix arrow corruption in text
    if 'Ã¢â' in line and 'Ã¯Â¸Â' in line:
        old = line
        line = re.sub(r'Ã¢â[^<]*?Ã¯Â¸Â', '→', line)
        if line != original_line:
            fixed += 1
    
    new_lines.append(line)

content = '\n'.join(new_lines)

# Final cleanup pass
final_fixes = [
    ('⚠️ â¢Ã¯Â¸Â', '⚠️'),
    ('⚠️Ã¯Â¸Â', '⚠️'),
    ('⚠️ Ã¯Â¸Â', '⚠️'),
]

for old, new in final_fixes:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed += count

remaining = len(re.findall(r'⚠️â|Ã¯Â¸Â', content))
print(f"\nTotal fixes: {fixed}")
print(f"Remaining: {remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Fixed!")
else:
    print("No changes")
