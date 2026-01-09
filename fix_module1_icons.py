#!/usr/bin/env python3
"""
Fix corrupted emoji/unicode icons in Module 1 topics only.
Replaces corrupted text with proper React icon components.
"""

file_path = r'src/pages/ModuleDetail.tsx'

# Read file
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Track changes
changes_made = False

# Fix Launch Simulator buttons (Module 1 - topic 3)
old_launch = '<span className="mr-2">Ã°Å¸âºÂ Ã¯Â¸Â</span> Launch Simulator'
new_launch = '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator'
if old_launch in content:
    content = content.replace(old_launch, new_launch)
    changes_made = True
    print("Fixed Launch Simulator buttons")

# Fix Previous Topic buttons - try different variations
prev_patterns = [
    'Ã¢â Â Previous Topic',
    'Ã¢â\x80\xa0Â Previous Topic',
    'Ã¢â\x80\xa0Â\x8a Previous Topic'
]

for pattern in prev_patterns:
    if pattern in content:
        # Only fix Module 1 topics (check context)
        lines = content.split('\n')
        new_lines = []
        for i, line in enumerate(lines):
            if pattern in line and '/module/1/topic' in content[max(0, i-5):i+5]:
                line = line.replace(pattern, '<ArrowLeft className="mr-2 h-4 w-4 inline" /> Previous Topic')
                changes_made = True
                print(f"Fixed Previous Topic button at line {i+1}")
            new_lines.append(line)
        content = '\n'.join(new_lines)

# Fix Next Topic buttons - try different variations  
next_patterns = [
    'Ã¢â â',
    'Ã¢â\x80\xa0â\x80\x99',
    'Next Topic: '
]

# More targeted approach - find and replace in context
import re

# Fix Previous Topic for Module 1
prev_regex = r'(<Button[^>]*onClick=\{\(\) => navigate\("/module/1/topic/[^"]*"\)\}[^>]*>)\s*Ã¢â[^<]*Previous Topic'
def replace_prev(match):
    return match.group(1) + '\n                  <ArrowLeft className="mr-2 h-4 w-4 inline" /> Previous Topic'

content = re.sub(prev_regex, replace_prev, content, flags=re.MULTILINE)
if re.search(prev_regex, content, flags=re.MULTILINE):
    changes_made = True
    print("Fixed Module 1 Previous Topic buttons with regex")

# Fix Next Topic for Module 1  
next_regex = r'(Next Topic:[^<]*?)Ã¢â[^<]*?(</Button>)'
def replace_next(match):
    topic_text = match.group(1).strip()
    return topic_text + ' <ArrowRight className="ml-2 h-4 w-4 inline" />' + match.group(2)

# Only apply to Module 1 context
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    # Check if this line has corrupted next topic AND is in Module 1 context
    context = '\n'.join(lines[max(0, i-10):min(len(lines), i+5)])
    if '/module/1/topic' in context and 'Ã¢â' in line and 'Next Topic:' in line:
        line = re.sub(next_regex, replace_next, line)
        changes_made = True
        print(f"Fixed Next Topic button at line {i+1}")
    new_lines.append(line)

content = '\n'.join(new_lines)

# More direct replacements for common patterns in Module 1 context
# Launch Simulator
if 'Ã°Å¸âºÂ Ã¯Â¸Â' in content:
    # Only replace in Module 1 context
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        context_window = '\n'.join(lines[max(0, i-20):min(len(lines), i+5)])
        if 'Ã°Å¸âºÂ Ã¯Â¸Â' in line and '/module/1/' in context_window:
            line = line.replace('Ã°Å¸âºÂ Ã¯Â¸Â', '<Rocket className="mr-2 h-5 w-5 inline" />')
            changes_made = True
            print(f"Fixed Launch Simulator icon at line {i+1}")
        new_lines.append(line)
    content = '\n'.join(new_lines)

# Previous Topic - direct replacement
if 'Ã¢â' in content:
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        # Check if it's a Previous Topic button in Module 1
        if 'Ã¢â' in line and 'Previous Topic' in line:
            context_window = '\n'.join(lines[max(0, i-5):min(len(lines), i+5)])
            if '/module/1/topic' in context_window:
                # Replace corrupted arrow
                line = re.sub(r'Ã¢â[^<]*?Previous Topic', '<ArrowLeft className="mr-2 h-4 w-4 inline" /> Previous Topic', line)
                changes_made = True
                print(f"Fixed Previous Topic at line {i+1}")
        new_lines.append(line)
    content = '\n'.join(new_lines)

# Next Topic - direct replacement
if 'Ã¢â' in content:
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        # Check if it's a Next Topic button in Module 1
        if 'Ã¢â' in line and 'Next Topic:' in line:
            context_window = '\n'.join(lines[max(0, i-5):min(len(lines), i+5)])
            if '/module/1/topic' in context_window:
                # Replace corrupted arrow
                line = re.sub(r'(Next Topic:[^<]*?)Ã¢â[^<]*', r'\1 <ArrowRight className="ml-2 h-4 w-4 inline" />', line)
                changes_made = True
                print(f"Fixed Next Topic at line {i+1}")
        new_lines.append(line)
    content = '\n'.join(new_lines)

# Write back if changes were made
if changes_made:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"\n✅ Fixed Module 1 icon issues in {file_path}")
else:
    print("\n⚠️  No changes needed or patterns not found")
