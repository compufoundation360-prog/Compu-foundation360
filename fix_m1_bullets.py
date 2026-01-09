file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

fixed = 0

# Fix bullet points - be more aggressive
for i, line in enumerate(lines):
    # Check Module 1 context broadly
    context_window = ''.join(lines[max(0, i-100):min(len(lines), i+100)])
    
    # Check if we're in Module 1
    in_module1 = (
        'moduleId === 1' in context_window or 
        '/module/1/' in context_window or 
        'topicId === "3"' in context_window or
        'topicId === "2"' in context_window or
        'Hardware Basics' in context_window or
        'Types of Computers' in context_window
    )
    
    if in_module1 and 'Ã¢â¬Â¢' in line:
        new_line = line.replace('Ã¢â¬Â¢', '•')
        if new_line != line:
            lines[i] = new_line
            fixed += 1
            if fixed <= 20:
                print(f"Line {i+1}: Fixed bullet point")

# Also fix arrows
for i, line in enumerate(lines):
    context_window = ''.join(lines[max(0, i-50):min(len(lines), i+50)])
    if ('moduleId === 1' in context_window or '/module/1/' in context_window):
        if 'Ã¢â' in line and ('Input' in line or 'Process' in line or 'Output' in line or 'IPO' in line):
            import re
            new_line = re.sub(r'Ã¢â[^<>\s]*?', '→', line)
            if new_line != line:
                lines[i] = new_line
                fixed += 1
                if fixed <= 25:
                    print(f"Line {i+1}: Fixed arrow")

if fixed > 0:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"\nTotal fixes: {fixed}")
else:
    print("No bullet points or arrows found to fix")
