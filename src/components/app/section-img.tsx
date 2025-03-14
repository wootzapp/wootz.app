import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from "@docusaurus/BrowserOnly";
// Remove direct import of Lottie
// import Lottie from "lottie-react";
import lot from "./hero-animation.json";

const LottieAnimation = () => {
	return (
		<BrowserOnly>
			{() => {
				// Dynamic import of Lottie
				const Lottie = require("lottie-react").default;
				return <Lottie animationData={lot} className='absolute top-0 left-0 w-full h-full xl:h-auto ' />;
			}}
		</BrowserOnly>
	);
};

export function SectionImg() {
	return (
		<div className='h-[370px] md:h-[60vw] relative w-full   '>
			<LottieAnimation />
			<img src={useBaseUrl("img/up-shadow.png")} alt='#' className='absolute h-[300px] md:h-auto -top-2 z-10 right-0 left-0 w-full ' />
			<img src={useBaseUrl("img/down.png")} alt='#' className='absolute md:-bottom-4  h-[300px] md:h-auto bottom-0 right-0 left-0 w-full opacity-70 z-10' />
			{/* The section image now fills the container (h-full) and is pulled upward */}
			{/* <img src={useBaseUrl("img/section-img.png")} alt='#' className='w-full' /> */}
		</div>
	);
}
