import React, { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrumb";
import Productdisplay from "../components/productdisplay";
import Descriptionbox from "../components/descriptionbox";
import Relatedproduct from "../components/relatedproduct";

const product = () => {
	const { all_product } = useContext(Shopcontext);
	const { productid } = useParams();
	const product = all_product.find((e) => e.id === Number(productid));
	return (
		<div>
			<Breadcrum product={product} />
			<Productdisplay product={product} />
			<Descriptionbox />
			<Relatedproduct />
		</div>
	);
};

export default product;
