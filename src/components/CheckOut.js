import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";

function CheckOut() {
	const [{ basket }] = useStateValue(); // THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED WHEN WE WILL NEED TO THE GRAB THE BASKET ITEMS OR BASKET SOMEWHERE IN THE COMPONENT

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg "
					alt=""
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
						<h2 className="checkout_title">Your shopping basket</h2>

						{/* list all the checkout products */}

						{/* for every single item, return the checkout products component */}

						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && ( // if the items in the basket (basket.lenght) are greater than 0 then return:
				<div className="checkout_right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default CheckOut;
