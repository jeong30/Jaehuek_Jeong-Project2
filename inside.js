
var image = document.getElementById('human');
var a=["HEY!","Who are you?","What are you doing in my house?","Are you lost?","What is your name?","Let me help you out","It was good to see you!"];

var nameaudio = "";
var namec = "";
var count=0;
image.addEventListener('click', function(){
	changetxt();
});
//function changeImage(){
//	image.src = 'Images/doorin.jpg';
//}
function changetxt()
{
	nameaudio = "audio_play" + count.toString();
	play();
	if (count < 4){
	document.getElementById("ty").innerHTML=a[count++];
	}
	else if (count==4) {
		document.getElementById("name").style.opacity = "1";
		document.getElementById("ty").innerHTML=a[count++];
	}
	else if (count==5) {
		namec = document.getElementById("name").value;
		document.getElementById("ty").innerHTML=a[count++]+ " " +namec;
		document.getElementById("name").style.opacity = "0";
	}
	else if (count==6) {
		document.getElementById("home").style.opacity = "1";
		document.getElementById("ty").innerHTML=a[count++] + " " + namec;
		document.getElementById("human").src = "./Images/person1.png";
	}

}

function play() { 
    var audio = document.getElementById(nameaudio); 
    audio.play();
}

