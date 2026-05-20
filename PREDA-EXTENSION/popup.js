// FFmpeg initialization
const { FFmpeg, fetchFile } = FFmpeg;
const ffmpeg = new FFmpeg();

// DOM Elements
const videoInput = document.getElementById('videoInput');
const fileName = document.getElementById('fileName');
const frameRate = document.getElementById('frameRate');
const resolution = document.getElementById('resolution');
const format = document.getElementById('format');
const qualityPreset = document.getElementById('qualityPreset');
const bitrate = document.getElementById('bitrate');
const bitrateValue = document.getElementById('bitrateValue');
const bitrateSection = document.getElementById('bitrateSection');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const advancedToggle = document.getElementById('advancedToggle');
const advancedSettings = document.getElementById('advancedSettings');
const progressContainer = document.getElementById('progressContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const statusMessage = document.getElementById('statusMessage');
const audioBitrate = document.getElementById('audioBitrate');
const videoCodec = document.getElementById('videoCodec');

let selectedFile = null;

// Initialize FFmpeg
async function initFFmpeg() {
  try {
    if (!ffmpeg.isLoaded()) {
      ffmpeg.load();
      console.log('FFmpeg initialized');
    }
  } catch (error) {
    console.error('FFmpeg initialization error:', error);
    showStatus('Error loading FFmpeg', 'error');
  }
}

// File input handler
videoInput.addEventListener('change', (e) => {
  selectedFile = e.target.files[0];
  if (selectedFile) {
    fileName.textContent = `✅ ${selectedFile.name}`;
    convertBtn.disabled = false;
    showStatus('File selected successfully!', 'success');
  } else {
    fileName.textContent = 'No file selected';
    convertBtn.disabled = true;
  }
});

// Quality preset handler
qualityPreset.addEventListener('change', (e) => {
  if (e.target.value === 'custom') {
    bitrateSection.style.display = 'block';
  } else {
    bitrateSection.style.display = 'none';
    const presets = { high: 8000, medium: 5000, low: 3000 };
    bitrate.value = presets[e.target.value] || 5000;
    updateBitrateValue();
  }
});

// Bitrate slider handler
bitrate.addEventListener('input', updateBitrateValue);

function updateBitrateValue() {
  bitrateValue.textContent = `${bitrate.value} kbps`;
}

// Advanced settings toggle
advancedToggle.addEventListener('click', () => {
  const isHidden = advancedSettings.style.display === 'none';
  advancedSettings.style.display = isHidden ? 'block' : 'none';
  advancedToggle.textContent = isHidden ? '⚙️ Advanced Settings ▲' : '⚙️ Advanced Settings ▼';
});

// Convert video
convertBtn.addEventListener('click', convertVideo);

async function convertVideo() {
  if (!selectedFile) {
    showStatus('Please select a video file', 'error');
    return;
  }

  try {
    // Initialize FFmpeg if needed
    if (!ffmpeg.isLoaded()) {
      convertBtn.disabled = true;
      showStatus('Loading FFmpeg...', 'info');
      await ffmpeg.load();
    }

    convertBtn.disabled = true;
    progressContainer.style.display = 'block';
    showStatus('Converting video...', 'info');

    // Read file
    const arrayBuffer = await selectedFile.arrayBuffer();
    const fileName_input = 'input_video';
    const ext = selectedFile.name.split('.').pop();

    // Write input file
    ffmpeg.FS('writeFile', `${fileName_input}.${ext}`, new Uint8Array(arrayBuffer));

    // Build FFmpeg command
    const outputFormat = format.value === 'mp4' ? 'mp4' : 'mov';
    const outputExt = outputFormat === 'mp4' ? 'mp4' : 'mov';
    const outputFile = `output.${outputExt}`;

    const fps = frameRate.value === 'original' ? '' : `-r ${frameRate.value}`;
    const res = resolution.value === 'original' ? '' : `-vf scale=${getResolutionSize(resolution.value)}`;
    const bitrate_val = qualityPreset.value === 'custom' ? bitrate.value : (qualityPreset.value === 'high' ? 8000 : qualityPreset.value === 'medium' ? 5000 : 3000);
    const audiobitrate = audioBitrate.value;

    const command = [
      '-i', `${fileName_input}.${ext}`,
      fps,
      res,
      '-b:v', `${bitrate_val}k`,
      '-b:a', `${audiobitrate}k`,
      '-c:v', 'libx264',
      '-c:a', 'aac',
      '-preset', 'fast',
      outputFile
    ].filter(arg => arg !== '');

    // Run conversion
    await ffmpeg.run(...command);

    // Read output
    const data = ffmpeg.FS('readFile', outputFile);
    const blob = new Blob([data.buffer], { type: `video/${outputFormat}` });

    // Download
    const downloadLink = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadLink;
    a.download = `PREDA-${Date.now()}.${outputExt}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadLink);

    // Cleanup
    ffmpeg.FS('unlink', `${fileName_input}.${ext}`);
    ffmpeg.FS('unlink', outputFile);

    showStatus('✅ Video converted successfully! Check downloads.', 'success');
    progressContainer.style.display = 'none';
    convertBtn.disabled = false;
  } catch (error) {
    console.error('Conversion error:', error);
    showStatus(`Error: ${error.message}`, 'error');
    progressContainer.style.display = 'none';
    convertBtn.disabled = false;
  }
}

function getResolutionSize(res) {
  const sizes = {
    '1080': '1920:1080',
    '720': '1280:720',
    'original': 'original'
  };
  return sizes[res] || 'original';
}

// Show status message
function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`;
  setTimeout(() => {
    statusMessage.textContent = '';
    statusMessage.className = 'status-message';
  }, 5000);
}

// Reset
resetBtn.addEventListener('click', () => {
  videoInput.value = '';
  selectedFile = null;
  fileName.textContent = 'No file selected';
  frameRate.value = 'original';
  resolution.value = 'original';
  format.value = 'mp4';
  qualityPreset.value = 'high';
  bitrate.value = 8000;
  updateBitrateValue();
  audioBitrate.value = '192';
  videoCodec.value = 'h264';
  convertBtn.disabled = true;
  progressContainer.style.display = 'none';
  advancedSettings.style.display = 'none';
  advancedToggle.textContent = '⚙️ Advanced Settings';
  showStatus('Reset complete', 'success');
});

// Initialize on load
window.addEventListener('load', initFFmpeg);
