let mediaRecorder;
let recordedChunks = [];

document.getElementById("start").addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: { mediaSource: "screen" },
  });

  recordedChunks = [];
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "screen-recording.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 100);
  };

  mediaRecorder.start();

  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
});

document.getElementById("stop").addEventListener("click", () => {
  mediaRecorder.stop();
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
});
