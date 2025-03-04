import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/shopcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ShopContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ShopContextProvider>
);
