var labels = document.getElementsByClassName('slideLabel');
var slide3Items = document.getElementsByClassName('slide3');
var slide6items = document.getElementsByClassName('slide6');
var slide12Mark1Selector = document.getElementById('slide12Mark1Selector');
var selectorSlide13 = document.getElementsByClassName('slide13');
var additionalOptionsList = [];
var mountBracketHeaderSlide13 = document.getElementById('mountBracketHeaderSlide13');

function setAdditionalOption(i) {
	var additionalOption = "";
	switch(i) {
		case 0: additionalOption = "WR5";
				break;
		case 1: additionalOption = "VC";
				break;
		case 2: additionalOption = "VS";
				break;
		case 3: additionalOption = "B1";
				break;
		case 4: additionalOption = "B4";
				break;
		case 5: additionalOption = "D0";
				break;
		case 6: additionalOption = "D1";
				break;
		case 7: additionalOption = "D2";
				break;
		case 8: additionalOption = "D3";
				break;
		case 9: additionalOption = "D4";
				break;
		case 10: additionalOption = "D5";
				break;
		case 11: additionalOption = "D6";
				break;
		case 12: additionalOption = "D5";
				break;
		case 13: additionalOption = "2F";
				break;
		case 14: additionalOption = "2";
				break;
		case 15: additionalOption = "3";
				break;
		case 16: additionalOption = "5";
				break;
		case 17: additionalOption = "L3";
				break;
		case 18: additionalOption = "L8";
				break;
		case 19: additionalOption = "L3";
				break;
		case 20: additionalOption = "L4";
				break;
		case 21: additionalOption = "L8";
				break;
		case 22: additionalOption = "H3";
				break;
		case 23: additionalOption = "H3";
				break;
		case 24: additionalOption = "SR";
				break;
		case 25: additionalOption = "MR";
				break;
		case 26: additionalOption = "SM";
				break;
		case 27: additionalOption = "BR6";
				break;
		case 28: additionalOption = "Q15";
				break;
		default: additionalOption = "xx";
				break;
	}
	selectorSlide13[i].classList.toggle('selected');
	if(selectorSlide13[i].classList.contains('selected')) {
		additionalOptionsList[i] = additionalOption;
	} else {
		additionalOptionsList[i] = "";
	}
	labels[12].innerText = additionalOptionsList.join(' ');
}

function clearAdditionalOptionList() {
	for(var i = 0; i < selectorSlide13.length; i++) selectorSlide13[i].classList.remove('selected');
}

function setMark(i, j) {
	labels[i].innerHTML = setOption(i, j);
}

function clearMarks() {
	for(var i = 0; i < labels.length; i++) labels[i].innerText = "xx";
}

