import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
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
		<Link to={`/product/${props.id}`} onClick={scrollToTop}>
			<div className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105">
				<img
					src={props.image}
					alt={props.name}
					className="w-full  object-contain"
				/>
				<div className="p-3 sm:p-4">
					<p className="text-sm font-semibold">{truncateText(props.name, 6)}</p>
					<div className="flex items-center justify-between mt-2">
						<div className="text-lg font-bold text-green-600">
							{props.new_price}
						</div>
						<div className="text-sm font-medium text-gray-500 line-through">
							{props.old_price}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Item;
