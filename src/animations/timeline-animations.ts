import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Power2, Power4 } from "gsap";
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
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	ScrollTrigger.update();
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* --------------------- --------------------- */

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".myPinnedWrapper",
		pin: true,
		end: `+=${innerHeight}`,
		scrub: 1,
		// markers: true,
	},
});

const autoTl = gsap.timeline();

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

/* Split text	*/
const mySplitName = new SplitType(".HomeIntro__bigHeader > h1 > span", {
	types: "words",
});
const nameChars = mySplitName.words;

const mySplitDesc = new SplitType(".HomeIntro__view2 p", {
	types: "lines",
});
const splitLines = mySplitDesc.lines;

/* ------------  */

// tl.to(nameChars, {
// 	yPercent: -150,
// 	stagger: 0.01,
// 	ease: Power4.easeIn,
// 	delay: 0,
// 	duration: 3,
// })
// 	.to(".HomeIntro__view2", {
// 		height: "100vh",
// 		ease: Power4.easeOut,
// 		// delay: 0.5,
// 		duration: 0.002,
// 	})
// 	.fromTo(
// 		".HomeIntro__view2__imgWrap__cover",
// 		{ height: "100vh" },
// 		{
// 			height: 0,
// 			ease: Power4.easeIn,
// 			// delay: 0.5,
// 			duration: 2,
// 		}
// 	)
// 	.fromTo(
// 		splitLines,
// 		{ yPercent: 100, opacity: 0, delay: 1 },
// 		{ yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.5 }
// 	)
// 	.addPause(3)
// 	.to(".HomeIntroWrap img, .HomeIntro__view2 > :last-child", {
// 		// top: 0,
// 		yPercent: -10,
// 		delay: 2,
// 		duration: 11,
// 	});
// .to(
// 	".IntroLayout",
// 	{
// 		top: 0,
// 		duration: 11,
// 		ease: Power2.easeIn,
// 	},
// 	"<"
// )
// .addPause(3)
// .to(".IntroLayout > h1", {
// 	opacity: 1,
// 	color: "#F0E9D2",
// 	duration: 3,
// });

/* -------- Work Intro animation ---------- */
introAnimation(".WorkIntro");
/* ------------------------------------------ */

/* -------- Work animation ---------- */
const workTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".astro-3ZBXO6IV",
		start: "top top",
		pin: true,
		end: `+=500%`,
		scrub: 1,
		markers: true,
	},
});

workTl
	.to(".workBoxes__box", {
		top: 0,
		duration: 5,
		stagger: 5,
		ease: Power2.easeOut,
	})
	.to(
		".workBoxes__box h3",
		{
			fontSize: "80px",
			lineHeight: "80px",
			duration: 5,
			stagger: { each: 5, repeatDelay: 2 },
			ease: Power2.easeOut,
		},
		"<"
	);
/* ------------------------------------------ */

/* -------- More Me Intro animation ---------- */
introAnimation(".MoreMeIntro");
/* ------------------------------------------ */

/* -------- Contact Intro animation ---------- */
introAnimation(".ContactIntro");
/* ------------------------------------------ */
