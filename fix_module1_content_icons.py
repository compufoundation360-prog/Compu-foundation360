#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix corrupted characters in Module 1 content sections:
1. Bullet points (Ã¢â¬Â¢ → •)
2. Emojis in powerCards array
3. Arrows in text
"""

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed_count = 0

# Fix bullet points in Module 1 context (Hardware Basics topic)
for i, line in enumerate(lines):
    # Check if it's in Module 1 topic 3 context (Hardware Basics)
    context_start = max(0, i-50)
    context_end = min(len(lines), i+50)
    context = ''.join(lines[context_start:context_end])
    
    # Only fix in Module 1, topic 3 (Hardware Basics)
    if '/module/1/topic/3' in context or ('topicId === "3"' in context and 'moduleId === 1' in context):
        # Fix corrupted bullet points
        if 'Ã¢â¬Â¢' in line:
            line = line.replace('Ã¢â¬Â¢', '•')
            fixed_count += 1
            print(f"Line {i+1}: Fixed bullet point")
        lines[i] = line

# Fix arrows in Module 1 text
for i, line in enumerate(lines):
    context_start = max(0, i-20)
    context_end = min(len(lines), i+20)
    context = ''.join(lines[context_start:context_end])
    
    # Fix arrows in "Input → Process → Output" type text
    if 'moduleId === 1' in context or '/module/1/' in context:
        if 'Ã¢â' in line and ('Input' in line or 'Process' in line or 'Output' in line):
            line = line.replace('Ã¢â â', '→')
            line = line.replace('Ã¢â', '→')  # More aggressive replacement
            if line != lines[i]:
                fixed_count += 1
                print(f"Line {i+1}: Fixed arrow")
                lines[i] = line

# Fix powerCards array icons - find the array definition
in_power_cards = False
power_cards_start = -1
for i, line in enumerate(lines):
    if 'powerCards' in line and '=' in line and '[' in line:
        in_power_cards = True
        power_cards_start = i
        print(f"Found powerCards at line {i+1}")
    elif in_power_cards:
        # Look for icon fields in the array
        if 'icon:' in line or '"icon"' in line:
            # Check if it's corrupted
            if 'Ã°' in line or 'Ã¢' in line:
                # Try to identify and replace corrupted emojis
                # Common patterns: server rack, embedded chip, supercomputer
                if 'Server' in context or 'server' in line:
                    line = re.sub(r'icon:\s*"[^"]*Ã[^"]*"', 'icon: "🖥️"', line)
                elif 'Embedded' in context or 'embedded' in line:
                    line = re.sub(r'icon:\s*"[^"]*Ã[^"]*"', 'icon: "🔌"', line)
                elif 'Supercomputer' in context or 'supercomputer' in line:
                    line = re.sub(r'icon:\s*"[^"]*Ã[^"]*"', 'icon: "💻"', line)
                else:
                    # Generic fix - remove corrupted part
                    import re
                    line = re.sub(r'"[^"]*Ã[^"]*"', '"⚠️"', line)
                
                if line != lines[i]:
                    fixed_count += 1
                    print(f"Line {i+1}: Fixed powerCards icon")
                    lines[i] = line
        # Stop when we exit the array
        if '];' in line or (line.strip().startswith('}') and not line.strip().startswith('});')):
            if power_cards_start > 0 and i > power_cards_start + 5:
                in_power_cards = False

# Fix corrupted emojis in text-4xl divs (Why It Matters sections)
import re
for i, line in enumerate(lines):
    context_start = max(0, i-30)
    context_end = min(len(lines), i+10)
    context = ''.join(lines[context_start:context_end])
    
    # Only fix Module 1
    if 'moduleId === 1' in context or '/module/1/' in context:
        # Fix text-4xl emoji divs
        if 'text-4xl' in line and 'Ã°' in line:
            # Replace corrupted emoji with placeholder or remove
            line = re.sub(r'<div[^>]*text-4xl[^>]*>[^<]*Ã°[^<]*</div>', 
                         '<div className="text-4xl">⚠️</div>', line)
            if line != lines[i]:
                fixed_count += 1
                print(f"Line {i+1}: Fixed text-4xl emoji")
                lines[i] = line

if fixed_count > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"\nFixed {fixed_count} issues in Module 1 content")
else:
    print("No issues found or already fixed")
