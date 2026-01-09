file_path = 'src/pages/ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()

# Line 7934 (index 7933) has the corrupted Launch Simulator button
# Replace the corrupted span with Rocket icon
if len(lines) > 7933:
    line = lines[7933]
    print(f"Original line 7934: {repr(line[:100])}")
    
    # Replace the corrupted span pattern
    import re
    new_line = re.sub(
        r'<span className="mr-2">[^<]*</span> Launch Simulator',
        '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator',
        line
    )
    
    if new_line != line:
        lines[7933] = new_line
        print(f"New line 7934: {repr(new_line[:100])}")
        
        # Check for other Launch Simulator buttons in Module 1 context
        for i in range(len(lines)):
            if i != 7933 and 'Launch Simulator' in lines[i]:
                # Check context
                context_start = max(0, i-50)
                context_end = min(len(lines), i+10)
                context = ''.join(lines[context_start:context_end])
                if '/module/1/' in context or 'module/1/topic' in context:
                    old = lines[i]
                    lines[i] = re.sub(
                        r'<span className="mr-2">[^<]*</span> Launch Simulator',
                        '<Rocket className="mr-2 h-5 w-5 inline" /> Launch Simulator',
                        old
                    )
                    if lines[i] != old:
                        print(f"Also fixed line {i+1}")
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print("\nFixed Launch Simulator button(s)")
    else:
        print("Line 7934 doesn't match expected pattern")
        print(f"Full line: {repr(line)}")
else:
    print(f"File has only {len(lines)} lines, line 7934 doesn't exist")
