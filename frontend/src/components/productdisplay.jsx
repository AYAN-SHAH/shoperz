import React, { useContext } from "react";
import star from "../assets/star_icon.png";
import dullstar from "../assets/star_dull_icon.png";
import { Shopcontext } from "../context/shopcontext";
const productdisplay = (props) => {
	const { product } = props;
	const { addtocart } = useContext(Shopcontext);
	return (
		<div className="flex justify-between lg:justify-around  flex-col lg:flex-row">
			<div className="flex flex-row m-auto ">
				<div className="flex mb-4 flex-col">
					<img
						src={product.image}
						alt="Product"
						className="w-[69px] sm:w-[95px] mb-2 mr-2"
					/>
					<img
						src={product.image}
						alt="Product"
						className="w-[69px] sm:w-[95px] mb-2 mr-2"
					/>
					<img
						src={product.image}
						alt="Product"
						className="w-[69px] sm:w-[95px] mb-2 mr-2"
					/>
					<img
						src={product.image}
						alt="Product"
						className="w-[69px] sm:w-[95px] mb-2 mr-2"
					/>
				</div>
				<div>
					<img
						src={product.image}
						alt="Product"
						className=" h-[354px] sm:h-[478px]"
					/>
				</div>
			</div>
			<div className="flex flex-col w-[90vw] lg:w-[45vw] m-auto mb-16 ">
				<h1 className="text-xl font-semibold mb-4">{product.name}</h1>
				<div className="flex items-center mb-2">
					<img src={star} alt="Star" className="w-4 h-4" />
					<img src={star} alt="Star" className="w-4 h-4" />
					<img src={star} alt="Star" className="w-4 h-4" />
					<img src={star} alt="Star" className="w-4 h-4" />
					<img src={dullstar} alt="Dull Star" className="w-4 h-4" />
					<p className="text-gray-500 ml-1">(169)</p>
				</div>
				<div className="mb-4">
					<div className="text-gray-500 line-through">${product.old_price}</div>
					<div className="text-xl font-semibold">${product.new_price}</div>
				</div>
				<p className="text-sm text-gray-700 mb-4">
					Introducing our new pullover shirt, the epitome of casual comfort and
					style. Crafted from premium cotton blend fabric, it offers a soft
					touch against your skin while ensuring breathability throughout the
					day. With its relaxed fit and timeless design, this pullover shirt
					effortlessly complements any casual ensemble. Upgrade your wardrobe
					with this versatile piece that promises both comfort and
					sophistication.
				</p>
				<div className="mb-4">
					<h1 className="text-lg font-semibold mb-2">Select Size</h1>
					<div className="flex">
						<div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
							S
						</div>
						<div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
							M
						</div>
						<div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
							L
						</div>
						<div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
							XL
						</div>
						<div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
							XXL
						</div>
					</div>
				</div>
				<button
					onClick={() => {
						addtocart(product.id);
					}}
					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mb-4"
				>
					Add to Cart
				</button>
				<p className="text-gray-500 mb-2">
					<span className="font-semibold">Category:</span> Women, T-shirt, Crop
					Top
				</p>
				<p className="text-gray-500">
					<span className="font-semibold">Tags:</span> Modern, Latest
				</p>
			</div>
		</div>
	);
};

export default productdisplay;
