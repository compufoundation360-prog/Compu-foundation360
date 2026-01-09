
import os

file_path = r'c:\Users\HP\OneDrive\Desktop\all-compu-foundation\loveable-compu-f\compu-foundation-learn-main\src\pages\ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

# Line 949 is index 948
lines[901] = '        subtitle: "Understand how the IPO (Input → Process → Output) cycle, core characteristics, and everyday devices define a computer.",\n'
lines[906] = '      ipo: {\n'
lines[907] = '        title: "IPO (Input → Process → Output) Cycle",\n'
lines[928] = '          alt: "Input devices on the left, CPU and gears in the middle, and monitor plus speakers on the right connected with glowing arrows representing the IPO (Input → Process → Output) cycle.",\n'

lines[948] = '          { id: "speed", icon: "⚡", title: "Speed", description: "Performs millions of operations per second.", example: "Example: Searching an entire contact list instantly." },\n'
lines[949] = '          { id: "accuracy", icon: "🎯", title: "Accuracy", description: "Gives correct results when instructions are correct.", example: "Example: Calculating bank interest without manual mistakes." },\n'
lines[950] = '          { id: "storage", icon: "💾", title: "Storage", description: "Stores photos, videos, and documents for years.", example: "Example: Keeping thousands of images on a phone or laptop." },\n'
lines[951] = '          { id: "diligence", icon: "💪", title: "Diligence", description: "Works continuously without getting tired.", example: "Example: Servers running websites 24/7." },\n'
lines[952] = '          { id: "automation", icon: "🤖", title: "Automation", description: "Follows programmed steps automatically.", example: "Example: Spreadsheet formulas updating totals automatically." },\n'
lines[953] = '          { id: "versatility", icon: "🔄", title: "Versatility", description: "Handles multiple types of tasks.", example: "Example: Same device can stream video, edit documents, and play games." },\n'
lines[954] = '          { id: "reliability", icon: "✅", title: "Reliability", description: "Consistent performance over long periods.", example: "Example: ATMs dispensing money accurately day and night." }\n'

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Fixed Module 1 specific lines.")
