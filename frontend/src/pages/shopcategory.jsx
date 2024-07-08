import React, { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import dropdownicon from "../assets/dropdown_icon.png";
import Item from "../components/item";
const shopcategory = (props) => {
	const { all_product } = useContext(Shopcontext);
	return (
		<div>
			<img src={props.banner} alt="" className="my-5 md:my-7" />
			<div className="flex justify-between items-center p-3 md:p-4">
				<p className="text-gray-700">
					<span className="font-semibold">Showing 1-12</span> out of 36 products
				</p>
				<div className="flex items-center p-3">
					<span className="text-gray-700 mr-2">Sort by</span>
					<img
						src={dropdownicon}
						alt="Dropdown Icon"
						className="w-3 h-3 object-contain"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90vw] m-auto mb-8 mt-8">
				{all_product.map((item, i) => {
					if (props.category === item.category) {
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						);
					} else {
						return null;
					}
				})}
			</div>
			<div class="flex justify-center my-8">
				<button
					id="load-more"
					class="px-6 py-2  text-gray-900 border border-gray-400 font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
				>
					Load More
				</button>
			</div>
		</div>
	);
};

export default shopcategory;
