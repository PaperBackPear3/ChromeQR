
// Initialize button with user's preferred color
let Capture = document.getElementById("Capture");

// When the button is clicked, inject setPageBackgroundColor into current page
Capture.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: CaptureScreenImage,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function CaptureScreenImage() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }