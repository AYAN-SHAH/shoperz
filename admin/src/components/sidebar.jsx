import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../assets/Product_Cart.svg";
import list_prod_icon from "../assets/Product_list_icon.svg";

const Sidebar = () => {
	return (
		<div className="bg-gray-800 text-white w-64 min-h-screen p-4">
			<Link to="/addproduct" className="block mb-4 no-underline">
				<div className="flex items-center p-2 hover:bg-gray-700 rounded">
					<img
						src={add_product_icon}
						alt="Add Product"
						className="h-6 w-6 mr-2"
					/>
					<p className="text-lg">Add Product</p>
				</div>
			</Link>
			<Link to="/listproduct" className="block mb-4 no-underline">
				<div className="flex items-center p-2 hover:bg-gray-700 rounded">
					<img
						src={list_prod_icon}
						alt="Product List"
						className="h-6 w-6 mr-2"
					/>
					<p className="text-lg">Product List</p>
				</div>
			</Link>
		</div>
	);
};

export default Sidebar;
