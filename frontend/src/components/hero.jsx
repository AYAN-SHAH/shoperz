import React from "react";
import arrow_icon from "../assets/arrow.png";
import hero from "../assets/hero.png";

const Hero = () => {
	return (
		<div className="flex flex-row items-center md:justify-around bg-gradient-to-b from-teal-400 to-indigo-900  text-white sm:bg-gray-300">
			<div className="text-left lg:text-left mb-8  lg:mb-0 lg:w-1/2 ml-5 md:ml-0 ">
				<h2 className="text-md sm:text-lg lg:text-xl font-bold mb-2 md:mb-4 tracking-wide  text-black mt-5 md:mt-0">
					NEW ARRIVALS ONLY
				</h2>
				<p className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold text-black tracking-wide">
					New
				</p>
				<p className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold text-black tracking-wide">
					Collections
				</p>
				<p className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-black tracking-wide">
					For Everyone
				</p>
				<div className="flex items-center justify-start lg:justify-start ">
					<button className="tracking-wide flex items-center bg-violet-700 text-white font-semibold text-md lg:text-xl py-2 px-4  rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
						<span>Latest Collection</span>
						<img
							src={arrow_icon}
							alt="Arrow Icon"
							className="ml-2 w-6 h-6 lg:w-6 lg:h-auto object-contain"
						/>
					</button>
				</div>
			</div>

			<img
				src={hero}
				alt="Hero"
				className="lg:w-[440px] md:w-[380px]  h-auto  hidden md:flex"
			/>
		</div>
	);
};

export default Hero;
