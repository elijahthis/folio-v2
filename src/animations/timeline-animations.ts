import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Power2, Power3, Power4, Linear } from "gsap";
import Lenis from "@studio-freight/lenis";
import { introAnimation } from "./intros";

const { innerHeight } = window;

gsap.registerPlugin(ScrollTrigger);

/* ---- Lenis Smooth scroll ----- */
const lenis = new Lenis({
	// duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	lerp: 0.05,
});

lenis.on("scroll", (e) => {
	// console.log(e);
});

function raf(time) {
	lenis.raf(time);
	ScrollTrigger.update();
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* --------------------- --------------------- */

const autoTl = gsap.timeline({ delay: 7 });

autoTl
	.to(".PreLoader > .Chihiros_friends > *", {
		opacity: 0,
		duration: 0.5,
		ease: Power4.easeOut,
	})
	.to(".PreLoader > .bottomDiv", {
		transform: "scale(1, 0)",
		duration: 1,
		ease: Power4.easeOut,
	})
	.to(
		".PreLoader > .bottomDiv > div",
		{
			transform: "scale(1, 2) translateY(-100%)",
			duration: 1,
			ease: Power4.easeOut,
		},
		"<"
	)
	.to(
		".PreLoader > .Chihiros_friends",
		{
			height: 0,
			duration: 2.5,
			ease: Power4.easeOut,
		},
		"<"
	)
	.to(".PreLoader", {
		height: 0,
		duration: 0.001,
		ease: Power4.easeOut,
	});

/* Split text	*/
const mySplitName = new SplitType(".HomeIntro__bigHeader > h1 > span", {
	types: "words",
});

const mySplitDesc = new SplitType(".rightDesc p", {
	types: "lines",
	lineClass: "lineClass",
});

/* ------------  */

/* -------- Home animations ---------- */
const homeMarque = gsap
	.to(".HomeIntro__top__inner > div", {
		xPercent: -100,
		duration:
			document.querySelector(".HomeIntro__top__inner").clientWidth / 300,
		repeat: -1,
		ease: Linear.easeIn,
	})
	.totalProgress(0.5);
// homeMarque.pause();

const homeTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".HomeIntroWrap",
		pin: true,
		end: `+=${innerHeight * 1}`,
		scrub: 1,
		// markers: true,
	},
});

homeTl
	.to(mySplitName.words, {
		xPercent: -150,
		// stagger: 0.1,
		ease: Power3.easeIn,
		delay: 0,
		duration: 2,
	})
	.to(
		mySplitDesc.lines,
		{
			xPercent: -150,
			stagger: 0.1,
			ease: Power3.easeIn,
			delay: 0,
			duration: 2,
		},
		"<"
	)
	.to(
		".HomeIntro__top__inner > div > div",
		{
			xPercent: -150,
			// stagger: 0.1,
			ease: Power3.easeIn,
			delay: 0,
			duration: 2,
		},
		"<"
	)
	.to(
		".HomeIntro__bottom > .scrollLink > *",
		{
			yPercent: -150,
			stagger: 0.25,
			ease: Power3.easeIn,
			delay: 0,
			duration: 1,
		},
		"<"
	);

/* ------------------------------------------ */

/* -------- Work Intro animation ---------- */
introAnimation(".WorkIntro");
/* ------------------------------------------ */

/* -------- Work animation ---------- */
const workTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".WorkWrapper",
		start: "top top",
		pin: true,
		end: `+=600%`,
		scrub: 1,
		// markers: true,
	},
});

const workBoxes__box = gsap.utils.toArray(".workBoxes__box");

console.log("workBoxes__box", workBoxes__box);

