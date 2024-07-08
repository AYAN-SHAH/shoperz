import React, { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import removeicon from "../assets/cart_cross_icon.png";

const cartitem = () => {
	const { gettotalcartamount, all_product, cartitem, removefromcart } =
		useContext(Shopcontext);
	function truncateText(text, wordLimit) {
		const words = text.split(" ");
		if (words.length <= wordLimit) {
			return text;
		} else {
			const truncatedWords = words.slice(0, wordLimit);
			const truncatedText = truncatedWords.join(" ") + "...";
			return truncatedText;
		}
	}
	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			<div className="md:grid grid-cols-7 gap-4 items-center mb-6 hidden ">
				<p className="col-span-1 text-left">Product</p>
				<p className="col-span-2 text-left">Title</p>
				<p className="col-span-1 text-left">Price</p>
				<p className="col-span-1 text-left">Quantity</p>
				<p className="col-span-1 text-left">Total</p>
				<p className="col-span-1 text-left">Remove</p>
			</div>
			<hr className="mb-4" />
			<div className="grid grid-cols- gap-4">
				{all_product.map((e) => {
					if (cartitem[e.id] > 0) {
						return (
							<div
								key={e.id}
								className=" items-center grid md:grid-cols-7 grid-cols-4 bg-white shadow-md shadow-gray-100 overflow-hidden mb-4"
							>
								<img
									src={e.image}
									alt={e.name}
									className="w-20 h-20 object-contain col-span-1"
								/>
								<p className="col-span-2 md:col-span-2 text-left p-1">
									{truncateText(e.name, 5)}
								</p>
								<p className="col-span-1 md:col-span-1 text-left p-1">
									${e.new_price}
								</p>
								<button className="m-2 col-span-1 bg-gray-200 px-2 py-1 mr-2 w-16 md:w-20">
									x{cartitem[e.id]}
								</button>
								<p className="col-span-1 text-left p-1">
									${e.new_price * cartitem[e.id]}
								</p>
								<img
									src={removeicon}
									onClick={() => {
										removefromcart(e.id);
									}}
									alt="Remove"
									className="col-span-1 ml-36  md:mx-auto cursor-pointer"
								/>
							</div>
						);
					}
					return null;
				})}
			</div>
			<div className="bg-gray-100 p-4 md:p-6  rounded-lg my-3">
				<div className="border-b border-gray-300 mb-4">
					<h1 className="text-xl font-bold mb-2">Cart Totals</h1>
					<div className="flex justify-between">
						<p className="text-sm">Subtotal</p>
						<p className="text-sm">${gettotalcartamount()}</p>
					</div>
					<hr className="my-2" />
					<div className="flex justify-between">
						<p className="text-sm">Shipping Fee</p>
						<p className="text-sm">Free</p>
					</div>
					<hr className="my-2" />
					<div className="flex justify-between">
						<h3 className="text-lg">Total</h3>
						<h3 className="text-lg">${gettotalcartamount()}</h3>
					</div>
				</div>
				<div className="mt-4">
					<button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ">
						Proceed to Checkout
					</button>
				</div>
				<div className="mt-4">
					<p className="text-sm">If you have a promo code, enter it here</p>
					<div className="flex mt-2 flex-wrap ">
						<input
							type="text"
							placeholder="Promo Code"
							className="border rounded-l px-2 py-1 focus:outline-none w-[70%] "
						/>
						<button className="bg-blue-500 text-white py-1 px-3 rounded w-[20%] hover:bg-blue-600">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cartitem;
