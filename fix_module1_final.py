#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Final fix for Module 1 icon issues - handles corrupted UTF-8 characters
"""

file_path = 'src/pages/ModuleDetail.tsx'

# Read file with error handling
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed_count = 0
line_numbers = []

# Process each line
for i, line in enumerate(lines):
    original_line = line
    
    # Fix Launch Simulator buttons in Module 1 context
    if 'Launch Simulator' in line:
        # Check if it's in Module 1 context (look at surrounding lines)
        context_lines = lines[max(0, i-30):min(len(lines), i+5)]
        context = ''.join(context_lines)
        
        if '/module/1/' in context or 'module/1/topic' in context:
            # Replace any corrupted span before "Launch Simulator"
            if '<span' in line:
                # Use regex to find and replace the span
                import re
                line = re.sub(
                    r'<span[^>]*className="mr-2"[^>]*>.*?</span>\s*Launch Simulator',
                    '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator',
                    line
                )
                if line != original_line:
                    fixed_count += 1
                    line_numbers.append(i+1)
                    lines[i] = line
                    print(f"Line {i+1}: Fixed Launch Simulator button")

# Write back
if fixed_count > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"\nSuccessfully fixed {fixed_count} Launch Simulator button(s) in Module 1")
    print(f"Fixed at lines: {line_numbers}")
else:
    print("\nNo Launch Simulator buttons found in Module 1 context")
    # Show what we found
    for i, line in enumerate(lines):
        if 'Launch Simulator' in line:
            context_lines = lines[max(0, i-10):min(len(lines), i+5)]
            context = ''.join(context_lines)
            if '/module/1/' in context:
                print(f"\nLine {i+1} has Launch Simulator in Module 1 context:")
                print(f"  Raw line (first 150 chars): {repr(line[:150])}")
