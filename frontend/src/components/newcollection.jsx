import React, { useEffect, useState } from "react";
import Item from "../components/item";
const newcollection = () => {
	const [new_collection, setnew_collection] = useState([]);

	useEffect(() => {
		fetch("https://shoper-backend-production.up.railway.app/newcollection")
			.then((response) => response.json())
			.then((data) => setnew_collection(data));
	}, []);

	return (
		<div className="flex flex-col">
			<h1 className="text-2xl md:text-3xl font-semibold mt-9 mb-4 mx-auto">
				NEW COLLECTIONS
			</h1>
			<hr className="mb-8 border-gray-600 w-16 mx-auto border-t-4" />
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90vw] m-auto mb-8 mt-8">
				{new_collection.map((item, i) => {
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

export default newcollection;
