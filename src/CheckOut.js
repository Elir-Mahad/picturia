import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider.js";

function CheckOut() {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<img
				className="checkout_ad"
				src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg "
			/>
			<h1> Checkout </h1>
		</div>
	);
}

export default CheckOut;
