file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed = 0

# Fix the specific Hardware Basics section (External/Internal comparison)
# Look for the pattern around lines 15669, 15677, 15685
for i, line in enumerate(lines):
    # Check if we're in the Hardware Basics External/Internal section
    # Look for context: "Hidden inside the case" or "Requires technical expertise"
    if i > 15600 and i < 15700:
        if 'Ã¢â¬Â¢' in line or 'Ã¢â' in line:
            # Check surrounding context
            context = ''.join(lines[max(0, i-5):min(len(lines), i+10)])
            if 'Hidden inside the case' in context or 'Requires technical expertise' in context or 'Critical for system performance' in context:
                # Replace corrupted bullet
                old = line
                line = line.replace('Ã¢â¬Â¢', '•')
                # Also try other variations
                import re
                line = re.sub(r'Ã¢â[^<]*?', '•', line)
                if line != old:
                    lines[i] = line
                    fixed += 1
                    print(f"Line {i+1}: Fixed bullet point")

# Also check around line 7812 area (Hardware Basics topic 3)
for i, line in enumerate(lines):
    if i > 7800 and i < 7850:
        context = ''.join(lines[max(0, i-10):min(len(lines), i+10)])
        if ('Hardware Basics' in context or 'topicId === "3"' in context) and ('Ã¢â¬Â¢' in line or 'Ã¢â' in line):
            old = line
            line = line.replace('Ã¢â¬Â¢', '•')
            import re
            line = re.sub(r'Ã¢â[^<]*?', '•', line)
            if line != old:
                lines[i] = line
                fixed += 1
                print(f"Line {i+1}: Fixed bullet point")

if fixed > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"\nFixed {fixed} bullet points in Hardware Basics section")
else:
    print("No bullet points found to fix")
