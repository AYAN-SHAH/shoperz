import React from "react";
import offershero from "../assets/offershero.png";
const offers = () => {
	return (
		<div className="bg-gray-900 text-white  md:px-6 px-4 sm:px-12 lg:px-24 flex justify-between items-center">
			<div className="text-left sm:text-left">
				<h1 className="text-lg  md:text-4xl font-bold mb-4">
					Exclusive Offers For You
				</h1>
				<p className="text-sm sm:text-md md:text-lg mb-4">
					ONLY BEST SELLERS PRODUCTS
				</p>
				<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-3 md:py-3 md:px-8 rounded-lg shadow-md transition durati on-300 ease-in-out text-sm sm:text-md ">
					Check Now
				</button>
			</div>

			<img
				src={offershero}
				alt="Exclusive Offers"
				className="h-52 sm:h-80 md:h-96  object-contain"
			/>
		</div>
	);
};

export default offers;
