import re

file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Find and replace Launch Simulator buttons in Module 1 context
# Pattern: corrupted emoji span followed by "Launch Simulator"
# Only in Module 1 context (check surrounding lines)

lines = content.split('\n')
new_lines = []
fixed = False

for i, line in enumerate(lines):
    # Check if line contains Launch Simulator and corrupted emoji
    if 'Launch Simulator' in line and ('Ã°' in line or 'ðŸ' in line or '\x80' in line):
        # Check context - look for Module 1 indicators nearby
        context_start = max(0, i - 30)
        context_end = min(len(lines), i + 5)
        context = '\n'.join(lines[context_start:context_end])
        
        # Only fix if it's in Module 1 context
        if '/module/1/' in context or 'moduleId === 1' in context:
            # Replace the corrupted span with Rocket icon
            line = re.sub(
                r'<span className="mr-2">[^<]*?</span> Launch Simulator',
                '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator',
                line
            )
            fixed = True
            print(f"Fixed Launch Simulator at line {i+1}")
    new_lines.append(line)

if fixed:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print("Fixed Launch Simulator icons for Module 1")
else:
    print("No Launch Simulator buttons found to fix")
