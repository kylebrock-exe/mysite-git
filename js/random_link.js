/*var randomLinkButton = document.getElementById('random-link');

randomLinkButton.addEventListener('click', function(){
	var random=Math.round(Math.random()*9)
	var link1="https://youtu.be/gsGujOfkixc";
	var link2="https://youtu.be/MItpz6Vehow";
	var link3="https://youtu.be/K8N5Hm6IGGs";
	var link4="https://youtu.be/LVNpW5SSTuk";
	var link5="https://youtu.be/psNEie5HKDg";
	var link6="https://youtu.be/qAL-UKGbDbI";
	var link7="https://youtu.be/XU2d6wQBBHQ";
	var link8="https://youtu.be/9L8LO3a_gGI";
	var link9="https://youtu.be/9YOJrwVFMN0";
	var link10="https://youtu.be/VLOD0B6QDP0";
	if (random==0)
		window.location=link1
	else if (random==1)
		window.location=link2
	else if (random==2)
		window.location=link3
	else if (random==3)
		window.location=link4
	else if (random==4)
		window.location=link5
	else if (random==5)
		window.location=link6
	else if (random==6)
		window.location=link7
	else if (random==7)
		window.location=link8
	else if (random==8)
		window.location=link9
	else if (random==9)
		window.location=link10
})*/

var randomLinkButton = document.getElementById("random");

randomLinkButton.addEventListener("click", function(){
	const random = Math.round(Math.random()*9);
	const links = [
	"https://youtu.be/gsGujOfkixc",
	"https://youtu.be/MItpz6Vehow",
	"https://youtu.be/K8N5Hm6IGGs",
	"https://youtu.be/LVNpW5SSTuk",
	"https://youtu.be/psNEie5HKDg",
	"https://youtu.be/qAL-UKGbDbI",
	"https://youtu.be/XU2d6wQBBHQ",
	"https://youtu.be/9L8LO3a_gGI",
	"https://youtu.be/9YOJrwVFMN0",
	"https://youtu.be/VLOD0B6QDP0",
	];

	for (let i = 0; i < links.length; i++) {
		if (random === i) {
			window.location = links[i];
		}

	}
});





	

