let mediaRecorder;
let recordedChunks = [];
let stream;

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.onclick = async () => {
  const sourceType = document.getElementById("sourceType").value;
  const format = document.getElementById("format").value;

  // Ask for screen capture permission
  stream = await navigator.mediaDevices.getDisplayMedia({
    video: { displaySurface: sourceType },
    audio: true,
  });

  // Initialize recorder
  mediaRecorder = new MediaRecorder(stream, {
    mimeType: `video/webm; codecs=vp9`,
  });

  recordedChunks = [];

  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `recording.${format}`;
    a.click();
  };

  mediaRecorder.start();
  console.log("Recording started");

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
};

pauseBtn.onclick = () => {
  mediaRecorder.pause();
  pauseBtn.disabled = true;
  resumeBtn.disabled = false;
};

resumeBtn.onclick = () => {
  mediaRecorder.resume();
  resumeBtn.disabled = true;
  pauseBtn.disabled = false;
};

stopBtn.onclick = () => {
  mediaRecorder.stop();
  stream.getTracks().forEach((track) => track.stop());

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
  stopBtn.disabled = true;
};
