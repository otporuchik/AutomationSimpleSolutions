var labels = document.getElementsByClassName('slideLabel');
var sensorLengths = document.getElementsByClassName('sensor-length');
var sensorMaterials = document.getElementsByClassName('sensor-material');
var minTemp = document.getElementById('minTemp');
var maxTemp = document.getElementById('maxTemp');

function setMark(i, j) {
	labels[i].innerHTML = setOption(i, j);
}

function setOption(i, j) {
	switch (i) {
		case 0: switch (j) {
		//sensors material depends on this selection
			case 0: setSensorMaterialList(j);
					return "Метран-281";
			case 1: setSensorMaterialList(j);
					return "Метран-286";
			case 2: setSensorMaterialList(j);
					return "Метран-288";
		}
		//sensors length depends on this selection
		//so, options to see in slide5 defines there.
		case 1: switch (j) {
			case 0: setSensorLengthList(j);
					return "01";
			case 1: setSensorLengthList(j);
					return "02";
			case 2: setSensorLengthList(j);
					return "03";
			case 3: setSensorLengthList(j);
					return "04";
			case 4: setSensorLengthList(j);
					return "05";
			case 5: setSensorLengthList(j);
					return "06";
			case 6: setSensorLengthList(j);
					return "07";
			case 7: setSensorLengthList(j);
					return "12";
			case 8: setSensorLengthList(j);
					return "13";
			case 9: setSensorLengthList(j);
					return "14";
			case 10: setSensorLengthList(j);
					return "15";
			case 11: setSensorLengthList(j);
					return "16";
			case 12: setSensorLengthList(j);
					return "17";
			case 13: setSensorLengthList(j);
					return "18";
			case 14: setSensorLengthList(j);
					return "19";
			case 15: setSensorLengthList(j);
					return "23";
			case 16: setSensorLengthList(j);
					return "24";
			case 17: setSensorLengthList(j);
					return "31";
			case 18: setSensorLengthList(j);
					return "32";
			case 19: setSensorLengthList(j);
					return "33";
		}
		case 2: switch (j) {
			case 0: return "Exia";
			case 1: return "Exd";
			case 2: return "-";
		}
		case 3: switch (j) {
			case 0: return "1";
			case 1: return "2";
		}
		case 4: switch (j) {
			case 0: return "60";
			case 1: return "80";
			case 2: return "100";
			case 3: return "120";
			case 4: return "160";
			case 5: return "200";
			case 6: return "250";
			case 7: return "320";
			case 8: return "400";
			case 9: return "500";
			case 10: return "630";
			case 11: return "800";
			case 12: return "1000";
			case 13: return "1250";
			case 14: return "1600";
			case 15: return "2000";
			case 16: return "2500";
			case 17: return "3150";
		}
		case 5: switch (j) {
			case 0: return "H10";
			case 1: return "H13";
			case 2: return "H18";
			case 3: return "H45";
			case 4: return "H78";
		}
		case 7: switch (j) {
			case 0: return "БК";
			case 1: return "ТБ";
			case 2: return "З";
			case 3: return "-";
		}
		case 8: switch (j) {
			case 0: return "T5";
			case 1: return "T6";
			case 2: return "-";
		}
		case 9: switch (j) {
			case 0: return "У1.1";
			case 1: return "<small>У1.1(-50+85)&deg;C</small>";
		}
		case 10: switch (j) {
			case 0: return "-";
			case 1: return "G1";
			case 2: return "<small>S-(" + prompt("Укажите параметры маркировки:", "TT1") + ")</small>";
		}
	}
}

function setSensorLengthList(j) {
	//hiding all selectors in slide5 (sensors length)
	for (var x = 0, length = sensorLengths.length; x < length; x++) {
		sensorLengths[x].classList.add('displayFalse');
	}
	hideSelectors(4);//reset selections in slide5 with function from scriptCommon.js
	labels[4].innerHTML = "xx"; //reseting previous select in case if length is inappropriate.
	//setting proper sensor length list
	if (j == 0 || j == 17 || j == 3) {
		for (var x = 3; x <= 15; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	} else if (j == 1 || j == 18) {
		for (var x = 0, length = sensorLengths.length; x < length; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	} else if (j == 2 || j == 19) {
		for (var x = 2; x <= 17; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	} else if (j == 4 || j == 15) {
		for (var x = 0; x <= 15; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	} else if (j == 5 || j == 16) {
		for (var x = 2; x <= 7; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	} else if (j == 6) {
		for (var x = 0; x <= 7; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	} else if (j >= 7 && j <= 14) {
		for (var x = 5; x <= 15; x++) {
		sensorLengths[x].classList.remove('displayFalse');
		}
	}
}

function setSensorMaterialList(j){
//conditions and actions same as in "function setSensorLengthList(j)"
	for (var x = 0, length = sensorMaterials.length; x < length; x++) {
		sensorMaterials[x].classList.add('displayFalse');
	}
	hideSelectors(5);//reset selections in slide6 with function from scriptCommon.js
	labels[5].innerHTML = "xx"; 
	if (j == 0) {
		sensorMaterials[0].classList.remove('displayFalse');
		sensorMaterials[1].classList.remove('displayFalse');
		sensorMaterials[4].classList.remove('displayFalse');
	} else if (j == 1) {
		sensorMaterials[0].classList.remove('displayFalse');
		sensorMaterials[1].classList.remove('displayFalse');
	} else if (j == 2) {
		sensorMaterials[2].classList.remove('displayFalse');
		sensorMaterials[4].classList.remove('displayFalse');
		sensorMaterials[3].classList.remove('displayFalse');
	}
}

function setTemp() {
	labels[6].innerHTML = "<small>(" + minTemp.value + "-" + maxTemp.value + ")&deg;C</small>";
}


/*
clickOnSlide2.addEventListener('click', function() {
	alert("click on slide2");
});

for (var i = 0, length = markingText.length; i < length; i++) {
	console.log(markingText[i].textContent); //or .innerHTML instead of .textContent
}
*/