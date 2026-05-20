# 🎬 PREDA Video Optimizer Extension

**Professional Video Conversion & Optimization Browser Extension**

---

## 📋 Features

✅ **Frame Rate Conversion**
- Convert 60 FPS → 30 FPS
- Keep original frame rate option

✅ **Resolution Optimization**
- 1080p (1920x1080)
- 720p (1280x720)
- Original resolution option

✅ **Multiple Output Formats**
- MP4 (H.264 codec)
- MOV (H.264 codec)

✅ **Quality Control**
- HIGH preset: 8000 kbps
- Medium preset: 5000 kbps
- Low preset: 3000 kbps
- Custom bitrate: 1000-10000 kbps slider

✅ **Audio Settings**
- Adjustable audio bitrate (128, 192, 256 kbps)
- AAC codec

✅ **Advanced Features**
- Real-time progress tracking
- Local processing (no uploads)
- Batch processing ready
- Simple & Advanced UI modes
- Professional gradient P logo

---

## 🚀 Installation

### Chrome / Brave / Edge
1. Go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Navigate to the `PREDA-EXTENSION` folder
5. Click **Select Folder**
6. ✅ Extension is now installed!

### Firefox
1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json` from `PREDA-EXTENSION` folder
4. ✅ Extension is now loaded!

---

## 📖 How to Use

1. **Click the P icon** in your browser toolbar
2. **Select a video file** using the file picker
3. **Choose conversion settings:**
   - Frame rate (60→30fps or original)
   - Resolution (1080p, 720p, or original)
   - Output format (MP4 or MOV)
   - Quality preset (HIGH, Medium, Low, or Custom)
4. **Optional: Adjust Advanced Settings**
   - Audio bitrate
   - Video codec
5. **Click "Convert Video"** to start processing
6. **Wait for completion** - progress bar shows status
7. **Download starts automatically** when done!

---

## 🛠️ Tech Stack

- **Manifest V3** - Latest Chrome extension standard
- **FFmpeg.js** - Client-side video processing
- **Vanilla JavaScript** - No dependencies
- **CSS3 Gradients** - Modern UI design
- **Web APIs** - File handling, Blob processing

---

## 📁 File Structure

```
PREDA-EXTENSION/
├── manifest.json          # Extension configuration
├── popup.html            # Main UI interface
├── popup.js              # Core conversion logic
├── styles.css            # Styling & animations
├── background.js         # Service worker
├── content.js            # Content script
├── icons/
│   ├── p-logo-48.svg    # Small icon
│   └── p-logo-128.svg   # Large icon
└── README.md             # This file
```

---

## ⚙️ Configuration Options

### Frame Rates
- **Original**: Keeps input frame rate
- **30 FPS**: Converts to 30 frames per second

### Resolutions
- **Original**: Keeps input resolution
- **1080p**: 1920x1080 pixels
- **720p**: 1280x720 pixels

### Output Formats
- **MP4**: H.264 video codec (universal)
- **MOV**: H.264 video codec (Apple compatible)

### Quality Presets
- **HIGH**: 8000 kbps - Best quality, larger file size
- **Medium**: 5000 kbps - Balanced quality and size
- **Low**: 3000 kbps - Smaller file size, acceptable quality
- **Custom**: Manual bitrate selection (1000-10000 kbps)

---

## 🔒 Privacy & Security

✅ **All processing is local** - No data sent to servers
✅ **No tracking** - No analytics or telemetry
✅ **Open source** - You can review all code
✅ **No permissions needed** - Except file access

---

## 🎯 Use Cases

- 📱 Optimize videos for social media
- 💾 Reduce file size before uploading
- 🎬 Convert video formats
- 📺 Adjust resolution for different devices
- 🔊 Control quality vs. file size ratio
- ⚡ Batch process multiple videos

---

## 🐛 Troubleshooting

### FFmpeg not loading
- Ensure you have a stable internet connection
- FFmpeg.js downloads from CDN on first use
- Check browser console for errors (F12)

### Conversion takes too long
- Large files take longer to process
- HIGH quality preset increases processing time
- Try MEDIUM or LOW preset for faster conversion

### Downloaded file is corrupted
- Try a different browser
- Reduce video resolution or quality
- Check if output format matches file extension

### Extension not showing
- Verify extension is enabled in `chrome://extensions/`
- Reload the page if button doesn't appear
- Try reinstalling the extension

---

## 📞 Support

**Made by [@predator777](https://www.tiktok.com/@predator777)**

For issues or suggestions, open a GitHub issue in the repository.

---

## 📜 License

MIT License - Feel free to use and modify!

---

## 🎉 Version History

### v1.0.0 (Initial Release)
- ✅ Frame rate conversion (60→30fps)
- ✅ Resolution optimization (1080p, 720p)
- ✅ MP4 & MOV output formats
- ✅ Quality presets (HIGH, Medium, Low, Custom)
- ✅ Advanced audio settings
- ✅ Modern P logo UI
- ✅ Local FFmpeg processing

---

## 🚀 Future Updates

- [ ] Batch processing multiple files
- [ ] Video trimming & cutting
- [ ] Watermark addition
- [ ] Custom filters & effects
- [ ] More video codecs (VP9, AV1)
- [ ] Mobile app version

---

**PREDA Video Optimizer v1.0.0** 🎬✨
