import React from "react";
import breadarrow from "../assets/breadcrum_arrow.png";
const breadcrumb = (props) => {
	const { product } = props;
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
		<div className="flex items-center text-gray-600 my-8 lg:mt-8 lg:mb-4  ml-2 flex-wrap">
			<span>Home</span>
			<img src={breadarrow} alt="Breadcrumb Arrow" className="mx-2" />
			<span>Shop</span>
			<img src={breadarrow} alt="Breadcrumb Arrow" className="mx-2" />
			<span>{product.category}</span>
			<img src={breadarrow} alt="Breadcrumb Arrow" className="mx-2" />
			<span>{truncateText(product.name, 4)}</span>
		</div>
	);
};

export default breadcrumb;
