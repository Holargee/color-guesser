function color(){
				var a = Math.floor(Math.random() * 225);
				var b = Math.floor(Math.random() * 225);
				var c = Math.floor(Math.random() * 225);
document.getElementById("circle").style.backgroundColor = "rgb("+a+","+b+","+c+")";
document.getElementById("red").value = a;
document.getElementById("green").value = b;
document.getElementById("blue").value = c;
}
function color2(){
	var a =		document.getElementById("red");
  var b = document.getElementById("green");
  var c = document.getElementById("blue");
document.getElementById("circle").style.backgroundColor ="rgb("+a.value+","+b.value+"," +c.value+")";
}	
function dark(){
var a = document.getElementById("body").style;
var b = document.getElementById("body").style;
var c = document.getElementById("dark");
if(c.value=="dark mode"){a.backgroundColor="rgb(15,15,15)";a.color="white";c.value="light mode"}
else{a.backgroundColor="white";a.color="black";c.value="dark mode"}
}				
