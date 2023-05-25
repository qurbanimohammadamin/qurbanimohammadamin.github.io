
var pCounter = 1;
function picSlideShow(check){
	if(check==0){
		pCounter = pCounter-2;
	}
	pCounter = pCounter + 1;
	if ( pCounter > 4){
		pCounter=1; 
	}
	if(pCounter == 0){
		pCounter = 4;
	}
	if(pCounter== -1){
		pCounter=3;
	}
document.getElementById("pictur").src="img/p"+pCounter+".jpg";
}
 window.setInterval(picSlideShow, 5000);
 
 
 
 
 
 
 
var collaps = 1;
function showIntireMenu(){
	if(collaps == 1){
	document.getElementById("collaps").style.height= "290px";
	}
	else{
	document.getElementById("collaps").style.height= "0px";
	collaps = 0;
	}
	++collaps;

}



function pagesHeight(){	
	var width = window.outerWidth;
	var height = window.outerHeight;
	if(width<768){	document.getElementById("noth").style.height=height-50+"px";
	}else	
		document.getElementById("noth").style.height="550px"
}








