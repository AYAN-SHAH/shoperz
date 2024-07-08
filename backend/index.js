const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const { strict } = require("assert");
require("dotenv").config();
const port = 3000;
app.use(express.json());
app.use(cors());

// database connection with mongodb
mongoose.connect(
	"mongodb+srv://ayanshah:Ayanshah1@cluster0.mbko8eo.mongodb.net/e-commerce"
);

// api creation

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// image storing enigine

const storage = multer.diskStorage({
	destination: "./upload/images",
	filename: (req, file, cb) => {
		return cb(
			null,
			`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

const upload = multer({ storage: storage });

//creating upload endpoint for images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
	res.json({
		success: 1,
		image_url: `https://shoper-backend-production.up.railway.app/${port}/images/${req.file.filename}`,
	});
});

// schema for creating products

const Product = mongoose.model("Product", {
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	new_price: {
		type: Number,
		required: true,
	},
	old_price: {
		type: Number,
		required: true,
	},
	Date: {
		type: Date,
		default: Date.now,
	},
	available: {
		type: Boolean,
		default: true,
	},
});

// api for adding product

app.post("/addproduct", async (req, res) => {
	let products = await Product.find({});
	let id;
	if (products.length > 0) {
		let last_product_array = products.slice(-1);
		let last_product = last_product_array[0];
		id = last_product.id + 1;
	} else {
		id = 1;
	}
	const product = new Product({
		id: id,
		name: req.body.name,
		image: req.body.image,
		category: req.body.category,
		new_price: req.body.new_price,
		old_price: req.body.old_price,
	});
	console.log(product);
	await product.save();
	console.log("saved");
	res.json({
		success: true,
		name: req.body.name,
	});
});

//creating api for deleting products

app.post("/removeproduct", async (req, res) => {
	await Product.findOneAndDelete({ id: req.body.id });
	console.log("removed");
	res.json({
		success: true,
		name: req.body.name,
	});
});

// creating api for getting all products

app.get("/allproducts", async (req, res) => {
	let products = await Product.find({});
	console.log("all products fetched");
	res.send(products);
});

// schema creating for user model

const Users = mongoose.model("Users", {
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	cartdata: {
		type: Object,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

//creating endpoint for registoring the user
app.post("/signup", async (req, res) => {
	let check = await Users.findOne({ email: req.body.email });
	if (check) {
		return res.status(400).json({
			success: false,
			errors: "existing user found with same user id or same email address",
		});
	}
	let cart = {};
	for (let i = 0; i < 300; i++) {
		cart[i] = 0;
	}
	const user = new Users({
		name: req.body.username,
		email: req.body.email,
		password: req.body.password,
		cartdata: cart,
	});
	await user.save();

	const data = {
		user: {
			id: user.id,
		},
	};

	const token = jwt.sign(data, "secret_ecom");
	res.json({ success: true, token });
});

//creating endpoint for user login
app.post("/login", async (req, res) => {
	let user = await Users.findOne({ email: req.body.email });
	if (user) {
		const passcompare = req.body.password === user.password;
		if (passcompare) {
			const data = {
				user: {
					id: user.id,
				},
			};
			const token = jwt.sign(data, "secret_ecom");
			res.json({ success: true, token });
		} else {
			res.json({ success: false, errors: "wrong password" });
		}
	} else {
		res.json({ success: false, errors: "wrong email id" });
	}
});

//creating endpoint for new collection

app.get("/newcollection", async (req, res) => {
	let products = await Product.find({});
	let newcollection = products.slice(1).slice(-8);
	console.log("newcollection fetched");
	res.send(newcollection);
});

//crating endpoint for popular in women section

app.get("/popularinwomen", async (req, res) => {
	let products = await Product.find({ category: "women" });
	let popularinwomen = products.slice(0, 4);
	console.log("popularinwomen fetched");
	res.send(popularinwomen);
});

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${port}`);
});
