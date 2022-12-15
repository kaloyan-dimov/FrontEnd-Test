import "./assets/img/img1.png";
import "./assets/img/img2.png";
import "./assets/img/img3.png";
import "./assets/img/img4.png";
import "./assets/img/img5.png";
import "./assets/img/img6.png";
import "./assets/img/img7.png";
import "./assets/img/img8.png";
import "./assets/img/img9.png";
import "./assets/img/img10.png";
import "./styles/main.scss";
import "./assets/icons/nav.png";
import "./assets/icons/icon.png";
import "./assets/icons/heart.png";
import "./assets/icons/ellipse.png";
import "./assets/icons/fire.png";
import "./assets/icons/phone.png";
import "./assets/icons/return.png";
import "./assets/icons/search.png";
import "./assets/icons/share.png";
import "./assets/icons/star.png";
import "./assets/icons/tick.png";
import "./assets/icons/truck.png";
import "./assets/icons/cart1.png";
import "./assets/icons/cart2.png";
import "./assets/icons/secure.png";
import "./assets/icons/compare.png";
import "./assets/icons/download.png";
import "./assets/icons/person.png";
import "./assets/icons/next.png";

const navImg = document.getElementById("navImg");
const navBar = document.getElementById("navBar");

navImg.addEventListener("click", () => {
	navImg.classList.toggle("active");
	navBar.classList.toggle("active");
});

// console.log("logs");
// document.querySelector("#left").onclick = () => {
// 	//console.log("bla bla");
// };
// document
// 	.querySelectorAll("#left")
// 	.forEach(input => input.addEventListener("click", console.log("this", this)));

// let children = document.querySelector("#left").childNodes;
// Array.from(children).forEach(child => {
// 	child.addEventListener("click", e => {
// 		//console.log("clicked!");
// 		//console.log("child", child, "children", children);
// 		//let test = child.querySelector("div");
// 		let test2 = child.querySelector("img");
// 		//console.log("child", child, "child.div", child.div);
// 		//console.log("test", test, "test2", test2);
// 		console.log("test2", test2, "test2.src", test2.src);
// 	});
// });
//let childrenArray = [];

// //console.log("children", children);
// Array.from(children).forEach(child => {
// 	//console.log("child", child);
// 	// 	let wq = child.querySelector("img");
// 	// 	console.log(wq);
// 	if (child.tagName === "DIV") {
// 		//console.log("true", child);
// 		childrenArray.push(child.children[0].currentSrc);
// 		child.addEventListener("click", () => {
// 			//console.log(child.innerHTML, "clicked");
// 			console.log("childrenArray", childrenArray);
// 			let compare = child.querySelector("img").src;
// 			let compare2 = getIndex(childrenArray, compare);

// 			console.log("index", compare, compare2);
// 		});
// 	}
// });

// function getIndex(arr, compare) {
// 	arr.findIndex((w, index) => {
// 		console.log("w", w);
// 		if (w == compare) {
// 			console.log("matched", index);
// 			return index;
// 		}
// 	});
// }

//let test = children.querySelectorAll("div");
//console.log("test", test);
// let test = Array.from(children);
// console.log("test", test, typeof test);
// Array.from(children).forEach((child, index) => {
// 	child.addEventListener("click", e => {
// 		//let test2 = children.indexOf(test);
// 		console.log("[7]", children[7]);
// 		console.log("clicked on: ", child, index);
// 		let selectImg = child.querySelector("img");
// 		mainImg.src = selectImg.src;
// 		//console.log("selectImg.src", selectImg.src);
// 	});
// });

let mainImg = document.getElementById("mainImg").querySelector("img");
let children = document.querySelector("#leftLeft").childNodes;
let previous = document.getElementById("previous");
let next = document.getElementById("next2");

mainImg.src = children[1].querySelector("img").src;
console.log("arrLength", children.length, children);
let currentIndex = 1;
checkIndex();

//console.log("childeren1:", children[1].querySelector("img").src);

Array.from(children).forEach((child, index) => {
	console.log("index", index);
	child.addEventListener("click", e => {
		currentIndex = index;
		checkIndex();
		let selectImg = child.querySelector("img");
		//mainImg.src = selectImg.src;
	});
});

previous.addEventListener("click", () => {
	currentIndex = currentIndex - 2;
	// console.log(
	// 	"prev",
	// 	currentIndex - 2,
	// 	children[currentIndex - 2].querySelector("img").src
	// );
	checkIndex();
});

next.addEventListener("click", () => {
	currentIndex = currentIndex + 2;

	// console.log(
	// 	"next",
	// 	currentIndex + 2,
	// 	children[currentIndex].querySelector("img").src
	// );
	checkIndex();
	//mainImg.src = children[currentIndex].querySelector("img").src;
});

function checkIndex() {
	console.log("currIndex", currentIndex);
	if (currentIndex <= 1) {
		previous.classList.add("hidden");
	} else if (currentIndex >= children.length - 2) {
		next.classList.add("hidden");
	} else {
		previous.classList.remove("hidden");
		next.classList.remove("hidden");
	}
	mainImg.src = children[currentIndex].querySelector("img").src;
}