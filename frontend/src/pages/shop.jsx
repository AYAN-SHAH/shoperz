import React from "react";
import Hero from "../components/hero";
import Popular from "../components/popular";
import Offers from "../components/offers";
import Newcollection from "../components/newcollection";
import Newsletter from "../components/newsletter";
const shop = () => {
	return (
		<div>
			<Hero />
			<Popular />
			<Offers />
			<Newcollection />
			<Newsletter />
		</div>
	);
};

export default shop;
