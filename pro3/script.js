const video = document.getElementById('video');
const play = document.getElementById('play');
const stopbtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');
//functions
// 1 - Toggle Video - Play or Pause
function toggleVideo(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
};
// 2 - Update - toggle Play/Pause
function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fas fa-play fa-2x">';
    }else{
        play.innerHTML = '<i class="fas fa-pause fa-2x">'
    }
};
// 3 - Update Progress bar - update position of progress bar
function updateProgress(){
   progress.value = video.currentTime/video.duration*100;
   
   // update timestamp
   let min = Math.floor(video.currentTime / 60); // rounding down the minutes
   if (min < 10){
       min = `0${min}`;
   }
   let sec = Math.floor(video.currentTime % 60); // rounding down the seconds
   if (sec < 10){
    sec = `0${sec}`;
}
   //display time
   timeStamp.innerHTML = `${min}:${sec}`
};
// 4 - Stop Video - Reset VIdeo
function stopVideo(){
    video.pause();
    video.currentTime = 0;
};
// 5 - set progress - update video according to progress bar
function setProgress(){
    video.currentTime = progress.value * video.duration / 100;
};
//Event Listeners
// 1 - Video Element - click to play or pause
video.addEventListener('click',toggleVideo);
// 2 - Video Element - click to toggle play icon to pause icon
video.addEventListener('pause',updateIcon);
// 3 - Video Element - click to toggle pause icon back to play icon
video.addEventListener('play',updateIcon);
// 4 - Video Element - update progress bar and timestamp
video.addEventListener('timeupdate',updateProgress);
// 5 - Play Button - click to play or pause video
play.addEventListener('click',toggleVideo);
// 6 - Stop Button - click to reset video
stopbtn.addEventListener('click',stopVideo);
// 7 - Progress Bar - uchange position to change time of playback
progress.addEventListener('change',setProgress);
