import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import ScrollSmoother
import ScrollSmoother from "../libs/gsap/ScrollSmoother.min.js";

const { innerHeight } = window;

// gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "body",
		pin: true,
		end: `+=${innerHeight * 1.3}`,
		scrub: 1,
	},
});

const autoTl = gsap.timeline();

// const workBoxes = document.querySelectorAll(".workBoxes__box");

// for (let i = 0; i < workBoxes.length; i++) {
// 	tl.to(workBoxes[i], {
// 		width: "80vw",
// 		height: "80vh",
// 		xPercent: 0,
// 		stagger: 2,
// 		duration: 3,
// 		delay: 3,
// 	}).to(workBoxes[i], {
// 		width: "20vw",
// 		height: "20vh",
// 		yPercent: -500,
// 		stagger: 2,
// 		duration: 3,
// 	});
// }

autoTl
	.to(".PreLoader", {
		height: 0,
		duration: 1.5,
		delay: 5,
		ease: "power4",
	})
	.from(".HomePage__imgBackground", {
		width: 0,
		duration: 1,
		ease: "power4",
	})
	.from(
		".HomePage__rest > p",
		{
			yPercent: -30,
			opacity: 0,
			duration: 1,
			stagger: 0.05,
			ease: "power4",
		},
		"<"
	);
