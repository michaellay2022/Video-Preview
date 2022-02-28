//USING onmouseover and onmouseout
//when hover mouses on the video, it will do a preview muted video
//After remove mouse away from the video, it will go back to time zero

console.log("page loaded...");
//A little test of querySelector
// var video = document.querySelector("#myVideo");
// console.log(video);
function playVideo(video) {
  video.play();
}
function pauseVideo(video) {
  video.pause();
  video.currentTime = 0;
}
