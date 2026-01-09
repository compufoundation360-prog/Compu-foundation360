file_path = 'src/pages/ModuleDetail.tsx'

# Read as bytes to handle exact pattern
with open(file_path, 'rb') as f:
    content = f.read()

# The corrupted bullet pattern (double-encoded)
bad_bytes = b'\xc3\x83\xc2\xa2\xc3\xa2\xc2\x82\xc2\xac\xc3\x82\xc2\xa2'
good_bytes = b'\xe2\x80\xa2'  # UTF-8 for bullet •

# Also try the UTF-8 decoded version
bad_utf8 = bad_bytes.decode('utf-8', errors='ignore')
good_utf8 = '•'

# Count occurrences
count_before = content.count(bad_bytes)
print(f"Found {count_before} instances of corrupted bullet pattern")

# Only replace in Module 1 context - convert to string for context check
content_str = content.decode('utf-8', errors='replace')
lines = content_str.split('\n')

# Track which lines to fix
lines_to_fix = set()

for i, line in enumerate(lines):
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
    
    if in_module1 and bad_utf8 in line:
        lines_to_fix.add(i)

print(f"Found {len(lines_to_fix)} lines in Module 1 to fix")

# Rebuild content with fixes
new_lines = []
fixed = 0
for i, line in enumerate(lines):
    if i in lines_to_fix:
        new_line = line.replace(bad_utf8, good_utf8)
        if new_line != line:
            fixed += 1
            if fixed <= 15:
                print(f"Line {i+1}: Fixed bullet point")
            new_lines.append(new_line)
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)

if fixed > 0:
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print(f"\nFixed {fixed} bullet points in Module 1")
else:
    print("No fixes needed")
