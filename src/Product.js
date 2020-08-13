import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
	// spit apart the object, and grab the id, title, image, price,rating
	return (
		<div className="product">
			<div className="product_info">
				<p> {title} </p>
				<p className="prduct_oruce">
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
			<button>Add to basket</button>
		</div>
	);
}

export default Product;
