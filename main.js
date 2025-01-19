let delay = 4000; // msec
let activeIndex = -1;
let iv;
let loop = -1;
const inactiveClass = "opacity-15";
const rectangles = document.querySelectorAll(".rect");
const cntRect = rectangles.length;

function init() {
	rectangles.forEach((node) => node.classList.add(inactiveClass));
	// console.log(rectangles);
}

function start() {
	iv = window.setInterval(() => {
		// init opacity
		init();
		// activate a rectangle
		setRandomNode(rectangles, activeIndex);
		// handle loops
		handleLoop();
	}, delay);
}

function handleLoop() {
	if (loop === -1) return;
}

function setRandomNode(arr, excludeIndex) {
	let indexes = Object.keys(arr); //get a list of indexes
	indexes.splice(excludeIndex, 1); //remove the unwanted
	const rnd = indexes[Math.floor(Math.random() * indexes.length)]; //pick a new index
	rectangles[rnd].classList.remove(inactiveClass);
	activeIndex = rnd;
}

init();
start();
