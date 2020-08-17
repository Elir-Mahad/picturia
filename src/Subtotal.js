import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
	const [{ basket }] = useStateValue();

	return (
		<div className="subtotal">
			{/* Here we will have the price */}

			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items):
							<strong>{`${value}`}</strong>
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
