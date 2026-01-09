#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive fix for Module 1 content corruption:
1. Bullet points (Ã¢â¬Â¢ → •)
2. powerCards emoji icons
3. Arrows in text
"""

import re

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content
fixed_count = 0

# Fix 1: powerCards array icons (Module 1, topic 2)
content = re.sub(
    r'(const powerCards = \[[^\]]*?icon:\s*")Ã°Å¸Å¡â¬(")',
    r'\1💻\2',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'(icon:\s*")Ã°Å¸â¥Ã¯Â¸Â("[\s\S]*?title:\s*"Servers")',
    r'\1🖥️\2',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'(icon:\s*")Ã°Å¸â"Å("[\s\S]*?title:\s*"Embedded Systems")',
    r'\1🔌\2',
    content,
    flags=re.DOTALL
)

# More specific powerCards fixes
lines = content.split('\n')
new_lines = []
in_module1_topic2 = False

for i, line in enumerate(lines):
    # Check if we're in Module 1, topic 2 context
    if i < len(lines) - 1:
        look_ahead = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
        if 'topicId === "2"' in look_ahead and 'moduleId === 1' in look_ahead:
            in_module1_topic2 = True
    
    # Fix powerCards icons
    if 'powerCards' in line or (in_module1_topic2 and 'icon:' in line):
        if 'Ã°Å¸Å¡â¬' in line and 'Supercomputers' in ''.join(lines[max(0, i-5):i+5]):
            line = line.replace('Ã°Å¸Å¡â¬', '💻')
            fixed_count += 1
            print(f"Line {i+1}: Fixed Supercomputers icon")
        elif 'Ã°Å¸â¥Ã¯Â¸Â' in line and 'Servers' in ''.join(lines[max(0, i-5):i+5]):
            line = line.replace('Ã°Å¸â¥Ã¯Â¸Â', '🖥️')
            fixed_count += 1
            print(f"Line {i+1}: Fixed Servers icon")
        elif 'Ã°Å¸â"Å' in line and 'Embedded' in ''.join(lines[max(0, i-5):i+5]):
            line = line.replace('Ã°Å¸â"Å', '🔌')
            fixed_count += 1
            print(f"Line {i+1}: Fixed Embedded Systems icon")
    
    # Fix bullet points in Module 1 context
    context_start = max(0, i-30)
    context_end = min(len(lines), i+30)
    context = ''.join(lines[context_start:context_end])
    
    if ('moduleId === 1' in context or '/module/1/' in context or 'topicId === "3"' in context) and 'Ã¢â¬Â¢' in line:
        line = line.replace('Ã¢â¬Â¢', '•')
        fixed_count += 1
        print(f"Line {i+1}: Fixed bullet point")
    
    # Fix arrows in Module 1 text
    if ('moduleId === 1' in context or '/module/1/' in context):
        if 'Ã¢â' in line:
            # Fix IPO arrows
            if 'Input' in line or 'Process' in line or 'Output' in line:
                line = re.sub(r'Ã¢â[^<]*?', '→', line)
                if '→' in line and line != lines[i] if i < len(lines) else line:
                    fixed_count += 1
                    print(f"Line {i+1}: Fixed arrow")
    
    new_lines.append(line)

content = '\n'.join(new_lines)

# Direct replacements for specific patterns
replacements = [
    ('Ã¢â¬Â¢', '•'),  # Bullet points
]

for old, new in replacements:
    if old in content:
        # Only replace in Module 1 context
        lines = content.split('\n')
        new_lines = []
        for i, line in enumerate(lines):
            context = ''.join(lines[max(0, i-30):min(len(lines), i+30)])
            if ('moduleId === 1' in context or '/module/1/' in context or 'topicId === "3"' in context or 'Hardware Basics' in context) and old in line:
                line = line.replace(old, new)
                if line != lines[i]:
                    fixed_count += 1
            new_lines.append(line)
        content = '\n'.join(new_lines)

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"\n✅ Fixed {fixed_count} issues in Module 1 content")
else:
    print("No changes needed")
