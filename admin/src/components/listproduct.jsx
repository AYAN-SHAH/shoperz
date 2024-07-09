import React, { useState, useEffect } from "react";
import cross from "../assets/cross_icon.png";

const ListProduct = () => {
	const [allproducts, setAllProducts] = useState([]);

	const fetchInfo = async () => {
		await fetch("http://localhost:3000/allproducts")
			.then((res) => res.json())
			.then((data) => {
				setAllProducts(data);
			});
	};

	useEffect(() => {
		fetchInfo();
	}, []);

	const removeProduct = async (id) => {
		await fetch("http://localhost:3000/removeproduct", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: id }),
		});
		await fetchInfo();
	};

	return (
		<div className="flex-1 bg-gray-100 min-h-screen p-6">
			<h1 className="text-3xl font-bold text-center mb-8">All Products List</h1>
			<div className="grid grid-cols-6 gap-2 text-gray-700 font-semibold mb-4 p-2 bg-white rounded shadow-md">
				<p>Products</p>
				<p>Title</p>
				<p>Old Price</p>
				<p>New Price</p>
				<p>Category</p>
				<p>Remove</p>
			</div>
			<hr />
			{allproducts.map((product, index) => (
				<div
					className="grid grid-cols-6 gap-2 items-center p-2 bg-white rounded shadow-md mb-4"
					key={index}
				>
					<img
						src={product.image}
						alt=""
						className="h-16 w-16 object-contain rounded"
					/>
					<p>{product.name}</p>
					<p>${product.old_price}</p>
					<p>${product.new_price}</p>
					<p>{product.category}</p>
					<button onClick={() => removeProduct(product.id)}>
						<img src={cross} alt="Remove" className="h-6 object-contain" />
					</button>
				</div>
			))}
		</div>
	);
};

export default ListProduct;
