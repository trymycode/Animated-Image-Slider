var panel1 = document.querySelector(".panel-1");
panel1.addEventListener("click", function(){
	this.classList.toggle("open");
});

var panel2 = document.querySelector(".panel-2");
panel2.addEventListener("click", function(){
	this.classList.toggle("open");
})
var panel3 = document.querySelector(".panel-3");
panel3.addEventListener("click", function(){
	this.classList.toggle("open");
})
var panel4 = document.querySelector(".panel-4");
panel4.addEventListener("click", function(){
	this.classList.toggle("open");
})
var panel5 = document.querySelector(".panel-5");
panel5.addEventListener("click", function(){
	this.classList.toggle("open");
})
var panel6 = document.querySelector(".panel-6");
panel6.addEventListener("click", function(){
	this.classList.toggle("open");
	document.querySelector(".monkey").classList.toggle("monkeyToggle");
	document.querySelector(".monkey").classList.toggle("swing");
 var audio = new Audio('water-drop.mp3');
 audio.currentTime = 0;
  audio.play();
  
  setTimeout(function(){
  	audio.pause();
  }, 1000);
		
})
