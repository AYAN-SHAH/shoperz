import React, { useState } from "react";

const loginsignup = () => {
	const [state, setstate] = useState("login");
	const [formdata, setformdata] = useState({
		username: "",
		password: "",
		email: "",
	});
	const changehandler = (e) => {
		setformdata({ ...formdata, [e.target.name]: e.target.value });
	};
	const login = async () => {
		console.log("login", formdata);
		let responsedata;
		await fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				Accept: "application/form-data",
				"content-type": "application/json",
			},
			body: JSON.stringify(formdata),
		})
			.then((response) => response.json())
			.then((data) => (responsedata = data));

		if (responsedata.success) {
			localStorage.setItem("auth-token", responsedata.token);
			window.location.replace("/");
		} else {
			alert(responsedata.errors);
		}
	};
	const Signup = async () => {
		console.log("Signup", formdata);
		let responsedata;
		await fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: {
				Accept: "application/form-data",
				"content-type": "application/json",
			},
			body: JSON.stringify(formdata),
		})
			.then((response) => response.json())
			.then((data) => (responsedata = data));

		if (responsedata.success) {
			localStorage.setItem("auth-token", responsedata.token);
			window.location.replace("/");
		} else {
			alert(responsedata.errors);
		}
	};

	return (
		<div className="flex justify-center items-center h-[auto] py-10 bg-gray-100">
			<div className="bg-white p-8 rounded-md shadow-md">
				<h1 className="text-3xl font-semibold mb-4">{state}</h1>
				<div className="mb-4">
					{state === "Sign up" ? (
						<input
							name="username"
							value={formdata.username}
							onChange={changehandler}
							type="text"
							placeholder="Your Name"
							className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
						/>
					) : (
						<></>
					)}
				</div>
				<div className="mb-4">
					<input
						name="email"
						value={formdata.email}
						onChange={changehandler}
						type="email"
						placeholder="Email Address"
						className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<input
						name="password"
						value={formdata.password}
						onChange={changehandler}
						type="password"
						placeholder="Password"
						className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<button
					onClick={() => {
						state === "login" ? login() : Signup();
					}}
					className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
				>
					Continue
				</button>
				{state === "Sign up" ? (
					<p className="mt-4">
						Already have an account?{" "}
						<span
							onClick={() => {
								setstate("login");
							}}
							className="text-blue-500 cursor-pointer"
						>
							login here
						</span>
					</p>
				) : (
					<p className="mt-4">
						create an account?{""}
						<span
							onClick={() => {
								setstate("Sign up");
							}}
							className="text-blue-500 cursor-pointer"
						>
							click here
						</span>
					</p>
				)}
				<div className="flex items-center mt-4">
					<input type="checkbox" id="agree" className="mr-2" />
					<p className="text-sm text-gray-700">
						By continuing, I agree to the terms of use & privacy policies
					</p>
				</div>
			</div>
		</div>
	);
};

export default loginsignup;