function setOption(i, j) {
	switch (i) {
		//item name - block description. label 0.
		//slide 2 items to show depends on this choice.
		case 0: switch (j) {
			case 0: slide3Items[0].classList.remove('displayFalse');	//Традиционный, соединение типа фланец-фланец (код = T)
					slide3Items[1].classList.remove('displayFalse');	//Компактный (код = W)
					slide3Items[2].classList.add('displayFalse');	//Coplanar (код = C)
					slide3Items[3].classList.add('displayFalse');	//Coplanar с боковым подключением (код = S)
					slide3Items[4].classList.add('displayFalse');	//Традиционный (код = T)
					slide3Items[5].classList.add('displayFalse');	//Резьбовое (соединение типа резьба-резьба) (код = T)
					slide3Items[6].classList.remove('displayFalse');	//remark
					//connecting to a process
					slide6items[0].classList.add('displayFalse');	//Резьбовое соединение 1/2 NPT наружная (код = A)
					slide6items[4].classList.remove('displayFalse');	//Фланцевое соединение (код = F)
					slide6items[5].classList.add('displayFalse');	//Фланцевое соединение и резьбовое соединение 1/4 NPT внутренняя (код = F)
					slide6items[6].classList.add('displayFalse');	//Резьбовое соединение 1/4" ГОСТ 6111 внутренняя (код = E)
					clearMarks();
					clearAdditionalOptionList();
					//type of connection with sensor. slide 7. label 6.
					labels[6].classList.add('displayFalse');
					//type of sensor to connect with valve block. slide 9. label 8.
					labels[8].classList.remove('displayFalse');
					//valve block seat. slide 10. label 9.
					labels[9].classList.add('displayFalse');
					slide12Mark1Selector.innerText = "Исполнение для подключения метрологического оборудования = штуцер М10х1,5, установленный в дренажные отверстия, максимальное давление штуцера 16МПа (код=H2)";
					//additional options, slide 13.
					selectorSlide13[1].classList.remove('displayFalse');//vc
					selectorSlide13[2].classList.remove('displayFalse');//vs
					selectorSlide13[3].classList.add('displayFalse');//B1
					selectorSlide13[4].classList.add('displayFalse');//B4
					mountBracketHeaderSlide13.classList.remove('displayFalse');//mountBracketHeaderSlide13 header
					return "0104";
			case 1: slide3Items[0].classList.add('displayFalse');	//Традиционный, соединение типа фланец-фланец (код = T)
					slide3Items[1].classList.add('displayFalse');	//Компактный (код = W)
					slide3Items[2].classList.remove('displayFalse');	//Coplanar (код = C)
					slide3Items[3].classList.remove('displayFalse');	//Coplanar с боковым подключением (код = S)
					slide3Items[4].classList.remove('displayFalse');	//Традиционный (код = T)
					slide3Items[5].classList.add('displayFalse');	//Резьбовое (соединение типа резьба-резьба) (код = T)
					slide3Items[6].classList.add('displayFalse');	//remark
					//connecting to a process
					slide6items[0].classList.add('displayFalse');	//Резьбовое соединение 1/2 NPT наружная (код = A)
					slide6items[4].classList.add('displayFalse');	//Фланцевое соединение (код = F)
					slide6items[5].classList.remove('displayFalse');	//Фланцевое соединение и резьбовое соединение 1/4 NPT внутренняя (код = F)
					slide6items[6].classList.add('displayFalse');	//Резьбовое соединение 1/4" ГОСТ 6111 внутренняя (код = E)
					clearMarks();
					clearAdditionalOptionList();
					//type of connection with sensor. slide 7. label 6.
					labels[6].classList.add('displayFalse');
					//type of sensor to connect with valve block. slide 9. label 8.
					labels[8].classList.add('displayFalse');
					//valve block seat. slide 10. label 9.
					labels[9].classList.remove('displayFalse');
					slide12Mark1Selector.innerText = "Исполнение для подключения метрологического оборудования = штуцер М10х1,5, установленный в дренажные отверстия, максимальное давление штуцера 16МПа (код=H2)";
					//additional options, slide 13.
					selectorSlide13[1].classList.add('displayFalse');//vc
					selectorSlide13[2].classList.add('displayFalse');//vs
					selectorSlide13[3].classList.remove('displayFalse');//B1
					selectorSlide13[4].classList.remove('displayFalse');//B4
					mountBracketHeaderSlide13.classList.remove('displayFalse');//mountBracketHeaderSlide13 header
					return "0105";
			case 2: slide3Items[0].classList.add('displayFalse');	//Традиционный, соединение типа фланец-фланец (код = T)
					slide3Items[1].classList.add('displayFalse');	//Компактный (код = W)
					slide3Items[2].classList.add('displayFalse');	//Coplanar (код = C)
					slide3Items[3].classList.add('displayFalse');	//Coplanar с боковым подключением (код = S)
					slide3Items[4].classList.add('displayFalse');	//Традиционный (код = T)
					slide3Items[5].classList.remove('displayFalse');	//Резьбовое (соединение типа резьба-резьба) (код = T)
					slide3Items[6].classList.add('displayFalse');	//remark
					//connecting to a process
					slide6items[0].classList.remove('displayFalse');	//Резьбовое соединение 1/2 NPT наружная (код = A)
					slide6items[4].classList.add('displayFalse');	//Фланцевое соединение (код = F)
					slide6items[5].classList.add('displayFalse');	//Фланцевое соединение и резьбовое соединение 1/4 NPT внутренняя (код = F)
					slide6items[6].classList.remove('displayFalse');	//Резьбовое соединение 1/4" ГОСТ 6111 внутренняя (код = E)
					clearMarks();
					clearAdditionalOptionList();
					//type of connection with sensor. slide 7. label 6.
					labels[6].classList.remove('displayFalse');
					//type of sensor to connect with valve block. slide 9. label 8.
					labels[8].classList.add('displayFalse');
					//valve block seat. slide 10. label 9.
					labels[9].classList.remove('displayFalse');
					slide12Mark1Selector.innerText = "Исполнение для подключения метрологического оборудования с приваренным штуцером М20х1,5 (код=H2)";
					//additional options, slide 13.
					selectorSlide13[1].classList.add('displayFalse');//vc
					selectorSlide13[2].classList.add('displayFalse');//vs
					selectorSlide13[3].classList.add('displayFalse');//B1
					selectorSlide13[4].classList.add('displayFalse');//B4
					mountBracketHeaderSlide13.classList.add('displayFalse');//mountBracketHeaderSlide13 header
					return "0106";
		}
		//item name - manufacturer. label 1.
		case 1: switch(j) {
			case 0: return "M";
		}
		//item name - block type. label 2.
		case 2: switch (j) {
			case 0: return "T";
			case 1: if(labels[3].innerText === "2") labels[3].innerText = "xx";
					if(labels[8].innerText === "2") labels[8].innerText = "xx";
					return "W";
			case 2: return "C";
			case 3: return "S";
			case 4: if(labels[3].innerText == "5") labels[3].innerText = "xx";
					return "T";
			case 5: return "T";
		}
		//item name - valves amount. label 3.
		case 3: switch (j) {
			case 0: if((labels[0].innerText != "0106") || (labels[0].innerText === "xx")) {
						alert('Допустимо только для штуцерного клапанного блока с кодом "0106"');
						return "xx";
					} else	{
						labels[11].innerText = "xx";//special edition, slide 12.
						return "1";
					}
			case 1: if((labels[2].innerText === "W") || (labels[2].innerText === "xx")) {
						alert('Недопустимо для типа исполнения "W"');
						return "xx";
					} else {
						labels[11].innerText = "xx";//special edition, slide 12.
						return "2";
					}
			case 2: if((labels[0].innerText === "0106") || (labels[0].innerText === "xx")) {
						alert('Недопустимо для штуцерного клапанного блока с кодом "0106"');
						return "xx";
					} else	{
						labels[11].innerText = "xx";//special edition, slide 12.
						return "3";
					}
			case 3: if(((labels[0].innerText === "0105") && (labels[2].innerText === "T")) || 
						((labels[0].innerText === "xx") || (labels[2].innerText === "xx"))) {
						alert('Недопустимо для интегрального традиционного клапанного блока с кодами "0105 и T"');
						return "xx";
					} else if((labels[0].innerText === "0106") || (labels[0].innerText === "xx")) {
						alert('Недопустимо для штуцерного клапанного блока с кодом "0106"');
						return "xx";
					} else	{
						labels[11].innerText = "xx";//special edition, slide 12.
						return "5";
					}
		}
		//item name - type of material. label 4.
		case 4: switch (j) {
			case 0: return "2";
			case 1: return "4";
		}
		//item name - connecting to a process. label 5.
		case 5: switch (j) {
			case 0: return "A";
			case 1: return "B";
			case 2: return "C";
			case 3: return "D";
			case 4: if(((labels[3].innerText === "2") || (labels[2].innerText === "W")) || 
						((labels[3].innerText === "xx") || (labels[2].innerText === "xx"))) {
						alert('Недопустимо для количества вентилей = 2, или для компактного исполнения клапанного блока с кодом "W"');
						return "xx";
					} else return "F";
					return "F";
			case 5: if((labels[2].innerText != "T") || (labels[2].innerText === "xx")) {
						alert('Допустимо только для традиционного исполнения клапанного блока с кодом "T"');
						return "xx";
					} else return "F";
			case 6: return "E";
		}
		//item name - type of connecting to sensor. label 6. 
		//actual only for "0106" type!
		case 6: switch (j) {
			case 0: return "A";
			case 1: return "B";
			case 2: return "C";
		}
		//item name - sealing type. label 7.
		case 7: switch (j) {
			case 0: labels[10].classList.add('displayFalse');
					return "1";
			case 1: labels[10].classList.add('displayFalse');
					return "2";
			case 2: labels[10].classList.remove('displayFalse');
					labels[10].innerText = "UC";//special cleaning.
					return "3";
		}
		//item name - type of sensor to connect with valve block. slide 9. label 8.
		//Occurs only if label[0] == "0104".
		case 8: switch (j) {
			case 0: return "1";
			case 1: if((labels[2].innerText === "W") || (labels[2].innerText === "xx")) {
						alert('Недопустимо для компактного исполнения клапанного блока с кодом "W"');
						return "xx";
					} else return "2";
		}
		//item name - valve block seat. slide 10. label 9.
		//Occurs only if label[0] == "0105" and "0106" 
		case 9: switch (j) {
			case 0: return "1";
			case 1: return "-";
		}
		//item name - special cleaning. slide 11. label 10.
		//Occurs only if label 7 (sealing type) selected as "3" without options to choose.
		/*case 10: switch (j) {
			case 0: return "xx";
		}*/
		// item name - special edition. slide 12. label 11.
		case 11: switch (j) {
			case 0: if((labels[0].innerText != "0106") && (labels[3].innerText === "3")) {
						return "H1";
					} else {
						alert('Допустимо только для блоков с кодами "0104" и "0105" с количеством вентилей = 3.');
						return "xx";
					}
			case 1: if((labels[0].innerText != "0106") && 
						(labels[3].innerText === "5") && 
						((labels[5].innerText === "B") || 
							(labels[5].innerText === "C") || 
							(labels[5].innerText === "D"))) {
						return "H2";
					} else if((labels[0].innerText === "0106") &&
								(labels[5].innerText === "C") && 
								(labels[6].innerText === "B")) {
						return "H2";			
					} else {
						alert('Для кодов датчиков "0104" и "0105" допустимо только если код соединения с процессом = "B", "C" или "D" и количество вентилей = "5". Для кода датчика "0106" допустимо только при коде соединения с процессом = "C", коде соединения с датчиком = "B" и количестве вентилей = "2".');
						return "xx";
					}
			case 2: return "-";
		}
		
		// item name - additional options
		case 12: switch (j) {
			case 0: return "WR5";
			case 1: return "-";
		}
		/* ************** */
	}
}
