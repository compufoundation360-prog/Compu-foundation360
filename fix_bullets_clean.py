file_path = 'src/pages/ModuleDetail.tsx'

import re

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Find and replace corrupted bullet spans in the Hardware Basics section
# Pattern: <span className="text-primary">[corrupted chars]</span>
# Replace with: <span className="text-primary">•</span>

# Only in Hardware Basics context (around lines 15669, 15677, 15685)
lines = content.split('\n')
fixed = 0

for i, line in enumerate(lines):
    # Check if we're in Hardware Basics External/Internal section
    if i > 15650 and i < 15700:
        # Look for span with corrupted bullet
        if 'text-primary' in line and ('•' in line or 'Ã¢â' in line or '¬Â' in line):
            # Check context
            context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
            if 'Hidden inside' in context or 'Requires technical' in context or 'Critical for system' in context:
                # Replace the entire span content with clean bullet
                old = line
                # Match span tag with any corrupted content
                line = re.sub(
                    r'(<span className="text-primary">)[^<]*?(</span>)',
                    r'\1•\2',
                    line
                )
                if line != old:
                    lines[i] = line
                    fixed += 1
                    print(f"Line {i+1}: Fixed bullet span")

if fixed > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f"\nFixed {fixed} bullet point spans")
else:
    print("No fixes needed")
