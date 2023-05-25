//this is the home witting and cleaning text
var reDeleth = 0;
var retypeh = 0;
var ch = 0;
var eh = 0;
var dh = 0;
var num2h = 1;
function cleaningh(){
	var ah;
	if(num2h == 1){
	 ah = document.getElementById("own-text1h").innerHTML;
	}
	else if(num2h==2){
	 ah = document.getElementById("own-text2h").innerHTML;
	}
	else {
		 ah = document.getElementById("own-text3h").innerHTML;
	}

	if(ch < ah.length){
	reDeleth++;
	if(reDeleth==ah.length-1){
	reDeleth=0;
	dh=ah.length;
	}
	}
	else{
		eh=0;
		if(eh<dh){
			document.getElementById("show-texth").innerHTML=ah.slice(0,dh)+"|";
			dh--;
		}	
	}
}



function writingh(){
   var ah;
		if(num2h == 1){
	 ah = document.getElementById("own-text1h").innerHTML;
	}
	else if(num2h == 2){
	 ah = document.getElementById("own-text2h").innerHTML;
	}
	else{
		 ah = document.getElementById("own-text3h").innerHTML;
	}

	var bh = ah.length;
	if(ch<bh){
	document.getElementById("show-texth").innerHTML=ah.slice(0,ch+1)+"|";
	bh--;
	}
	
	ch=ch+1;
	if(ch>=ah.length){
	ch=ah.length;
	retypeh++;

	if(retypeh>ah.length){
		if(num2h==3){
		num2h=0;
		}
		num2h=num2h+1;
		retypeh=0;
		ch=0;}
	}
}

window.setInterval(writingh,100);
window.setInterval(cleaningh,100);














	var sec = 30;
	var min = 5;
function liveTime(){
	var time = new Date();
	var h = time.getHours();
	var s = time.getSeconds();
	var m = time.getMinutes();
	var ms = time.getMilliseconds();
	
	if(sec < 1){ 
	sec =60;
	min--;
	if(min<1){
		min=60;	
	}
	}
	sec--;
	document.getElementById("revers-time-place").innerHTML= "10 Days,  " + "  7 Hours,      " + min  +" Minutes, and "  + sec + " Seconds";
	
	if(s<10 && h<10 && m<10){document.getElementById("live-time-place").innerHTML= "0"+h +" :0" +m +" :0"  + s ;}
	if(s<10 && h<10 && m>=10){document.getElementById("live-time-place").innerHTML= "0"+h +" :" +m +" :0"  + s ;}
	if(s<10 && h>=10 && m>=10){document.getElementById("live-time-place").innerHTML= ""+h +" :" +m +" :0"  + s ;}
	if(s>=10 && h>=10 && m>=10){document.getElementById("live-time-place").innerHTML= ""+h +" :" +m +" :"  + s ;}
	if(s>=10 && h>=10 && m>=10){document.getElementById("live-time-place").innerHTML= ""+h +" :" +m +" :"  + s ;}
	if(s>=10 && h<10 && m>=10){document.getElementById("live-time-place").innerHTML= "0"+h +" :" +m +" :"  + s ;}
	if(s>=10 && h<10 && m<10){document.getElementById("live-time-place").innerHTML= "0"+h +" :0" +m +" :"  + s ;}
	if(s>=10 && h>=10 && m<10){document.getElementById("live-time-place").innerHTML= ""+h +" :0" +m +" :"  + s ;}
	
	
}

setInterval(liveTime,1000);
















function slide(choose){
	var x;
	if(choose==1){ x = document.getElementById('img1').src;		document.getElementById(1).style.backgroundColor = "white";
																document.getElementById(2).style.backgroundColor = "rgba(0,0,0,0)";
																document.getElementById(3).style.backgroundColor = "rgba(0,0,0,0)";}
																
	if(choose==2){ x = document.getElementById('img2').src;     document.getElementById(1).style.backgroundColor = "rgba(0,0,0,0)";
																document.getElementById(2).style.backgroundColor = "white";
																document.getElementById(3).style.backgroundColor = "rgba(0,0,0,0)";}
																
	if(choose==3){ x = document.getElementById('img3').src;     document.getElementById(1).style.backgroundColor = "rgba(0,0,0,0)";
																document.getElementById(2).style.backgroundColor = "rgba(0,0,0,0)";
																document.getElementById(3).style.backgroundColor = "white";}
	
	
	document.getElementById("myHeader").style.backgroundImage = "url("+x+")";

}


var at= 1;
function autoChange(){
	if(at>3){at = 1;}
	slide(at);
	at++;
	
}
setInterval(autoChange,10000);


function getHeight(){	
	var width = window.outerWidth;
	var height = window.outerHeight;
	if(width>768){
	document.getElementById("myHeader").style.height=height-135+"px";}
}
function mobileHeigth(){
	var width = window.outerWidth;
		var height = window.outerHeight;
	if(width<768){
			document.getElementById("myHeader").style.height=height-80+"px";
			}
}

