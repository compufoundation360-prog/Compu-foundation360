#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix specific corrupted patterns directly
"""

import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed = 0

# Fix specific patterns line by line
for i, line in enumerate(lines):
    original = line
    
    # Fix checkmark in advantages section
    if 'Ã¢Å"â' in line or 'Ã¢Å"' in line:
        line = line.replace('Ã¢Å"â', '✅')
        line = line.replace('Ã¢Å"', '✅')
    
    # Fix remaining bullet points
    if 'Ã¢â¬Â¢' in line:
        line = line.replace('Ã¢â¬Â¢', '•')
    
    # Fix "Why It Matters" section emojis
    if 'text-4xl' in line and 'Ã' in line:
        # Check context
        context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
        if 'RAM' in context or 'Memory' in context:
            line = re.sub(r'<div[^>]*text-4xl[^>]*>[^<]*Ã[^<]*?</div>', '<div className="text-4xl mb-4">💾</div>', line)
        elif 'CPU' in context:
            line = re.sub(r'<div[^>]*text-4xl[^>]*>[^<]*Ã[^<]*?</div>', '<div className="text-4xl mb-4">🧠</div>', line)
        elif 'ROM' in context:
            line = re.sub(r'<div[^>]*text-4xl[^>]*>[^<]*Ã[^<]*?</div>', '<div className="text-4xl mb-4">💿</div>', line)
        elif 'File' in context:
            line = re.sub(r'<div[^>]*text-4xl[^>]*>[^<]*Ã[^<]*?</div>', '<div className="text-4xl mb-4">📁</div>', line)
        else:
            # Generic fix
            line = re.sub(r'<div[^>]*text-4xl[^>]*>[^<]*Ã[^<]*?</div>', '<div className="text-4xl mb-4">⚠️</div>', line)
    
    if line != original:
        lines[i] = line
        fixed += 1
        if fixed <= 30:
            print(f"Line {i+1}: Fixed")

# Also do global replacements
content = '\n'.join(lines)

# Fix all remaining bullet points
bullet_count = content.count('Ã¢â¬Â¢')
if bullet_count > 0:
    content = content.replace('Ã¢â¬Â¢', '•')
    fixed += bullet_count
    print(f"Fixed {bullet_count} more bullet points")

# Fix checkmarks
checkmark_count = content.count('Ã¢Å"')
if checkmark_count > 0:
    content = content.replace('Ã¢Å"', '✅')
    fixed += checkmark_count
    print(f"Fixed {checkmark_count} checkmarks")

remaining = len(re.findall(r'Ã[¢°]', content))
print(f"\nTotal fixes: {fixed}")
print(f"Remaining: {remaining}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Done!")
