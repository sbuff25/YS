// Setup canvas elements for Audio Display
const audioCtx1 = new (window.AudioContext || window.webkitAudioContext)();
const audioElement1 = document.getElementById("audioSample1");
const canvasElement1 = document.getElementById("audioDisplay1");
const canvasCtx1 = canvasElement1.getContext('2d');
const playPauseButton1 = document.getElementById("playAudio1");
const seekAudio1 = document.getElementById("seekAudio1");
const volBar1 = document.getElementById("volAudio1");
const WIDTH1 = canvasElement1.clientWidth;
const HEIGHT1 = canvasElement1.clientHeight;
const source1 = audioCtx1.createMediaElementSource(audioElement1);
const analyser1 = audioCtx1.createAnalyser();
analyser1.fftSize = 256;
source1.connect(analyser1);
analyser1.connect(audioCtx1.destination);
const bufferLength1 = analyser1.frequencyBinCount;
const dataArray1 = new Uint8Array(bufferLength1);
// Player Icons
const pauseIcon1 = "<span class='material-icons'>pause</span>";
const playIcon1 = "<span class='material-icons'>play_arrow</span>";
const replayIcon1 = "<span class='material-icons'>replay</span>";
// Audio State
let audioState1 = {
    isReplay : false,
    isPaused : true,
}; 
// Set volume bar and seek bar
seekAudio1.value = 0;
volBar1.value = 100;
// Functionality for audio controls
function togglePlayPause(){
    audioCtx1.resume().then(() => {
        if(audioState1.isPaused){
            playPauseButton1.innerHTML = pauseIcon1;
            audioElement1.play();
        }
        else{
            if(audioState1.isReplay){
                playPauseButton1.innerHTML = pauseIcon1;
                audioElement1.play();
                audioState1.isReplay = false;
                return;
            }
            playPauseButton1.innerHTML = playIcon1;
            audioElement1.pause();
        }
        audioState1.isPaused = !audioState1.isPaused;
    })
}
function setProgress(){
    seekAudio1.value = audioElement1.currentTime;
}
function setDuration(){
    seekAudio1.max = audioElement1.duration;
}
function onEnd(){
    playPauseButton1.innerHTML = replayIcon1;
    audioElement1.currentTime = 0;
    seekAudio1.value = 0;
    audioState1.isReplay = true;
}
function onSeek(evt){
    audioElement1.currentTime = evt.target.value;
}
function onVolumeSeek(evt){
    audioElement1.volume = evt.target.value / 100;
}
// Scrub through audio timeline
// Event listeners for control of the audio state
playPauseButton1.addEventListener('click',togglePlayPause);
audioElement1.addEventListener('click', setProgress);
audioElement1.addEventListener('ended', onEnd);
audioElement1.addEventListener('canplay', setDuration);
seekAudio1.addEventListener('input',onSeek);
volBar1.addEventListener('input', onVolumeSeek);
// Define Draw Function
function draw1(){
    analyser1.getByteFrequencyData(dataArray1);
    canvasCtx1.fillStyle = 'rgb(2,2,2)';
    canvasCtx1.fillRect(0,0,WIDTH1,HEIGHT1);
    const barWidth1 = (WIDTH1/ bufferLength1) * 2.5;
    let barHeight1;
    let x = 0;
    for (let i = 0; i < bufferLength1; i++) {
        barHeight1 = dataArray1[i] /2.8;
        canvasCtx1.fillStyle = `rgb(50,50,200)`;
        canvasCtx1.fillRect(x,HEIGHT1 - barHeight1, barWidth1,barHeight1);

        x += barWidth1 +1;
    }
    requestAnimationFrame(draw1);
}
draw1();