workBoxes__box.forEach((box: Element) => {
	const boxTl = gsap.timeline();

	console.log(
		"boxx",
		box.querySelector(".workBoxes__box__images__inner"),
		box.querySelector(".workBoxes__box__images").clientWidth,
		box.querySelector(".workBoxes__box__images__inner").clientWidth
	);

	// const workMarque = gsap
	// 	.to(".workBoxes__box__images__inner", {
	// 		xPercent: -100,
	// 		duration: 2,
	// 		// document.querySelector(".workBoxes__box__images__inner").clientWidth /
	// 		// 50,
	// 		repeat: -1,
	// 		ease: Linear.easeIn,
	// 	})
	// 	.totalProgress(0.5);

	boxTl
		.to(box, {
			top: 0,
			duration: 5,
			stagger: 5,
			ease: Power2.easeOut,
		})
		.to(
			box.querySelector(".workBoxes__box h3"),
			{
				fontSize: "80px",
				lineHeight: "80px",
				duration: 5,
				stagger: { each: 5, repeatDelay: 2 },
				ease: Power2.easeOut,
			},
			"<"
		)
		// .to(
		// 	box.querySelector(".workBoxes__box__images__inner"),
		// 	{
		// 		left: 0,
		// 		delay: 1,
		// 		duration: 6,
		// 		stagger: { each: 5, repeatDelay: 2 },
		// 		ease: Power2.easeOut,
		// 	},
		// 	"<"
		// )
		.to(
			box.querySelector(".workBoxes__box__headerLine"),
			{
				width: "100%",
				delay: 1,
				duration: 4,
				stagger: { each: 5, repeatDelay: 2 },
				ease: Power2.easeOut,
			},
			"<"
		);
	// .to(box.querySelector(".workBoxes__box__images__inner"), {
	// 	// left: `${
	// 	// 	box.querySelector(".workBoxes__box__images").clientWidth -
	// 	// 	box.querySelector(".workBoxes__box__images__inner").clientWidth
	// 	// }px`,
	// 	transform: `translateX(${
	// 		document.documentElement.clientWidth -
	// 		box.querySelector(".workBoxes__box__images__inner").clientWidth
	// 	}px)`,
	// 	// right: 0,
	// 	delay: 1,
	// 	duration: 6,
	// 	stagger: { each: 5, repeatDelay: 2 },
	// 	ease: Power2.easeOut,
	// });

	workTl.add(boxTl);
});

// workTl
// 	.to(".workBoxes__box", {
// 		top: 0,
// 		duration: 5,
// 		stagger: 5,
// 		ease: Power2.easeOut,
// 	})
// 	.to(
// 		".workBoxes__box h3",
// 		{
// 			fontSize: "80px",
// 			lineHeight: "80px",
// 			duration: 5,
// 			stagger: { each: 5, repeatDelay: 2 },
// 			ease: Power2.easeOut,
// 		},
// 		"<"
// 	)
// 	.to(
// 		".workBoxes__box__headerLine",
// 		{
// 			width: "100%",
// 			delay: 1,
// 			duration: 4,
// 			stagger: { each: 5, repeatDelay: 2 },
// 			ease: Power2.easeOut,
// 		},
// 		"<"
// 	);
/* ------------------------------------------ */

/* -------- More Me Intro animation ---------- */
introAnimation(".MoreMeIntro");
/* ------------------------------------------ */

/* -------- More Me animation ---------- */

// const moreMeTl = gsap.timeline();

// moreMeTl
// 	.fromTo(
// 		".MoreMe__row--left > span",
// 		{ xPercent: 150 },
// 		{
// 			xPercent: 0,
// 			stagger: 0.1,
// 			ease: Power3.easeIn,
// 			delay: 0,
// 			duration: 4,
// 		}
// 	)
// 	.addPause(8);

// ScrollTrigger.create({
// 	trigger: ".MoreMePage",
// 	start: "top top",
// 	pin: true,
// 	end: () => "+=" + moreMeTl.duration() * 100, // Pin until the timeline animation completes
// 	scrub: false,
// 	markers: true,
// 	animation: moreMeTl,
// });

/* ------------------------------------------ */

/* -------- Contact Intro animation ---------- */
introAnimation(".ContactIntro");
/* ------------------------------------------ */

/* -------- Contact animation ---------- */
gsap.to(".ContactCarouselItem__topLine", {
	width: "100%",
	ease: Power4.easeIn,
	duration: 1,

	scrollTrigger: {
		trigger: ".contactBody",
		start: "top 10%",
		// pin: true,
		end: `+=100%`,
		scrub: false,
		// markers: true,
	},
});
/* ------------------------------------------ */
