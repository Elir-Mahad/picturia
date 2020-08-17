import React from "react";
import "./Product.css";

import { useStateValue } from "./StateProvider.js";

function Product({ id, title, image, price, rating }) {
	// spit apart the object, and grab the id, title, image, price,rating

	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
		// add item to basket
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id, // fetch the id
				title: title, // fetch the title
				image: image, // fetch the image
				price: price, // fetch the price
				rating: rating // fetch the rating
			}
		});
	};

	// On click, the add to basket function is going to run.
	// It is going to dispatch an action (ex: ADD_TO_BASKET)
	// then we listen to the action in the reducer
	// When the action comes in, the basket gets updated

	return (
		<div className="product">
			<div className="product_info">
				<p> {title} </p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{/*For the ratings, we want the ratings to be displayed in stars. 
                                                    So if the rating 4 out 5, then we want to see 4 stars.
                                                    To do this we are going to use a built-in javascrip function.
                                                    Here is the pseudocode for the function:
                                                    {Array(rating) -> create an array that takes in the value of the property rating
                                                    .fill()        -> fill it with the values of the property rating 
                                                    .map((_) => (  -> for each value output 
                                                    <p>⭐</p>      -> a ptag with the star element
                                                    */}
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐</p>
						))}
				</div>
			</div>

			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
