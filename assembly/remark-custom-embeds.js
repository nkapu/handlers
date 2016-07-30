/* transform myvideo spans into HTML5 video elements */

var videos = document.getElementsByClassName("myvideo");

for (var i = 0; i < videos.length; i++) {
  var videotarget = videos[i];
  var videoinput = videotarget.innerHTML;
  console.log(videoinput);
  var video = document.createElement("video");
  video.setAttribute("controls", "true");
  var source = document.createElement("source");
  source.setAttribute("src", videoinput);
  video.appendChild(source);
  videotarget.innerHTML = "";
  videotarget.appendChild(video);
}
