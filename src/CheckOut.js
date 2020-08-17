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

			{basket.length === 0 ? ( // if the basket is empty, has no items, then return the below div
				<div>
					<h2> You shopping basket is empty</h2>
					<p>
						You have no items in your basket. To buy one or more items, click
						'Add to basket' next to the item
					</p>
				</div>
			) : (
				// other wise (i.e, if the basket is not empty) return the below div

				<div>
					<h2>Your shopping basket</h2>
				</div>
			)}
		</div>
	);
}

export default CheckOut;
