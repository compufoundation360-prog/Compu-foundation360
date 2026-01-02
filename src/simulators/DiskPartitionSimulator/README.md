# 💾 Disk Partition Simulator

A complete, interactive Disk Partition Simulator for **Compu Foundation 360°**.

## 🚀 Features

✅ **Full Partition Management**
- Create new partitions (Primary/Logical)
- Shrink partitions
- Extend partitions (with adjacent unallocated space)
- Delete partitions
- Format partitions
- View partition properties

✅ **Interactive Resizing**
- Drag-to-resize partitions by grabbing the right edge
- Live preview during resize
- Automatic validation

✅ **Context Menu**
- Right-click on any partition for full menu
- Long-press support for mobile devices
- Context-aware menu items

✅ **Realistic Validations**
- OS-style validation rules
- Minimum partition size (100 MB)
- Maximum primary partitions (4 - MBR limitation)
- Adjacent space requirement for extension
- Duplicate name prevention

✅ **Smooth Animations**
- Partition creation/deletion animations
- Resize transitions
- Highlight effects
- Popup fade-in/out

✅ **Responsive Design**
- Works on desktop and mobile
- Touch-friendly controls
- Adaptive layout

## 📁 Project Structure

```
DiskPartitionSimulator/
├── index.html              # Main HTML structure
├── styles.css              # All styling and animations
├── app.js                  # Core application logic
├── package.json           # npm configuration
├── components/
│   ├── popup.js           # Popup/dialog component
│   └── contextMenu.js     # Context menu component
├── utils/
│   ├── validations.js     # Validation rules
│   └── animations.js      # Animation helpers
└── README.md              # This file
```

## 🎮 How to Use

### Running the Simulator

#### Option 1: Using npm (Recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   This will automatically open the simulator in your browser at `http://localhost:3000`

3. **Other npm commands:**
   ```bash
   npm run dev    # Start with cache disabled (for development)
   npm run serve  # Start without auto-opening browser
   ```

#### Option 2: Direct Browser

1. **Open `index.html`** directly in any modern web browser
2. No build process required - pure HTML/CSS/JavaScript

### Basic Operations

#### Create Partition
1. Right-click on unallocated space (or any partition)
2. Select "Create New Partition"
3. Enter name, size, and type
4. Click "Confirm"

#### Shrink Partition
1. Right-click on a partition
2. Select "Shrink Volume"
3. Enter shrink size (e.g., "50 GB" or "10240 MB")
4. Click "Confirm"

#### Extend Partition
1. Right-click on a partition
2. Select "Extend Volume" (only if adjacent unallocated space exists)
3. Enter extend size
4. Click "Confirm"

#### Resize by Dragging
1. Hover over the right edge of a partition
2. Click and drag to resize
3. Release to apply changes

#### Delete Partition
1. Right-click on a partition
2. Select "Delete Volume"
3. Confirm deletion

#### View Properties
1. Right-click on a partition
2. Select "Properties"
3. View all partition details

### Default Layout

- **Total Disk**: 500 GB
- **C: Drive**: 300 GB (Primary, NTFS, Healthy)
- **Unallocated**: 200 GB

## 🔧 Integration with Compu Foundation 360°

To embed this simulator in your app:

### Option 1: Direct Embed
```html
<iframe src="path/to/DiskPartitionSimulator/index.html" 
        width="100%" 
        height="600px"
        frameborder="0">
</iframe>
```

### Option 2: Module Integration
1. Copy the `DiskPartitionSimulator` folder into your project
2. Import the main files in your module:
```javascript
// In your module component
import '../DiskPartitionSimulator/app.js';
```

### Option 3: React Component Wrapper
```jsx
function DiskPartitionSimulator() {
  useEffect(() => {
    // Load scripts
    const scripts = [
      '/DiskPartitionSimulator/components/popup.js',
      '/DiskPartitionSimulator/components/contextMenu.js',
      '/DiskPartitionSimulator/utils/validations.js',
      '/DiskPartitionSimulator/utils/animations.js',
      '/DiskPartitionSimulator/app.js'
    ];
    
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="/DiskPartitionSimulator/styles.css" />
      {/* Include HTML structure */}
    </div>
  );
}
```

## 🎨 Customization

### Colors
Edit `styles.css` root variables:
```css
:root {
    --primary-color: #4A90E2;
    --logical-color: #7B68EE;
    --unallocated-color: #2C2C2C;
    /* ... */
}
```

### Default Disk Size
Edit `app.js`:
```javascript
this.totalSizeMB = 1000 * 1024; // 1 TB
```

### Validation Rules
Edit `utils/validations.js`:
```javascript
const MIN_PARTITION_SIZE_MB = 100;
const MAX_PARTITION_COUNT = 4;
```

## 📱 Mobile Support

- **Long-press** on partitions to open context menu
- **Touch drag** for resizing
- Responsive layout adapts to screen size

## 🐛 Troubleshooting

**Context menu not appearing?**
- Ensure you're right-clicking directly on a partition
- On mobile, use long-press

**Resize not working?**
- Make sure you're dragging the right edge (resize handle)
- Partition must not be the last one (unallocated space needed)

**Validation errors?**
- Check minimum size requirements (100 MB)
- Ensure adjacent unallocated space for extension
- Verify partition name is unique

## 📝 Notes

- All sizes are in MB internally, displayed as GB/MB
- Maximum 4 primary partitions (MBR limitation)
- Extensions require immediately adjacent unallocated space
- Deleted partitions convert to unallocated space

## 🎯 Future Enhancements

Potential additions:
- Multiple disk support
- Partition cloning
- File system conversion
- Disk health monitoring
- Backup/restore functionality

---

**Built for Compu Foundation 360°** 🚀

