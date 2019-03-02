
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1 + selectedSize + "<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal, text1);

};

function getMeat(runningTotal, text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1 + meatArray[j].value + "<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log(runningTotal, text1);
	getVeggie(runningTotal, text1);

};

function getVeggie(runningTotal, text1) {

	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var k = 0; k < veggieArray.length; k++) {
		if (veggieArray[k].checked) {
			selectedVeggie.push(veggieArray[k].value);
			text1 = text1 + veggieArray[k].value + "<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	getCheese(runningTotal, text1);
};

function getCheese(runningTotal, text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			var selectedCheese = cheeseArray[l].value;
			text1 = text1 + selectedCheese + "<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	getCrust(runningTotal, text1);
};

function getCrust(runningTotal, text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var l = 0; l < crustArray.length; l++) {
		if (crustArray[l].checked) {
			var selectedCrust = crustArray[l].value;
			text1 = text1 + selectedCrust + "<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	getSauce(runningTotal, text1);
};

function getSauce(runningTotal, text1) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var l = 0; l < sauceArray.length; l++) {
		if (sauceArray[l].checked) {
			var selectedSauce = sauceArray[l].value;
			text1 = text1 + selectedSauce + "<br>";
		}
	}
	runningTotal = (runningTotal);
	document.getElementById("showText").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

};




		
