
window.onload = function() {
	var video_player = document.getElementById("video_player")
    links = video_player.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
	    links[i].onclick = handler;
    }
}

function load(id) {
    console.log(id)
    videotarget = document.getElementById(id);
    console.log(videotarget)
    filename = videotarget.getAttribute("value")
    filename = filename.substr(0, filename.lastIndexOf("."));
    console.log(filename)
    video = document.querySelector("#video_player video");
	//video.removeAttribute("controls");
	video.removeAttribute("poster");
    source = document.querySelectorAll("#video_player video source");
    if (filename.includes("blob")) {
        video.src = filename
    }else{
        video.src = "/resources/"+ filename + ".mp4";
    }
	//source[1].src = filename + ".mp4";
	video.load();
	video.play();    
}

function playSelected(event) {
    var file = this.event.srcElement.files[0]
    //var type = file.type
    var videoNode = document.querySelector('video')
    var fileURL = URL.createObjectURL(file)
    videoNode.autoplay
    videoNode.src = fileURL
    videoNode.play()
    addNewVideo(fileURL)
}

function addNewVideo(fileURL) {      
    var number = document.getElementsByTagName("a");
    var cantidad = number.length - 2
    cantidad += 1;
    console.log(number)
    var figcaplist = document.getElementsByTagName("figcaption");
    var figcap = figcaplist[0]
    var a = document.createElement("a");
    var defaultname = "video";
    a.id = defaultname.concat(cantidad)
    console.log(a.id)
    a.href = fileURL
    console.log(a.value)
    var img = document.createElement("img")
    img.src = "/resources/default-image.jpg"
    img.alt = "localvideo"
    //img.addEventListener('onclick', function(){load(a.id)}, false)
    img.onclick = function(){ load(a.id) }
    a.appendChild(img)
    //a.onclick = "load('video3')"
    figcap.insertBefore(a, document.getElementById("video1"))
}

/* figcaption.onclick = function(event) {

} */