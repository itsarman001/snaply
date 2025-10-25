// Popup script for the extension
// Handles toggling active state for the 2x2 grid buttons.

document.addEventListener("DOMContentLoaded", () => {
  const gridButtons = Array.from(document.querySelectorAll(".grid-btn"));
  const startBtn = document.getElementById("startRecording");

  // Toggle behavior for option buttons (grid). These become accent-styled when active.
  gridButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nowActive = btn.classList.toggle("btn--active");
      btn.setAttribute("aria-pressed", String(nowActive));
    });
  });

  // Start button (outside grid) - keep its accent styling constant; only toggle pressed state and label
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const pressed = startBtn.getAttribute("aria-pressed") === "true";
      const now = !pressed;
      startBtn.setAttribute("aria-pressed", String(now));
      startBtn.textContent = now ? "Stop Recording" : "Start Recording";
      // If you want visual recording indicator, consider adding a small red dot or changing inner markup here.
    });
  }
});
