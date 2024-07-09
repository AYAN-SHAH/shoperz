import React, { useState } from "react";
import uploadarea from "../assets/upload_area.svg";

const AddProduct = () => {
	const [image, setImage] = useState(null);
	const [productdetails, setProductdetails] = useState({
		name: "",
		image: "",
		category: "women",
		new_price: "",
		old_price: "",
	});

	const imagehandler = (e) => {
		setImage(e.target.files[0]);
	};

	const changehandler = (e) => {
		setProductdetails({ ...productdetails, [e.target.name]: e.target.value });
	};

	const addProduct = async () => {
		console.log(productdetails);
		let responsedata;
		let product = productdetails;

		let formData = new FormData(); // Corrected FormData capitalization
		formData.append("product", image);

		await fetch("http://localhost:3000/upload", {
			method: "POST",
			headers: { accept: "application/json" },
			body: formData,
		})
			.then((resp) => resp.json())
			.then((data) => {
				responsedata = data;
			});

		if (responsedata.success) {
			product.image = responsedata.image_url;
			console.log(product);
			await fetch("http://localhost:3000/addproduct", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			})
				.then((resp) => resp.json())
				.then((data) => {
					data.success ? alert("product added") : alert("failed");
				});
		}
	};

	return (
		<div className="flex-1 bg-gray-100 min-h-screen p-6 flex flex-col items-center justify-center">
			<div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
				<div className="mb-4">
					<p className="text-gray-700 text-xl font-semibold mb-2">
						Product Title
					</p>
					<input
						value={productdetails.name}
						onChange={changehandler}
						type="text"
						name="name"
						placeholder="Type here"
						className="w-full p-2 border border-gray-300 rounded"
					/>
				</div>
				<div className="mb-4">
					<div className="mb-4">
						<p className="text-gray-700 text-xl font-semibold mb-2">Price</p>
						<input
							value={productdetails.old_price}
							onChange={changehandler}
							type="text"
							name="old_price"
							placeholder="Type here"
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
				</div>
				<div className="mb-4">
					<div className="mb-4">
						<p className="text-gray-700 text-xl font-semibold mb-2">
							New Price
						</p>
						<input
							value={productdetails.new_price}
							onChange={changehandler}
							type="text"
							name="new_price"
							placeholder="Type here"
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
				</div>
				<div className="mb-4">
					<p className="text-gray-700 text-xl font-semibold mb-2">
						Product Category
					</p>
					<select
						value={productdetails.category}
						onChange={changehandler}
						name="category"
						className="w-full p-2 border border-gray-300 rounded"
					>
						<option value="women">Women</option>
						<option value="men">Men</option>
						<option value="kid">Kid</option>
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="file-input" className="block mb-2">
						<img
							src={image ? URL.createObjectURL(image) : uploadarea}
							alt="Upload Area"
							className="cursor-pointer mx-auto"
						/>
					</label>
					<input
						onChange={imagehandler}
						type="file"
						name="image"
						id="file-input"
						hidden
					/>
				</div>
				<button
					onClick={addProduct}
					className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddProduct;
