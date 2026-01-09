file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'rb') as f:
    content_bytes = f.read()

# Try to find and replace the corrupted rocket emoji
# The corrupted pattern appears to be UTF-8 misinterpreted bytes

# Read as UTF-8 with error handling
with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

original = content

# Replace any span containing corrupted characters before "Launch Simulator"  
# This is more aggressive but should catch all variations
import re

# Pattern: <span...>ANY_CORRUPTED_TEXT</span> Launch Simulator
# Only in Module 1 context
lines = content.split('\n')
new_lines = []
fixed_count = 0

for i, line in enumerate(lines):
    if 'Launch Simulator' in line:
        # Check context for Module 1
        context_start = max(0, i - 50)
        context_end = min(len(lines), i + 10)
        context = '\n'.join(lines[context_start:context_end])
        
        # Only fix Module 1
        if '/module/1/' in context or 'topicId === "m1-t' in context or 'moduleId === 1' in context:
            # Replace the entire corrupted span pattern
            if '<span' in line and '</span>' in line:
                # Replace any span with corrupted text before "Launch Simulator"
                line = re.sub(
                    r'<span[^>]*>[^<]*</span>\s*Launch Simulator',
                    '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator',
                    line
                )
                if line != lines[i]:
                    fixed_count += 1
                    print(f"Fixed line {i+1}")
    new_lines.append(line)

if fixed_count > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print(f"\nFixed {fixed_count} Launch Simulator button(s)")
else:
    print("No fixes needed or pattern not found")
    # Debug: show what we're looking for
    for i, line in enumerate(lines):
        if 'Launch Simulator' in line:
            context_start = max(0, i - 10)
            context_end = min(len(lines), i + 5)
            context = '\n'.join(lines[context_start:context_end])
            if '/module/1/' in context:
                print(f"\nFound Launch Simulator at line {i+1}:")
                print(f"  Content: {repr(line[:100])}")
