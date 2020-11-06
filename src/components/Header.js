// Type rfce to make formatted functional component,
// based on the name of the file, appear automatically

//In this Header, we are going to create a nav bar
// The nav bar will contain:
// A.Logo on the left - > img
// B. Search box
// C. 3 links
// D. Basket icon with number

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search"; // this imports the search icon from material-ui as a component
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "../StateProvider.js";

function Header() {
	// const [{ basket }, dispatch] = useStateValue();

	// useStateValue contains some stuff (this 'stuff' include the 'basket' and its contents)
	// We can 'fetch' and 'append' the items of the basket with --> const [{ basket }, dispatch]

	// 'Dispatch' facilitates the process of adding and removing items from the basket
	// The thing that's getting dispatched, is the action.type from the reducer.js
	// Whenever you want to manipulate a data layer, thats when you use dispatch, but if you only want to display the data layer, then you don't need dispatch
	// 'Basket' simply grabs the items that are in the basket.

	// For this example, all we need to do is 'fetch' the items in the basket
	// Therefore --> const [{ basket }, dispatch] = useStateValue(); has been commented out (line 21)
	// and it has been replaced with --> const [{ basket }] = useStateValue();

	const [{ basket }] = useStateValue();

	// const [{ basket }] = useStateValue() will:
	// A. fetch the contents of the array basket
	// B. the array basket stored in the constant intitial state.
	// C. the constant initial state is stored in the reducer.js page

	console.log(basket);

	// In the console, this will outout an empty array.
	// When you click on an item, the console will output -> [{…}] ; this means that the basket array contains one item
	// When you click on another item, the console will output -> (2) [{…}, {…}] ; this means that the basket array contains two items

	// IF you click on the array, then you will get the properties of the item-objects nested in the array (just like json):

	//(2) [{…}, {…}]
	// 0:
	// id: "1234"
	// image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
	// price: 11.96
	// rating: 5
	// title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create"
	// __proto__: Object
	// 1:
	// id: "1235"
	// image: "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg"
	// price: 89.99
	// rating: 4
	// title: "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI VGA port),Black"
	// __proto__: Object
	// length: 2

	return (
		<nav className="header">
			{/* STEP A */}

			<Link to="/">
				{/* Link connects a specific element to a specific page/route.
                                Desired outcome: when the img below is clicked, it will redirect to the login page
                                Method for achieving outcome: 
                                1. import link from react router dom
                                2. wrap the img element with link
                                3. Connect the path "/login" to link by writing <Link to ="/login"> */}

				<img
					className="header_logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			{/* STEP B */}

			<div className="header_search">
				<input type="text" className="header_searchInput" />{" "}
				{/* Here we create the submit form for the search bar  */}
				<SearchIcon className="header_searchIcon" />{" "}
				{/* Here we insert the searchicon component */}
			</div>

			{/* STEP C */}

			<div className="header_nav">
				<Link to="/login" className="header_link">
					{" "}
					{/* wrap div with Link and connect to path */}
					<div className="header_option">
						<span className="header_optionLineOne"> Hello Momo </span>

						<span className="header_optionLineTwo"> Sign in </span>
					</div>
				</Link>

				<Link to="/" className="header_link">
					{" "}
					{/* wrap div with Link and connect to path */}
					<div className="header_option">
						<span className="header_optionLineOne"> Returns </span>

						<span className="header_optionLineTwo"> Orders </span>
					</div>
				</Link>

				<Link to="/" className="header_link">
					{" "}
					{/* wrap div with Link and connect to path */}
					<div className="header_option">
						<span className="header_optionLineOne"> Your </span>

						<span className="header_optionLineTwo"> Prime </span>
					</div>
				</Link>

				{/* STEP D */}

				<Link to="/checkout" className="header_link">
					<div className="header_optionBasket">
						{/* add shopping basket icon through material-ui */}

						<ShoppingBasketIcon />

						<span className="header_optionLineTwo header_basketCount">
							{basket?.length}

							{/* This counts the items in the basket. 
							Then it displays the number of items that are in the basket. 
							So if the basket has a lenght of two, that means that it contains two items.
							
							Whenever the basket is being accessed, there will be a some time lag.
							Like 1 or 2 seconds to initialize.
							This time lag, will be registerd as an error and the basket items will not be returned.
							To avoid this, we must add the conditional (ternary) operator optional --> '?' after the word basket.
							This stops the error from popping up.*/}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
