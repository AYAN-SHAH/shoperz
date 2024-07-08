import React from "react";
import Sidebar from "../components/sidebar";
import { Routes, Route } from "react-router-dom";
import Addproduct from "../components/addproduct";
import Listproduct from "../components/listproduct";
const admin = () => {
	return (
		<div className="flex">
			<Sidebar />
			<Routes>
				<Route path="/addproduct" element={<Addproduct />} />
				<Route path="/listproduct" element={<Listproduct />} />
			</Routes>
		</div>
	);
};

export default admin;
