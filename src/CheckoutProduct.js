import React from "react";

import "./checkoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" />
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
				{/* <button onClick={RemoveFromBasket}>Add to basket</button> */}
			</div>
		</div>
	);
}

export default CheckoutProduct;
