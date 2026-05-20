// PREDA Video Optimizer - Content Script

// Inject PREDA video optimizer on all pages
console.log('PREDA Video Optimizer content script loaded');

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_PAGE_INFO') {
    sendResponse({ title: document.title, url: window.location.href });
  }
});
