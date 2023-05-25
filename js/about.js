

var reDelet = 0;
var retype = 0;
var c = 0;
var d = 0;
var num2 = 1;
var chacker=1;
var a = '';
function cleaning(){
	

	
	if(num2 == 1 && chacker == 1){
	a = document.getElementById("own-text1").innerHTML;
	document.getElementById("small1").style.visibility="visible";
	document.getElementById("small2").style.visibility="hidden";
	document.getElementById("small3").style.visibility="hidden";
	document.getElementById("show-text").style.color="blue";
	document.getElementById("speaker").src="img/n" + 1 + ".jpg";
	chacker = 0;
	}
	else if(num2 == 2  && chacker==1){
	a = document.getElementById("own-text2").innerHTML;
	document.getElementById("small2").style.visibility="visible";
	document.getElementById("small1").style.visibility="hidden";
	document.getElementById("small3").style.visibility="hidden";
	document.getElementById("show-text").style.color="green";
	document.getElementById("speaker").src="img/n"+ 2 +".jpg";
	chacker = 0;

	
	}
	else if(num2 == 3 && chacker==1){
		a = document.getElementById("own-text3").innerHTML;
		document.getElementById("small3").style.visibility="visible";
		document.getElementById("small2").style.visibility="hidden";
		document.getElementById("small1").style.visibility="hidden";
		document.getElementById("show-text").style.color="black";
		document.getElementById("speaker").src="img/n"+ 3 +".jpg";
		chacker = 0;

	}
	if(c < a.length){
	reDelet++;
	if(reDelet==a.length-1){
	reDelet=0;
	d=a.length;
	}
	}
else{
		if(d==2){document.getElementById("speaker").style.width="11px";}
		if(0<d){
			document.getElementById("show-text").innerHTML=a.slice(0,d)+"|";
			d--;
		}
	}
}



function writing(){
		
   
		if(num2 == 1 && chacker==1){
	 a = document.getElementById("own-text1").innerHTML;
	 chacker = 0;
	}
	else if(num2 == 2 && chacker == 1){
	 a = document.getElementById("own-text2").innerHTML;
	 chacker= 0;
	}
	else if(num2===3&& chacker == 1){
		 a = document.getElementById("own-text3").innerHTML;
	chacker=0;
	}
	b = a.length;
   
	if(c<b){
	document.getElementById("show-text").innerHTML=a.slice(0,c+1)+"|";
	b--;
	}
	if(c==1){	document.getElementById("speaker").style.width="113px";}
	c=c+1;
	if(c>=a.length){
	c=a.length;
	retype++;
	if(retype>a.length){
	if(num2==3){
		num2=0;
		chacker = 1;
	}
	chacker = 1;
	num2=num2+1;
	retype=0;
	c=0;}
	}
}
window.setInterval(cleaning,100);
window.setInterval(writing,100);



function chooseSpeech(getId){
	if(getId == "1"){
		
		document.getElementById("small1").style.visibility="visible";
		document.getElementById("small2").style.visibility="hidden";
		document.getElementById("small3").style.visibility="hidden";
		document.getElementById("show-text").style.color="blue";
		num2 = 1;
		chacker = 1;
		
	
	}
	if(getId == "2"){
		document.getElementById("small2").style.visibility="visible";
		document.getElementById("small1").style.visibility="hidden";
		document.getElementById("small3").style.visibility="hidden";
		document.getElementById("show-text").style.color="green";
		num2 = 2;
		chacker = 1;
	
	}
	if(getId == "3"){
		document.getElementById("small3").style.visibility="visible";
		document.getElementById("small2").style.visibility="hidden";
		document.getElementById("small1").style.visibility="hidden";
		document.getElementById("show-text").style.color="black";
		num2 = 3;
		chacker = 1;
	}
	reDelet = 0;
	retype = 0;
	c = 0;
	d = 0;
	cleaning();
	writing();
	document.getElementById("speaker").style.width="13px";

	
}

