import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function addition(num1, num2) {
	return num1 + num2;
}

function calculate() {
	let firstNumber = parseFloat(document.getElementById("firstNumber").value);
	let secondNumber = parseFloat(
		document.getElementById("secondNumber").value
	);

	let result = addition(firstNumber, secondNumber);

	document.getElementById("result").innerText = result;
}
let btn = document.querySelector("#calculBtn");
btn.addEventListener("click", calculate);
