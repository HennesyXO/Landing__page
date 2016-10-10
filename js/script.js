var regBtn = document.querySelector(".reg-btn");
var popup = document.querySelector(".popup");
// var popupClose = popup.querySelector(".popup-close");
var body = document.querySelector(".body");

regBtn.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
	body.classList.add("body-popup-bg");

});

// feedbackClose.addEventListener("click", function(event) {
//     event.preventDefault();
//     feedbackPopup.classList.remove("feedback-show");
//     feedbackPopup.classList.remove("feedback-error");
//   });
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");


// ctx.strokeStyle = "red";
// ctx.lineWidth = "7";
// ctx.fillStyle = "#000000";
// ctx.strokeRect(20, 10, 100, 100);
// ctx.clearRect(77, 5, 130, 20);
// ctx.clearRect(0, 100, 70, 100);

//
// ctx.font = "36px PT Sans";
// ctx.fillText("Привет", 100, 100);



ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(90, 90);
ctx.rect(90, 90, 60, 30);
ctx.closePath();
ctx.stroke();
ctx.clearRect(0, 0, 170, 130);

ctx.beginPath();
ctx.arc(100, 70, 80, 0, Math.PI*2);
ctx.fill();
ctx.closePath();
ctx.stroke();


var a = "Irina";
var b = "academy";
var c = a + " " + b;
console.log(c);

var d = a.toUpperCase();
var e = b.charAt(0).toUpperCase() + b.slice(1);

