import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider.js";

function CheckoutProduct({ id, title, image, price, rating }) {
	const [{}, dispatch] = useStateValue();

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			item: {
				id: id, // fetch the id
				title: title, // fetch the title
				image: image, // fetch the image
				price: price, // fetch the price
				rating: rating // fetch the rating
			}
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} alt="" />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{/* the explanation for the how the logic behind the ratings is explained in product.js. 
                    Here i just copied the code without the explanations. */}
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
