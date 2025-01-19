let delay = 3000; // msec
let activeIndex = -1;
let iv;
let loop = -1;
const inactiveClass = "opacity-15";
const rectangles = document.querySelectorAll(".rect");
const cntRect = rectangles.length;
const startBtn = document.querySelector("#startBtn");
const startModal = document.querySelector("#startModal");
const incrSpeedBtn = document.querySelector("#incrSpeed");
const decrSpeedBtn = document.querySelector("#decrSpeed");
const speed = document.querySelector("#speed");

function init() {
	rectangles.forEach((node) => node.classList.add(inactiveClass));
	setSpeedOnFrontend();
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

function setDelay(direction) {
	direction === "incr" ? (delay += 1000) : (delay -= 1000);
	setSpeedOnFrontend();
}

function setSpeedOnFrontend() {
	speed.innerHTML = delay / 1000 + " sec";
}

startBtn.addEventListener("click", () => {
	start();
	startModal.classList.add("hidden");
});

incrSpeedBtn.addEventListener("click", () => {
	setDelay("incr");
});

decrSpeedBtn.addEventListener("click", () => {
	if (delay > 1000) setDelay("decr");
});

init();
