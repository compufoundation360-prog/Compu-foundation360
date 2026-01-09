#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Direct fixes for Module 1 content - handles exact byte patterns
"""

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed = 0

# Fix powerCards icons
for i in range(len(lines)):
    if i >= 7510 and i <= 7526:  # powerCards array lines
        if 'icon:' in lines[i]:
            if 'Supercomputers' in ''.join(lines[i:i+5]):
                lines[i] = lines[i].replace('"Ã°Å¸Å¡â¬"', '"💻"')
                if lines[i] != f.read() if hasattr(f, 'read') else False:
                    fixed += 1
                    print(f"Line {i+1}: Fixed Supercomputers icon")
            elif 'Servers' in ''.join(lines[i:i+5]):
                lines[i] = lines[i].replace('"Ã°Å¸â¥Ã¯Â¸Â"', '"🖥️"')
                fixed += 1
                print(f"Line {i+1}: Fixed Servers icon")
            elif 'Embedded' in ''.join(lines[i:i+5]):
                lines[i] = lines[i].replace('"Ã°Å¸â"Å"', '"🔌"')
                fixed += 1
                print(f"Line {i+1}: Fixed Embedded Systems icon")

# Fix bullet points
for i, line in enumerate(lines):
    context = ''.join(lines[max(0, i-30):min(len(lines), i+30)])
    if ('moduleId === 1' in context or '/module/1/' in context or 'Hardware Basics' in context):
        if 'Ã¢â¬Â¢' in line:
            new_line = line.replace('Ã¢â¬Â¢', '•')
            if new_line != line:
                lines[i] = new_line
                fixed += 1
                print(f"Line {i+1}: Fixed bullet point")

# Fix arrows in IPO text
for i, line in enumerate(lines):
    context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
    if ('moduleId === 1' in context or '/module/1/' in context) and ('Input' in line or 'Process' in line or 'Output' in line):
        if 'Ã¢â' in line:
            new_line = line.replace('Ã¢â â', '→').replace('Ã¢â', '→')
            if new_line != line:
                lines[i] = new_line
                fixed += 1
                print(f"Line {i+1}: Fixed arrow")

if fixed > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"\nFixed {fixed} issues")
else:
    print("No fixes needed")
