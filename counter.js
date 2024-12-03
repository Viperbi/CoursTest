export function setupCounter(element) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener("click", (event) => {
		if (event.shiftKey) {
			setCounter(counter + 10);
		} else {
			setCounter(counter + 1);
		}
	});
	setCounter(0);
}
