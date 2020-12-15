var slides = document.getElementsByClassName("slide");
var slideLabels = document.getElementsByClassName("slideLabel");
var slide1items = document.getElementsByClassName("slide1");
var slide2items = document.getElementsByClassName("slide2");
var slide3items = document.getElementsByClassName("slide3");
var slide4items = document.getElementsByClassName("slide4");
var slide5items = document.getElementsByClassName("slide5");
var slide6items = document.getElementsByClassName("slide6");
var slide7items = document.getElementsByClassName("slide7");
var slide8items = document.getElementsByClassName("slide8");
var slide9items = document.getElementsByClassName("slide9");
var slide10items = document.getElementsByClassName("slide10");
var slide11items = document.getElementsByClassName("slide11");
var slide12items = document.getElementsByClassName("slide12");
var slide13items = document.getElementsByClassName("slide13");
var slide14items = document.getElementsByClassName("slide14");


function callSlide(slideNumber) {
	hideSlides();
	slides[slideNumber - 1].classList.remove("displayFalse");
	slides[slideNumber - 1].classList.add("displayTrue");
	slideLabels[slideNumber - 1].classList.add("selected");
}

function hideSlides() {
	for (var i = 0, length = slides.length; i < length; i++) {
		slides[i].classList.add("displayFalse");
	}
	for (var i = 0, length = slideLabels.length; i < length; i++) {
		slideLabels[i].classList.remove("selected");
	}
}

function hideSelectors(slideNumber) {
	switch (slideNumber) {
		case 0: 
			for (var i = 0, length = slide1items.length; i < length; i++) {
				slide1items[i].classList.remove("selected");
			}
			break;
		case 1: 
			for (var i = 0, length = slide2items.length; i < length; i++) {
				slide2items[i].classList.remove("selected");
			}
			break;
		case 2: 
			for (var i = 0, length = slide3items.length; i < length; i++) {
				slide3items[i].classList.remove("selected");
			}
			break;
		case 3: 
			for (var i = 0, length = slide4items.length; i < length; i++) {
				slide4items[i].classList.remove("selected");
			}
			break;
		case 4: 
			for (var i = 0, length = slide5items.length; i < length; i++) {
				slide5items[i].classList.remove("selected");
			}
			break;
		case 5: 
			for (var i = 0, length = slide6items.length; i < length; i++) {
				slide6items[i].classList.remove("selected");
			}
			break;
		case 6: 
			for (var i = 0, length = slide7items.length; i < length; i++) {
				slide7items[i].classList.remove("selected");
			}
			break;
		case 7: 
			for (var i = 0, length = slide8items.length; i < length; i++) {
				slide8items[i].classList.remove("selected");
			}
			break;
		case 8: 
			for (var i = 0, length = slide9items.length; i < length; i++) {
				slide9items[i].classList.remove("selected");
			}
			break;
		case 9: 
			for (var i = 0, length = slide10items.length; i < length; i++) {
				slide10items[i].classList.remove("selected");
			}
			break;
		case 10: 
			for (var i = 0, length = slide11items.length; i < length; i++) {
				slide11items[i].classList.remove("selected");
			}
			break;
		case 11: 
			for (var i = 0, length = slide12items.length; i < length; i++) {
				slide12items[i].classList.remove("selected");
			}
			break;
		case 12: 
			for (var i = 0, length = slide13items.length; i < length; i++) {
				slide13items[i].classList.remove("selected");
			}
			break;
		case 13: 
			for (var i = 0, length = slide14items.length; i < length; i++) {
				slide14items[i].classList.remove("selected");
			}
			break;
	}
}

function setSelected(slideNumber, itemNumber) {
	switch (slideNumber) {
		case 0: hideSelectors(slideNumber);
				slide1items[itemNumber].classList.add("selected");
				break;
		case 1: hideSelectors(slideNumber);
				slide2items[itemNumber].classList.add("selected");
				break;
		case 2: hideSelectors(slideNumber);
				slide3items[itemNumber].classList.add("selected");
				break;
		case 3: hideSelectors(slideNumber);
				slide4items[itemNumber].classList.add("selected");
				break;
		case 4: hideSelectors(slideNumber);
				slide5items[itemNumber].classList.add("selected");
				break;
		case 5: hideSelectors(slideNumber);
				slide6items[itemNumber].classList.add("selected");
				break;
		case 6: hideSelectors(slideNumber);
				slide7items[itemNumber].classList.add("selected");
				break;
		case 7: hideSelectors(slideNumber);
				slide8items[itemNumber].classList.add("selected");
				break;
		case 8: hideSelectors(slideNumber);
				slide9items[itemNumber].classList.add("selected");
				break;
		case 9: hideSelectors(slideNumber);
				slide10items[itemNumber].classList.add("selected");
				break;
		case 10: hideSelectors(slideNumber);
				slide11items[itemNumber].classList.add("selected");
				break;
		case 11: hideSelectors(slideNumber);
				 slide12items[itemNumber].classList.add("selected");
				 break;
		case 12: hideSelectors(slideNumber);
				 slide13items[itemNumber].classList.add("selected");
				 break;
		case 13: hideSelectors(slideNumber);
				 slide14items[itemNumber].classList.add("selected");
				 break;
	}
}

hideSlides();
slides[0].classList.remove("displayFalse");
slides[0].classList.add("displayTrue");
slideLabels[0].classList.add("selected");