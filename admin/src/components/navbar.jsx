import React from "react";
import slogo from "../assets/slogo.png";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					<img src={slogo} alt="Logo" className="h-8 w-8 mr-2" />
					<span className="text-white text-lg font-semibold">ADMIN PANEL</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
