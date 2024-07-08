import React, { useContext, useRef } from "react";
import logo from "../assets/slogo.png";
import cartIcon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import { Shopcontext } from "../context/shopcontext";
import cross from "../assets/cart_cross_icon.png";
import login from "../assets/login.png";

const navbar = () => {
	const [menu, setmenu] = useState("shop");
	const { gettotalcartitems } = useContext(Shopcontext);
	const menuref = useRef();
	const [open, setopen] = useState(false);
	return (
		<div className="flex items-center justify-between md:justify-evenly p-3 shadow-lg bg-white mx-auto">
			<div className="flex items-center ">
				<img
					src={hamburger}
					alt=""
					width={25}
					className="md:hidden "
					onClick={() => setopen(!open)}
				/>
				<img src={logo} alt="" className="w-6 md:w-[30px] ml-3" />
				<p className="font-bold md:text-xl lg:text-2xl hidden md:block">
					HOPERS.
				</p>
			</div>
			<ul
				ref={menuref}
				className={`flex items-center md:gap-6 lg:gap-8 md:font-bold absolute ml-0 md:ml-12 lg:ml-10 md:static bg-white w-[50vw] h-full md:h-auto z-50  left-0 flex-col md:flex-row top-1  py-5 md:p-0 transition-all text-left md:text-center ${
					open ? "top-1" : "top-[-1000px] "
				}`}
			>
				<img
					src={cross}
					alt=""
					onClick={() => setopen(!open)}
					className="md:hidden text-left  md:w-auto md:indent-0 indent-4"
				/>
				<li
					className="cursor-pointer  w-full md:w-auto md:indent-0 indent-4 my-1 md:my-0"
					onClick={() => {
						setmenu("shop");
					}}
				>
					<Link to="/"> shop </Link>
					{menu === "shop" ? (
						<hr className=" mx-auto bg-slate-700 rounded-xl h-1 w-full my-1 hidden md:block" />
					) : (
						<></>
					)}
				</li>
				<li
					className="cursor-pointer w-full md:w-auto md:indent-0 indent-4 my-1 md:my-0"
					onClick={() => {
						setmenu("men");
					}}
				>
					<Link to="/mens"> men</Link>
					{menu === "men" ? (
						<hr className="mx-auto bg-slate-700 rounded-xl h-1 w-full my-1  hidden md:block" />
					) : (
						<></>
					)}
				</li>
				<li
					className="cursor-pointer w-full md:w-auto md:indent-0 indent-4 my-1 md:my-0"
					onClick={() => {
						setmenu("women");
					}}
				>
					<Link to="/womens"> women</Link>
					{menu === "women" ? (
						<hr className="mx-auto bg-slate-700 rounded-xl h-1 w-full my-1  hidden md:block" />
					) : (
						<></>
					)}
				</li>
				<li
					className="cursor-pointer w-full md:w-auto md:indent-0 indent-4 my-1 md:my-0"
					onClick={() => {
						setmenu("kids");
					}}
				>
					<Link to="/kids"> kids</Link>
					{menu === "kids" ? (
						<hr className="mx-auto bg-slate-700 rounded-xl h-1 w-full my-1  hidden md:block" />
					) : (
						<></>
					)}
				</li>
			</ul>
			<div className="flex items-center gap-4 md:gap-12 ">
				{localStorage.getItem("auth-token") ? (
					<button
						onClick={() => {
							localStorage.removeItem("auth-token");
							window.location.replace("/");
						}}
					>
						Logout
					</button>
				) : (
					<Link to="/login">
						<button className="hidden md:block py-2 px-5 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 active:bg-gray-400 transition duration-300 ease-in-out">
							Login
						</button>
						<img src={login} alt="" className="w-7 md:hidden" />
					</Link>
				)}

				<div className="relative">
					<Link to="/cart">
						<img
							src={cartIcon}
							alt="Cart"
							className="w-7 md:w-8 object-contain"
						/>
					</Link>

					<span className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
						{gettotalcartitems()}
					</span>
				</div>
			</div>
		</div>
	);
};
export default navbar;
