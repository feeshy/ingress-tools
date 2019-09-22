var res1 = document.getElementById("Res1");
var res2 = document.getElementById("Res2");
var res3 = document.getElementById("Res3");
var res4 = document.getElementById("Res4");
var res5 = document.getElementById("Res5");
var res6 = document.getElementById("Res6");
var res7 = document.getElementById("Res7");
var res8 = document.getElementById("Res8");

function quickSelect(btn){
	switch(btn){
		case "L8x1":
			res1.options[0].selected = true;
			res2.options[1].selected = true;
			res3.options[2].selected = true;
			res4.options[2].selected = true;
			res5.options[3].selected = true;
			res6.options[3].selected = true;
			res7.options[4].selected = true;
			res8.options[4].selected = true;
			break;
		case "L8x2":
			res1.options[0].selected = true;
			res2.options[0].selected = true;
			res3.options[1].selected = true;
			res4.options[1].selected = true;
			res5.options[2].selected = true;
			res6.options[2].selected = true;
			res7.options[2].selected = true;
			res8.options[2].selected = true;
			break;
		case "L8x3":
			res1.options[0].selected = true;
			res2.options[0].selected = true;
			res3.options[0].selected = true;
			res4.options[1].selected = true;
			res5.options[1].selected = true;
			res6.options[1].selected = true;
			res7.options[2].selected = true;
			res8.options[2].selected = true;
			break;
		case "L8+L7":
			res1.options[0].selected = true;
			res2.options[1].selected = true;
			res3.options[1].selected = true;
			res4.options[2].selected = true;
			res5.options[2].selected = true;
			res6.options[2].selected = true;
			res7.options[2].selected = true;
			res8.options[3].selected = true;
			break;
	}
}

var mod1 = document.getElementById("Mod1");
var mod2 = document.getElementById("Mod2");
var mod3 = document.getElementById("Mod3");
var mod4 = document.getElementById("Mod4");

mod1.onchange = function(){
	var selectIndex = mod1.selectedIndex;
	if (mod1.options[selectIndex].value == "1") {
		mod2.disabled = true;
		mod2.setAttribute("class","undeployed");
		mod2.options[3].selected = true;
		mod3.disabled = true;
		mod3.setAttribute("class","undeployed");
		mod3.options[3].selected = true;
		mod4.disabled = true;
		mod4.setAttribute("class","undeployed");
		mod4.options[3].selected = true;
	}else{
		mod2.disabled = false;
		mod2.removeAttribute("class");
	}
}

mod2.onchange = function(){
	var selectIndex = mod2.selectedIndex;
	if (mod2.options[selectIndex].value == "0") {
		mod3.disabled = true;
		mod3.setAttribute("class","undeployed");
		mod3.options[3].selected = true;
		mod4.disabled = true;
		mod4.setAttribute("class","undeployed");
		mod4.options[3].selected = true;
	}else{
		mod3.disabled = false;
		mod3.removeAttribute("class");
	}
}

mod3.onchange = function(){
	var selectIndex = mod3.selectedIndex;
	if (mod3.options[selectIndex].value == "0") {
		mod4.disabled = true;
		mod4.setAttribute("class","undeployed");
		mod4.options[3].selected = true;
	}else{
		mod4.disabled = false;
		mod4.removeAttribute("class");
	}
}

function calculate(){
	var sumRes = 
	parseInt(res1.options[res1.selectedIndex].value) +
	parseInt(res2.options[res2.selectedIndex].value) +
	parseInt(res3.options[res3.selectedIndex].value) +
	parseInt(res4.options[res4.selectedIndex].value) +
	parseInt(res5.options[res5.selectedIndex].value) +
	parseInt(res6.options[res6.selectedIndex].value) +
	parseInt(res7.options[res7.selectedIndex].value) +
	parseInt(res8.options[res8.selectedIndex].value);
	var sumMod = 
	Number(mod1.options[mod1.selectedIndex].value) +
	Number(mod2.options[mod2.selectedIndex].value) +
	Number(mod3.options[mod3.selectedIndex].value) +
	Number(mod4.options[mod4.selectedIndex].value);
	if (sumRes > 0) {
		var range = parseInt(160 * Math.pow(sumRes/8 , 4) * sumMod / 1000);
		document.getElementById("range").innerHTML = range;
	}
}