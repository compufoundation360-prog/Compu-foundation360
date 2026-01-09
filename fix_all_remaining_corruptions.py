#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive fix for ALL remaining corrupted characters
Uses aggressive pattern matching to catch everything
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

# Strategy: Replace all instances of corrupted patterns
# First, find all unique corrupted patterns
corrupted_patterns = set(re.findall(r'Ã[¢°][^\s<>"\'}\]]{0,20}', content))
print(f"Found {len(corrupted_patterns)} unique corrupted patterns")

# Common mappings for known patterns
known_fixes = {
    # Bullet points
    'Ã¢â¬Â¢': '•',
    'Ã¢â\x80\xa2': '•',
    
    # Arrows
    'Ã¢â â': '→',
    'Ã¢â\x80\x99': '→',
    
    # Checkmarks/Advantages
    'Ã¢Å"â': '✅',
    'Ã¢Å"': '✅',
    
    # Emojis (common ones)
    'Ã°Å¸â\'Â¾': '💾',  # RAM
    'Ã°Å¸â\'Â¿': '💿',  # ROM
    'Ã°Å¸Â§Â': '🧠',  # CPU/Brain
}

# Apply known fixes
for corrupted, replacement in known_fixes.items():
    count = content.count(corrupted)
    if count > 0:
        content = content.replace(corrupted, replacement)
        fixed_count += count
        print(f"Fixed '{corrupted[:20]}' → '{replacement}': {count} instances")

# Fix all remaining Ã patterns in specific contexts
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    original_line = line
    
    # Fix in span tags (bullet points)
    if '<span' in line and 'Ã' in line:
        line = re.sub(r'(<span[^>]*>)[^<]*Ã[^<]*?(</span>)', r'\1•\2', line)
    
    # Fix in div tags (icons)
    if '<div' in line and 'text-4xl' in line and 'Ã' in line:
        # Check context to determine emoji
        context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
        emoji = '⚠️'  # Default
        if 'RAM' in context or 'Memory' in context:
            emoji = '💾'
        elif 'CPU' in context:
            emoji = '🧠'
        elif 'ROM' in context:
            emoji = '💿'
        elif 'File' in context:
            emoji = '📁'
        elif 'Storage' in context or 'HDD' in context or 'SSD' in context:
            emoji = '💾'
        
        line = re.sub(r'(<div[^>]*text-4xl[^>]*>)[^<]*Ã[^<]*?(</div>)', f'\\1{emoji}\\2', line)
    
    # Fix in text content (not in tags)
    if 'Ã' in line and not ('<' in line and '>' in line):
        # Bullet point in text
        line = re.sub(r'Ã¢â[^<>\s]*?Â¢', '•', line)
        # Arrow in text
        line = re.sub(r'Ã¢â[^<>\s]*?â', '→', line)
    
    # Fix checkmarks in advantages sections
    if 'Advantages' in line and 'Ã' in line:
        line = line.replace('Ã¢Å"', '✅')
    
    if line != original_line:
        fixed_count += 1
        if fixed_count <= 50:
            print(f"Line {i+1}: Fixed")
    
    new_lines.append(line)

content = '\n'.join(new_lines)

# Final pass: replace any remaining common corrupted patterns
replacements = [
    ('Ã¢â¬Â¢', '•'),
    ('Ã¢â â', '→'),
    ('Ã¢Å"â', '✅'),
    ('Ã¢Å"', '✅'),
]

for old, new in replacements:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed_count += count
        print(f"Final pass: Fixed '{old[:15]}': {count}")

remaining = len(re.findall(r'Ã[¢°]', content))
print(f"\nTotal fixes: {fixed_count}")
print(f"Remaining corrupted characters: {remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ All fixes applied!")
else:
    print("⚠️  No changes made")
