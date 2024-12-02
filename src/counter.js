export function setupCounter(element) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	/**let shift = false;
	window.addEventListener("keypress", (e) => {
		console.log(e);
		if (e.keycode == 16) {
			shiftkey = true;
			console.log("shift");
		}
	});*/
	element.addEventListener("click", () => {
		//if (shift == false) {
		setCounter(counter + 1);
		/** 	} else {
		setCounter(counter + 10);
			}*/
	});
	setCounter(0);
}
