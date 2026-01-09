file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed = 0

# Fix powerCards icons (lines 7512, 7517, 7522)
powercard_fixes = [
    (7511, 'Supercomputers', '💻'),
    (7516, 'Servers', '🖥️'),
    (7521, 'Embedded', '🔌')
]

for line_idx, search_term, emoji in powercard_fixes:
    if line_idx < len(lines) and 'icon:' in lines[line_idx]:
        if search_term in ''.join(lines[max(0, line_idx-2):line_idx+5]):
            old = lines[line_idx]
            # Replace any corrupted emoji pattern
            import re
            lines[line_idx] = re.sub(r'"[^"]*Ã[^"]*"', f'"{emoji}"', lines[line_idx])
            if lines[line_idx] != old:
                fixed += 1
                print(f"Line {line_idx+1}: Fixed {search_term} icon")

# Fix all bullet points in Module 1
for i, line in enumerate(lines):
    context = ''.join(lines[max(0, i-50):min(len(lines), i+50)])
    if ('moduleId === 1' in context or '/module/1/' in context or 'Hardware Basics' in context or 'topic/3' in context):
        if 'Ã¢â¬Â¢' in line:
            lines[i] = line.replace('Ã¢â¬Â¢', '•')
            fixed += 1
            if fixed <= 10:  # Limit print output
                print(f"Line {i+1}: Fixed bullet point")

# Fix arrows
for i, line in enumerate(lines):
    context = ''.join(lines[max(0, i-20):min(len(lines), i+20)])
    if ('moduleId === 1' in context or '/module/1/' in context):
        if 'Ã¢â' in line and ('Input' in line or 'Process' in line or 'Output' in line or 'IPO' in line):
            old = line
            import re
            lines[i] = re.sub(r'Ã¢â[^<]*?', '→', line)
            if lines[i] != old:
                fixed += 1
                if fixed <= 15:
                    print(f"Line {i+1}: Fixed arrow")

if fixed > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"\nTotal: Fixed {fixed} issues in Module 1")
else:
    print("No fixes applied")
