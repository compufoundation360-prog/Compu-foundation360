#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Aggressive fix for remaining 151 corrupted characters
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

# Aggressive replacement: Replace all corrupted patterns with appropriate defaults
lines = content.split('\n')
new_lines = []

for i, line in enumerate(lines):
    original_line = line
    
    # 1. Fix all bullet points in any context
    if 'Ã¢â¬Â¢' in line or 'Ã¢â' in line and 'Â¢' in line:
        line = re.sub(r'Ã¢â[^<]*?Â¢', '•', line)
        line = line.replace('Ã¢â¬Â¢', '•')
    
    # 2. Fix all span tags with corrupted content (bullet points)
    if '<span' in line and 'Ã' in line:
        line = re.sub(r'(<span[^>]*className="[^"]*text-primary[^"]*"[^>]*>)[^<]*Ã[^<]*?(</span>)', r'\1•\2', line)
        line = re.sub(r'(<span[^>]*>)[^<]*Ã[^<]*?(</span>)', r'\1•\2', line)
    
    # 3. Fix all div tags with text-4xl and corrupted content
    if '<div' in line and 'text-4xl' in line and 'Ã' in line:
        context = ''.join(lines[max(0, i-15):min(len(lines), i+15)])
        emoji = '⚠️'
        if 'RAM' in context or 'Memory' in context:
            emoji = '💾'
        elif 'CPU' in context or 'Processor' in context:
            emoji = '🧠'
        elif 'ROM' in context or 'Firmware' in context:
            emoji = '💿'
        elif 'File' in context:
            emoji = '📁'
        elif 'Storage' in context or 'HDD' in context or 'SSD' in context or 'Disk' in context:
            emoji = '💾'
        elif 'Network' in context or 'Internet' in context:
            emoji = '🌐'
        elif 'Security' in context or 'Password' in context or 'Firewall' in context:
            emoji = '🔒'
        elif 'Advantages' in context or 'Benefits' in context:
            emoji = '✅'
        elif 'Disadvantages' in context or 'Drawbacks' in context:
            emoji = '❌'
        
        line = re.sub(r'(<div[^>]*text-4xl[^>]*>)[^<]*Ã[^<]*?(</div>)', f'\\1{emoji}\\2', line)
        line = re.sub(r'(<div[^>]*text-3xl[^>]*>)[^<]*Ã[^<]*?(</div>)', f'\\1{emoji}\\2', line)
    
    # 4. Fix icon fields in objects/arrays
    if 'icon:' in line and 'Ã' in line:
        # Common icon replacements
        line = re.sub(r'(icon:\s*")[^"]*Ã[^"]*(")', r'\1⚠️\2', line)
        # But try to preserve known patterns
        if 'RAM' in line or 'Memory' in line:
            line = re.sub(r'(icon:\s*")[^"]*Ã[^"]*(")', r'\1💾\2', line)
        elif 'CPU' in line:
            line = re.sub(r'(icon:\s*")[^"]*Ã[^"]*(")', r'\1🧠\2', line)
        elif 'Storage' in line or 'HDD' in line or 'SSD' in line:
            line = re.sub(r'(icon:\s*")[^"]*Ã[^"]*(")', r'\1💾\2', line)
    
    # 5. Fix checkmarks/arrows in advantages sections
    if 'Advantages' in line or 'Benefits' in line:
        line = line.replace('Ã¢Å"', '✅')
        line = line.replace('Ã¢Å"â', '✅')
    
    # 6. Fix any remaining arrow patterns
    if 'Ã¢â' in line and ('Input' in line or 'Process' in line or 'Output' in line or '→' in line or 'e.g.' in line):
        line = re.sub(r'Ã¢â[^<>\s"\'}\]]*?', '→', line)
    
    # 7. Replace any isolated corrupted characters with appropriate defaults
    # Only if not inside a tag
    if 'Ã' in line and not (line.strip().startswith('<') or 'icon:' in line or 'className=' in line):
        # Bullet point pattern
        line = re.sub(r'\s*Ã¢â[^<>\s]*?Â¢\s*', ' • ', line)
        # Arrow pattern
        line = re.sub(r'\s*Ã¢â[^<>\s]*?â\s*', ' → ', line)
    
    if line != original_line:
        fixed_count += 1
        if fixed_count <= 100:
            pass  # Don't print all
    
    new_lines.append(line)

content = '\n'.join(new_lines)

# Final global replacements
final_replacements = [
    ('Ã¢â¬Â¢', '•'),
    ('Ã¢â â', '→'),
    ('Ã¢Å"â', '✅'),
    ('Ã¢Å"', '✅'),
    ('Ã¢Â"', '❌'),
]

for old, new in final_replacements:
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        fixed_count += count

remaining = len(re.findall(r'Ã[¢°]', content))
print(f"Fixed: {fixed_count} patterns")
print(f"Remaining corrupted characters: {remaining}")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Aggressive fixes applied!")
else:
    print("⚠️  No changes")
