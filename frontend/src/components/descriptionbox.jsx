import React from "react";

const descriptionbox = () => {
	return (
		<div className="w-[90vw] m-auto my-8">
			<div className="flex justify-between items-center mb-4">
				<div className="flex">
					<div className="border border-black  px-4 py-2 rounded-md mr-2">
						description
					</div>
					<div className="border border-black px-4 py-2 rounded-md">
						reviews(122)
					</div>
				</div>
			</div>
			<div className="bg-gray-100 p-6 rounded-md">
				<p>
					An e-commerce website serves as an online platform where businesses
					can sell their products or services to customers over the internet.
					Typically, these websites provide a variety of features and
					functionalities to facilitate browsing, purchasing, and managing
					transactions. Here's a description highlighting the key aspects of an
					e-commerce website:
				</p>
			</div>
		</div>
	);
};

export default descriptionbox;
