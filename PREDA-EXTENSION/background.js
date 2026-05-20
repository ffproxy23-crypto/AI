// PREDA Video Optimizer - Background Service Worker

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('PREDA Video Optimizer installed successfully!');
});

// Handle messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'VIDEO_CONVERSION_START') {
    console.log('Video conversion started:', request.data);
    sendResponse({ status: 'processing' });
  }
});
