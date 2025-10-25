// Popup script for the Snaply extension
// Handles toggling active states for control grid buttons and recording buttons.

document.addEventListener("DOMContentLoaded", () => {
  const gridButtons = Array.from(document.querySelectorAll(".grid-btn"));
  const startBtn = document.getElementById("startRecording");
  const stopBtn = document.getElementById("stopRecording");

  /* ===============================
     🎛️ GRID BUTTONS (Mic, Camera, etc.)
  =============================== */
  gridButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Make only one active at a time
      gridButtons.forEach((b) => {
        if (b !== btn) {
          b.setAttribute("aria-pressed", "false");
        }
      });

      // Toggle current one
      const nowActive = btn.classList.toggle("btn--active");
      btn.setAttribute("aria-pressed", String(nowActive));
    });
  });

  /* ===============================
     🎬 RECORDING BUTTONS
  =============================== */
  if (startBtn && stopBtn) {
    startBtn.addEventListener("click", () => {
      startBtn.setAttribute("aria-pressed", "true");
      stopBtn.setAttribute("aria-pressed", "false");

      startBtn.textContent = "🎬 Recording...";
      stopBtn.disabled = false;
    });

    stopBtn.addEventListener("click", () => {
      stopBtn.setAttribute("aria-pressed", "true");
      startBtn.setAttribute("aria-pressed", "false");

      startBtn.textContent = "Start Recording";
      startBtn.disabled = false;
      stopBtn.disabled = true;

      stopBtn.disabled = true;
      startBtn.textContent = "🎬 Start Recording";
    });

    // Initial state
    stopBtn.disabled = true;
  }
});
