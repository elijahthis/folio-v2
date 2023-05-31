import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Power2, Power4 } from "gsap";
import Lenis from "@studio-freight/lenis";

export const introAnimation = (classItem: string) => {
	const splitIntro = new SplitType(`${classItem} h1`, {
		types: "chars",
	});

	const introTl = gsap.timeline({
		scrollTrigger: {
			trigger: classItem,
			start: "top top",
			pin: true,
			end: `+=100%`,
			scrub: false,
			markers: true,
		},
	});
	introTl
		.to(splitIntro.chars, {
			color: "transparent",
			"-webkit-text-stroke-color": "#c92c6d",
			stagger: 0.05,
			ease: Power2.easeOut,
		})
		.addPause(4);
};
