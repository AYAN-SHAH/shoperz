import React from "react";

const newsletter = () => {
	return (
		<div className="bg-gray-900 py-12 px-2 sm:px-12 lg:px-24 my-8 ">
			<h1 className="text-xl sm:text-2xl font-semibold text-white mb-4">
				Get Exclusive Offers On Your Email
			</h1>
			<p className="text-sm md:text-lg text-white mb-6">
				Subscribe To Our Newsletter And Stay Updated
			</p>
			<div className="flex flex-wrap">
				<input
					type="email"
					name="email"
					id="email"
					className="flex-grow mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
					placeholder="Enter your email"
				/>
				<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out my-2 sm:my-0">
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default newsletter;
