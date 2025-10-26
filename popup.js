// Popup.js - Handles the popup UI for the browser extension
document.addEventListener("DOMContentLoaded", function () {
  const toggleMicBtn = document.getElementById("toggleMicBtn");
  const toggleCameraBtn = document.getElementById("toggleCameraBtn");
  const toggleControlsBtn = document.getElementById("toggleControlsBtn");
  const toggleVideoFormat = document.getElementById("toggleVideoFormatBtn");
  const startAndPauseRecording = document.getElementById(
    "startAndPauseRecording"
  );
  const stopBtn = document.getElementById("stopBtn");

  function toggleActiveClass(button) {
    button.classList.toggle("btn--active");
  }

  toggleMicBtn.addEventListener("click", function () {
    toggleActiveClass(toggleMicBtn);
    // chrome.runtime.sendMessage({ action: "toggleMic" });
  });

  toggleCameraBtn.addEventListener("click", function () {
    toggleActiveClass(toggleCameraBtn);
    // chrome.runtime.sendMessage({ action: "toggleCamera" });
  });

  toggleControlsBtn.addEventListener("click", function () {
    toggleActiveClass(toggleControlsBtn);
    // chrome.runtime.sendMessage({ action: "toggleControls" });
  });

  toggleVideoFormat.addEventListener("click", function () {
    toggleActiveClass(toggleVideoFormat);
    // chrome.runtime.sendMessage({ action: "toggleVideoFormat" });
  });
});
