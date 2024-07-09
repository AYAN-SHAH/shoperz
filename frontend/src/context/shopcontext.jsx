import React, { createContext, useState, useEffect } from "react";

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
	let cart = {};
	for (let index = 0; index < 300 + 1; index++) {
		cart[index] = 0;
	}
	return cart;
};

const ShopContextProvider = (props) => {
	const [all_product, setAll_Product] = useState([]);
	const [cartitem, setcartitem] = useState(getdefaultcart());

	useEffect(() => {
		fetch("http://localhost:3000/allproducts")
			.then((Response) => Response.json())
			.then((data) => setAll_Product(data));
	}, []);

	const addtocart = (itemid) => {
		setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
	};

	const removefromcart = (itemid) => {
		setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
	};

	const gettotalcartamount = () => {
		let totalamount = 0;
		for (const item in cartitem) {
			if (cartitem[item] > 0) {
				let iteminfo = all_product.find(
					(product) => product.id === Number(item)
				);
				totalamount += iteminfo.new_price * cartitem[item];
			}
		}
 		return totalamount;
	};

	const gettotalcartitems = () => {
		let totalitem = 0;
		for (const item in cartitem) {
			if (cartitem[item] > 0) {
				totalitem += cartitem[item];
			}
		}
		return totalitem;
	};

	console.log(cartitem);

	const contextvalue = {
		all_product,
		cartitem,
		removefromcart,
		addtocart,
		gettotalcartamount,
		gettotalcartitems,
	};

	return (
		<Shopcontext.Provider value={contextvalue}>
			{props.children}
		</Shopcontext.Provider>
	);
};

export default ShopContextProvider;
