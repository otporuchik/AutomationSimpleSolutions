var labels = document.getElementsByClassName('slideLabel');
var slide4headers = document.getElementsByClassName('slide4header');

//slide 4 headers depends on type of sensor (150TG or 150TA) selecting on first step
for (var i = 0, length = slide4headers.length; i < length; i++) {
	slide4headers[i].classList.add('displayFalse');
}

//hiding slide 10 and 11 labels to show them if slide9 selection is "S5"
slideLabels[9].classList.add('displayFalse');
slideLabels[10].classList.add('displayFalse');

function setMark(i, j) {
	labels[i].innerHTML = setOption(i, j);
}

function setOption(i, j) {
	switch (i) {
		case 0: switch (j) {
			case 0: slide4headers[1].classList.add('displayFalse');
					slide4headers[0].classList.remove('displayFalse');
					return "150TG";
			case 1: slide4headers[0].classList.add('displayFalse');
					slide4headers[1].classList.remove('displayFalse');
					return "150TA";
		}
		case 1: switch (j) {
			case 0: return "1";
			case 1: return "2";
			case 2: return "3";
			case 3: return "4";
			case 4: if (labels[0].innerHTML != "150TA") {
						return "5";
					} else {
						return "***Недопустимый выбор для датчика ТА150!***";
					}
		}
		case 2: switch (j) {
			case 0: return "2G";
			case 1: return "2B";
		}
		case 3: switch (j) {
			case 0: return "2";
			case 1: return "3";
		}
		case 4: switch (j) {
			case 0: return "1";
			case 1: return "-";
		}
		case 5: switch (j) {
			case 0: return "A";
			case 1: return "B";
		}
		case 6: switch (j) {
			case 0: return "M5";
			case 1: return "-";
		}
		case 7: switch (j) {
			case 0: return "IM";
			case 1: return "EM";
			case 2: return "-";
		}
		case 8: switch (j) {
			case 0: //show link to valve block configurator /*************!!!!!!!!!!!!!!!!!!!!!!***********/
					//and hide slide10
					slideLabels[9].classList.add('displayFalse');
					return "S5";
			case 1: slideLabels[9].classList.remove('displayFalse');
					return "-";
		}
		case 9: switch (j) {
			case 0: slideLabels[10].classList.add('displayFalse');
					return "2A";
			case 1: slideLabels[10].classList.add('displayFalse');
					return "2D";
			case 2: slideLabels[10].classList.add('displayFalse');
					return "2E";
			//show slide 11 if "2F" or "2H" and hide if not/
			case 3: slideLabels[10].classList.remove('displayFalse');
					return "2F";
			case 4: slideLabels[10].classList.remove('displayFalse');
					return "2H";
		}
		case 10: switch (j) {
			case 0: return "2";
			case 1: return "4";
			case 2: return "5";
		}
		case 11: switch (j) {
			case 0: return "B1";
			case 1: return "B4";
		}
		case 12: switch (j) {
			case 0: return "WR5";
			case 1: return "-";
		}
		/* ************** */
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