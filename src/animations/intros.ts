import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Power2, Power4 } from "gsap";
import Lenis from "@studio-freight/lenis";

export const introAnimation = (classItem: string) => {
	const splitIntro = new SplitType(`${classItem} h1`, {
		types: "chars",
	});

	const introTl = gsap.timeline();
	introTl
		.to(splitIntro.chars, {
			color: "transparent",
			"-webkit-text-stroke-color": "#c92c6d",
			"-webkit-text-stroke-width": "0.8px",
			stagger: 0.05,
			ease: Power2.easeOut,
		})
		.addPause(8);

	ScrollTrigger.create({
		trigger: classItem,
		start: "top 40%",
		pin: false,
		end: () => "+=" + introTl.duration() * 100, // Pin until the timeline animation completes
		scrub: false,
		// markers: true,
		animation: introTl,
	});
};
