import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from "./reducer";

function Subtotal() {
	const [{ basket }] = useStateValue(); // THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED WHEN WE WILL NEED TO THE GRAB THE BASKET ITEMS OR BASKET SOMEWHERE IN THE COMPONENT

	return (
		<div className="subtotal">
			{/* Here we will have the price */}

			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items):
							{/* here basket.lenght will ouput the total number of the items in the basket */}
							<strong>{`${value}`}</strong>{" "}
							{/* Here it will say the total price of all the combined items */}
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button> Proceed to Checkout </button>
		</div>
	);
}

export default Subtotal;
