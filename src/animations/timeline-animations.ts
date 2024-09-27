import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Power2, Power3, Power4, Linear } from "gsap";
import Lenis from "@studio-freight/lenis";
import { introAnimation } from "./intros";
import { CSSRulePlugin } from "gsap/all";

const { innerHeight } = window;
const isTallScreenHome = innerHeight > 485;
const isTallScreenWork = innerHeight > 612;

gsap.registerPlugin(ScrollTrigger);

/* ---- Lenis Smooth scroll ----- */
const lenis = new Lenis({
	// duration: 1.2,
	// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	lerp: 0.1,
});

function raf(time: number) {
	lenis.raf(time);
	// ScrollTrigger.update();
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

if (window.location.pathname === "/") {
	/* --------------------- --------------------- */

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
				document.querySelector(".HomeIntro__top__inner").clientWidth /
				(document.documentElement.clientWidth > 780 ? 100 : 50),
			repeat: -1,
			ease: Linear.easeIn,
		})
		.totalProgress(0.5);

	const homeTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".HomeIntroWrap",
			pin: true,
			// start: "bottom 98%",
			end: `+=${innerHeight * 1}`,
			scrub: 1,
			// markers: true,
			onUpdate({ getVelocity }) {
				// tilt the animated text to simulate realistic motion
				gsap.fromTo(
					".HomeIntro__top__inner > div > div, .rightDesc p",
					{
						skewX: `${-getVelocity() / 50}deg`,
						duration: 0.2,
					},
					{
						skewX: 0,
						duration: 0.2,
					}
				);
				gsap.fromTo(
					mySplitName.words,
					{
						skewX: `${-getVelocity() / 200}deg`,
						duration: 0.5,
					},
					{
						skewX: 0,
						duration: 0.5,
					}
				);
			},
		},
	});

	homeTl
		.to(
			".HomeIntro__bigHeader > h1, .HomeIntro__bottom",
			isTallScreenHome
				? {}
				: {
						y: -100,
						duration: 0.75,
						stagger: 0.25,
				  }
		)

		.to(".HomeIntro__top__inner > div > div", {
			xPercent: -200,
			// stagger: 0.1,
			ease: Power3.easeIn,
			delay: 0,
			duration: 0.75,
		})
		.to(
			".rightDesc p",
			{
				xPercent: -150,
				stagger: 0.1,
				ease: Power3.easeIn,
				delay: 0,
				duration: 0.85,
			},
			"<"
		)
		.to(
			mySplitName.words,
			{
				xPercent: -150,
				// stagger: 0.1,
				ease: Power3.easeIn,
				delay: 0,
				duration: 1.5,
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
				duration: 0.5,
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
			onUpdate({ getVelocity }) {
				// tilt the animated images to simulate realistic motion
				gsap.fromTo(
					".workBoxes__box__images__inner > div > img",
					{
						skewX: `${-getVelocity() / 300}deg`,
						duration: 0.2,
					},
					{
						skewX: 0,
						duration: 0.2,
					}
				);
			},
		},
	});

	const workBoxes__box = gsap.utils.toArray(".workBoxes__box");

	console.log("workBoxes__box", workBoxes__box);

	// remember to update this array when adding new work boxes
	const workWidths = [7268, 4840, 11899, 12124];

	workBoxes__box.forEach((box: Element, ind: number) => {
		// work images marquee
		const workMarque = gsap
			.to(box.querySelector(".workBoxes__box__images__inner"), {
				xPercent: -50,
				duration: workWidths[ind] / 50,
				repeat: -1,
				ease: Linear.easeIn,
			})
			.totalProgress(0.5);
		box
			.querySelector(".workBoxes__box__images__inner")
			.addEventListener("mouseover", () => workMarque.pause());
		box
			.querySelector(".workBoxes__box__images__inner")
			.addEventListener("mouseleave", () => workMarque.play());

		// work box animation timeline
		const boxTl = gsap.timeline();

		const splitWorkDesc = new SplitType(
			`.workBoxes__box${ind + 1} .bottomInfo__desc`,
			{
				types: "lines",
			}
		);

		boxTl
			.fromTo(
				box,
				{ top: "110vh" },
				{
					top: 0,
					duration: 5,
					stagger: 5,
					ease: Power2.easeOut,
				}
			)
			.to(
				box.querySelector(".workBoxes__box__images__inner > div"),
				{
					xPercent: -20,
					delay: 1,
					duration: 6,
					stagger: { each: 5, repeatDelay: 2 },
					ease: Power2.easeOut,
				},
				"<"
			)
			.fromTo(
				box.querySelector(".workBoxes__box__top > .workCount"),
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					delay: 1,
					duration: 2,
					// stagger: 0.75,
					ease: Power2.easeOut,
				},
				"<"
			)
			.fromTo(
				box.querySelector(".workBoxes__box__top > h3"),
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					delay: 3,
					duration: 4,
					// stagger: 0.75,
					ease: Power2.easeOut,
				},
				"<"
			)
			.fromTo(
				splitWorkDesc.lines,
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					delay: 1,
					duration: 6,
					stagger: { each: 0.75, repeatDelay: 2 },
					ease: Power2.easeOut,
				},
				"<-0.1"
			)
			.to(
				[
					box.querySelector(".workBoxes__box__images"),
					box.querySelector(".bottomInfo"),
				],
				isTallScreenWork ? {} : { yPercent: -100, duration: 4, stagger: 2 }
			);
		// .to(
		// 	box.querySelector(".bottomInfo"),
		// 	isTallScreenWork ? {} : { yPercent: -100 }
		// );

		workTl.add(boxTl);
	});

	/* ------------------------------------------ */

	/* -------- More Me Intro animation ---------- */
	introAnimation(".MoreMeIntro");
	/* ------------------------------------------ */

	/* -------- More Me animation ---------- */
	ScrollTrigger.create({
		trigger: ".MoreMeWrapper",
		start: "top 40%",
		// pin: true,
		end: `+=50%`,
		scrub: 1,
		// markers: true,
		once: true,

		onEnter: () => {
			gsap.fromTo(
				".MoreMe__row, .MoreMe__row--left",
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.5,
					stagger: 0.2,
					ease: Power2.easeOut,
				}
			);
		},
	});
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
}
