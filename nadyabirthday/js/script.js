$(document).ready(function(){
    $("#preloading").delay(2000).fadeOut('slow');
    $('.ready').click(function(){
        alert('Siaapp yaa?');
        $('#myModal').fadeOut('slow');
        $('#content').fadeIn('slow');
    })
});

var cond = true;
var myAudio = document.getElementById('myAudio');
var audioBtn = document.getElementById('audioBtn');
myAudio.play();

function mySong(){
    cond ? audioBtn.classList.replace('fa-pause', 'fa-play') : audioBtn.classList.replace('fa-play', 'fa-pause');
    cond ? myAudio.pause() : myAudio.play();
    cond = !cond;
}
