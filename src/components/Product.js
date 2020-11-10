import React from "react";
import "./Product.css";

import Response from "../response.js";

import { useStateValue } from "../StateProvider.js";

function Product({ id, title, image, price, rating }) {
	// spit apart the object, and grab the id, title, image, price,rating

	const [{}, dispatch] = useStateValue(); // THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED WHEN WILL NEED TO THE GRAB THE BASKET ITEMS OR BASKET SOMEWHERE IN THE COMPONENT

	const addToBasket = () => {
		// console.log();
		// add item to basket
		dispatch({
			type: "ADD_TO_BASKET", // this is the action.type from the reducer.js
			item: {
				id: id // fetch the id of the item that's being added
				// title: title, // fetch the title of the item that's being added
				// image: image, // fetch the image of the item that's being added
				// price: price, // fetch the price of the item that's being added
				// rating: rating // fetch the rating of the item that's being added
			}
		});
	};

	//
	const data = Response;

	console.log(data);

	//

	// On click, the add to basket function is going to run.
	// It is going to dispatch an action (ex: ADD_TO_BASKET)
	// then we listen to the action in the reducer
	// When the action comes in, the basket gets updated

	return (
		<div className="product">
			<div className="product_info">
				<p> {data.id} </p>
				<p> {data.title} </p>
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
