file_path = 'src/pages/ModuleDetail.tsx'

# Read as bytes first to see exact pattern
with open(file_path, 'rb') as f:
    content_bytes = f.read()

# Try to decode and replace
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Try multiple bullet point patterns
patterns_to_replace = [
    ('Ã¢â¬Â¢', '•'),
    ('Ã¢â\x80\xa2', '•'),
    ('â¬Â¢', '•'),
    ('â\x80\xa2', '•'),
]

fixed = 0
original = content

# Only replace in Module 1 context
import re

# Split into lines for context checking
lines = content.split('\n')
new_lines = []

for i, line in enumerate(lines):
    # Check Module 1 context
    context_start = max(0, i-100)
    context_end = min(len(lines), i+100)
    context = '\n'.join(lines[context_start:context_end])
    
    in_module1 = (
        'moduleId === 1' in context or 
        '/module/1/' in context or 
        'topicId === "3"' in context or
        'topicId === "2"' in context or
        'Hardware Basics' in context or
        'Types of Computers' in context
    )
    
    if in_module1:
        original_line = line
        # Try all replacement patterns
        for bad, good in patterns_to_replace:
            if bad in line:
                line = line.replace(bad, good)
        
        if line != original_line:
            fixed += 1
            if fixed <= 20:
                print(f"Line {i+1}: Fixed")
    
    new_lines.append(line)

if fixed > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print(f"\nFixed {fixed} bullet points")
else:
    print("No bullet points found")
