// Setup canvas elements for Audio Display
const audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
const audioElement2 = document.getElementById("audioSample2");
const canvasElement2 = document.getElementById("audioDisplay2");
const canvasCtx2 = canvasElement2.getContext('2d');
const playPauseButton2 = document.getElementById("playAudio2");
const seekAudio2 = document.getElementById("seekAudio2");
const volBar2 = document.getElementById("volAudio2");
const WIDTH2 = canvasElement2.clientWidth;
const HEIGHT2 = canvasElement2.clientHeight;
const source2 = audioCtx2.createMediaElementSource(audioElement2);
const analyser2 = audioCtx2.createAnalyser();
analyser2.fftSize = 256;
source2.connect(analyser2);
analyser2.connect(audioCtx2.destination);
const bufferLength2 = analyser2.frequencyBinCount;
const dataArray2 = new Uint8Array(bufferLength2);
// Player Icons
const pauseIcon2 = "<span class='material-icons'>pause</span>";
const playIcon2 = "<span class='material-icons'>play_arrow</span>";
const replayIcon2 = "<span class='material-icons'>replay</span>";
// Audio State
let audioState2 = {
    isReplay : false,
    isPaused : true,
}; 
//Select Audio Frequency
function changeFrequency() {
    var selectedFrequency = document.getElementById("sampleRateB").value;
    updatedFrequency = selectedFrequency;
    if (updatedFrequency == "64kbps") {
        audioElement2.src = "./audioSamples/sampleB64kbps.mp3";
        audioElement2.currentTime = matchTimeLine;
        audioElement2.play();
    }
    if (updatedFrequency == "192kbps") {
        audioElement2.src = "./audioSamples/sampleB192kbps.mp3";
        audioElement2.currentTime = matchTimeLine;
        audioElement2.play();
    }
    if (updatedFrequency == "320kbps") {
        audioElement2.src = "./audioSamples/sampleB320kbps.mp3";
        audioElement2.currentTime = matchTimeLine;
        audioElement2.play();
    }
    // console.log(updatedFrequency);
}
// Set volume bar and seek bar
seekAudio2.value = 0;
volBar2.value = 100;
// Functionality for audio controls
function togglePlayPause(){
    audioCtx2.resume().then(() => {
        if(audioState2.isPaused){
            playPauseButton2.innerHTML = pauseIcon2;
            audioElement2.play();
        }
        else{
            if(audioState2.isReplay){
                playPauseButton2.innerHTML = pauseIcon2;
                audioElement2.play();
                audioState2.isReplay = false;
                return;
            }
            playPauseButton2.innerHTML = playIcon2;
            audioElement2.pause();
        }
        audioState2.isPaused = !audioState2.isPaused;
    })
}
function setProgress(){
    seekAudio2.value = audioElement2.currentTime;
}
function setDuration(){
    seekAudio2.max = audioElement2.duration;
}
function onEnd(){
    playPauseButton2.innerHTML = replayIcon2;
    audioElement2.currentTime = 0;
    seekAudio2.value = 0;
    audioState2.isReplay = true;
}
function onSeek(evt){
    audioElement2.currentTime = evt.target.value;
}
function onVolumeSeek(evt){
    audioElement2.volume = evt.target.value / 100;
}
// Scrub through audio timeline
// Event listeners for control of the audio state
playPauseButton2.addEventListener('click',togglePlayPause);
audioElement2.addEventListener('timeupdate', setProgress);
audioElement2.addEventListener('ended', onEnd);
audioElement2.addEventListener('canplay', setDuration);
seekAudio2.addEventListener('input',onSeek);
volBar2.addEventListener('input', onVolumeSeek);
// Define Draw Function
function draw2(){
    analyser2.getByteFrequencyData(dataArray2);
    canvasCtx2.fillStyle = 'rgb(2,2,2)';
    canvasCtx2.fillRect(0,0,WIDTH2,HEIGHT2);
    const barWidth2 = (WIDTH2/ bufferLength2) * 2.5;
    let barHeight2;
    let x2 = 0;
    for (let i = 0; i < bufferLength2; i++) {
        barHeight2 = dataArray2[i] /2.8;
        canvasCtx2.fillStyle = `rgb(50,50,200)`;
        canvasCtx2.fillRect(x2,HEIGHT2 - barHeight2, barWidth2,barHeight2);

        x2 += barWidth2 +1;
    }
    requestAnimationFrame(draw2);
}
draw2();

