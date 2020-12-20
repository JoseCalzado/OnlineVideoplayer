function addYoutubeListGaming() {
    var url = document.getElementById("videogameText").value
    //console.log(url);
    var position = url.indexOf("list");
    //console.log(position);
    var identifier = url.substring(position, url.length)
    //console.log(identifier)
    var list = "https://www.youtube.com/embed/videoseries?" + identifier
    var ul = document.getElementById("list1");
    var iframe = document.createElement("iframe");
        iframe.width=500
        iframe.height=315
        iframe.src=list
        iframe.frameborder=0
        iframe.allow="autoplay; encrypted-media"
        iframe.allowFullscreen

    ul.appendChild(iframe)
    document.getElementById("videogameText").value=""
}

function addYoutubeListAudio() {
    var url = document.getElementById("musicText").value
    //console.log(url);
    var position = url.indexOf("list");
    //console.log(position);
    var identifier = url.substring(position, url.length)
    //console.log(identifier)
    var list = "https://www.youtube.com/embed/videoseries?" + identifier
    var ul = document.getElementById("list2");
    var iframe = document.createElement("iframe");
        iframe.width=500
        iframe.height=315
        iframe.src=list
        iframe.frameborder=0
        iframe.allow="autoplay; encrypted-media"
        iframe.allowFullscreen

    ul.appendChild(iframe)
    document.getElementById("musicText").value=""
}

function loadYoutubeVideo() {
    var url = document.getElementById("youtubeText").value
    console.log(url);
    var position_ini = url.indexOf("v=") + 2;
    var position_end = url.indexOf("&");
    console.log(position_ini)
    console.log(position_end)
    var identifier = url.substring(position_ini, position_end)
    console.log(identifier)
    var list = "https://www.youtube.com/embed/" + identifier
    var iframe = document.getElementById("if_youtube");
        iframe.src=list
        
    document.getElementById("youtubeText").value=""
}

function loadTwitch() {
    var trash = document.getElementById("twitch-embed")
    trash.innerHTML = "";
    src="https://player.twitch.tv/js/embed/v1.js"

    var url = document.getElementById("twitchText").value
    console.log(url);
    if (url.indexOf("videos") > 0) {
        //src="https://player.twitch.tv/js/embed/v1.js"
        console.log("Its an offline stream")
        var position_ini = url.indexOf("videos") + 7;
        console.log(position_ini)
        var identifier = url.substring(position_ini, url.length)
        console.log(identifier)
    }else if(url.indexOf("tv") > 0) {
        //src="https://player.twitch.tv/js/embed/v1.js"
        console.log("Its an online stream")
        var position_ini = url.indexOf("tv") + 3;
        console.log(position_ini)
        var channel_id = url.substring(position_ini, url.length)
        console.log(channel_id)
    }
    
    if(identifier) {
        new Twitch.Player("twitch-embed", {
            width: '100%',
            height: '100%',
            autoplay: false,
            video: identifier
        });
    } else if(channel_id) {
        new Twitch.Player("twitch-embed", {
            width: '100%',
            height: '100%',
            autoplay: false,
            channel: channel_id
        });
    }

    document.getElementById("twitchText").value=""
}