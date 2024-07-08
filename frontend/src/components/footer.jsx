import React from "react";
import slogo from "../assets/slogo.png";
import igicon from "../assets/instagram_icon.png";
import pticon from "../assets/pintester_icon.png";
import wticon from "../assets/whatsapp_icon.png";
const footer = () => {
	return (
		<div className="bg-gray-900 text-white py-8 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center">
			<div className="flex items-center mb-4">
				<img src={slogo} alt="Shooper Logo" className="w-12 h-12 mr-2" />
			</div>
			<ul className="flex flex-col items-center mb-4 md:flex-row">
				<li className="my-2 md:mx-2">Company</li>
				<li className="my-2 md:mx-2">Products</li>
				<li className="my-2 md:mx-2">Offices</li>
				<li className="my-2 md:mx-2">About</li>
				<li className="my-2 md:mx-2">Contact</li>
			</ul>
			<div className="flex mb-4">
				<div className="mr-4">
					<img src={igicon} alt="Instagram Icon" className="w-6 h-6" />
				</div>
				<div className="mr-4">
					<img src={pticon} alt="Pinterest Icon" className="w-6 h-6" />
				</div>
				<div>
					<img src={wticon} alt="Twitter Icon" className="w-6 h-6" />
				</div>
			</div>
			<div className="flex flex-col items-center">
				<hr className="border-t border-gray-600 w-full mb-2" />
				<p className="text-sm">&copy; 2024 All rights reserved</p>
			</div>
		</div>
	);
};

export default footer;
