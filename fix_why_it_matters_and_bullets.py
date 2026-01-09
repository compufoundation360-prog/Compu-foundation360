#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix "Why It Matters" section icons and remaining bullet points
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

# 1. Fix "Why It Matters" section emojis in text-4xl divs
# These are corrupted emojis that should be context-specific
why_it_matters_pattern = r'(<div[^>]*text-4xl[^>]*mb-4[^>]*>)[^<]*Ã[^<]*?(</div>[\s\S]*?Understanding (RAM|CPU|ROM|File Systems|File Extensions|File Management))'
matches = len(re.findall(why_it_matters_pattern, content, re.IGNORECASE))
if matches > 0:
    # Map context to emoji
    context_emojis = {
        'RAM': '💾',
        'CPU': '🧠',
        'ROM': '💿',
        'File Systems': '📁',
        'File Extensions': '📄',
        'File Management': '📂',
    }
    
    def replace_why_matters(match):
        div_tag = match.group(1)
        context = match.group(3)
        emoji = context_emojis.get(context, '⚠️')
        return f'{div_tag}{emoji}</div>{match.group(2)}'
    
    content = re.sub(why_it_matters_pattern, replace_why_matters, content, flags=re.IGNORECASE)
    fixed_count += matches
    print(f"Fixed {matches} 'Why It Matters' section emojis")

# 2. Fix all remaining bullet points in the file
bullet_patterns = [
    ('Ã¢â¬Â¢', '•'),
    ('Ã¢â\x80\xa2', '•'),
    ('â¬Â¢', '•'),
]

for pattern in bullet_patterns:
    count = content.count(pattern[0])
    if count > 0:
        content = content.replace(pattern[0], pattern[1])
        fixed_count += count
        print(f"Fixed {count} bullet points ({pattern[0][:10]}...)")

# 3. Fix checkmark/arrow icons in advantages/disadvantages sections
advantage_icons = [
    (r'Ã¢Å"â', '✅'),  # Checkmark
    (r'Ã¢Å"', '✅'),   # Checkmark variant
]

for pattern, icon in advantage_icons:
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, icon, content)
        fixed_count += count
        print(f"Fixed {count} advantage icons")

# 4. Fix text-4xl divs with any corrupted content - replace with placeholder
text_4xl_pattern = r'(<div[^>]*text-4xl[^>]*>)[^<]*Ã[^<]*?(</div>)'
matches = len(re.findall(text_4xl_pattern, content))
if matches > 0:
    # Try to detect context and use appropriate emoji
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        if 'text-4xl' in line and 'Ã' in line:
            # Check context
            context = ''.join(lines[max(0, i-5):min(len(lines), i+10)])
            emoji = '⚠️'  # Default
            
            # Context-based emoji detection
            if 'RAM' in context or 'Memory' in context:
                emoji = '💾'
            elif 'CPU' in context:
                emoji = '🧠'
            elif 'ROM' in context or 'Firmware' in context:
                emoji = '💿'
            elif 'File' in context:
                emoji = '📁'
            elif 'Storage' in context or 'HDD' in context or 'SSD' in context:
                emoji = '💾'
            elif 'Network' in context or 'Internet' in context:
                emoji = '🌐'
            elif 'Security' in context or 'Password' in context:
                emoji = '🔒'
            
            old = line
            line = re.sub(r'(<div[^>]*text-4xl[^>]*>)[^<]*Ã[^<]*?(</div>)', f'\\1{emoji}\\2', line)
            if line != old:
                fixed_count += 1
                if fixed_count <= 20:
                    print(f"Line {i+1}: Fixed text-4xl emoji (context-based)")
        new_lines.append(line)
    content = '\n'.join(new_lines)

# Count remaining
remaining = len(re.findall(r'Ã[¢°]', content))

print(f"\nTotal fixes: {fixed_count}")
print(f"Remaining corrupted characters: {remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Fixed 'Why It Matters' sections and bullets!")
else:
    print("⚠️  No changes")
