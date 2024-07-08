import React from "react";
import data_product from "../assets/data";
import Item from "./item";
const relatedproduct = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl md:text-3xl font-semibold mt-9 mb-4 mx-auto">
				related products
			</h1>
			<hr className="mb-8 border-gray-600 w-16 mx-auto border-t-4" />
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90vw] m-auto mb-8 mt-8">
				{data_product.map((item, i) => {
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
				})}
			</div>
		</div>
	);
};

export default relatedproduct;
