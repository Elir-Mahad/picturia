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

import { useStateValue } from "./StateProvider.js";

function Header() {
	//? const [{ basket }, dispatch] = useStateValue();

	// useStateValue contains some stuff (this 'stuff' include the 'basket' and its contents)
	// We can 'fetch' and/or 'append' the items of the basket with --> const [{ basket }, dispatch]

	// 'Dispatch' facilitates the process of adding and removing items from the basket
	// The thing that's getting dispatched, is the action.type from the reducer.js
	// 'Basket' simply grabs the items that are in the basket

	// For this example, all we need to do is 'fetch' the items in the basket
	// Therefore --> const [{ basket }, dispatch] = useStateValue(); has been commented out (blue line)
	// and it has been replaced with --> const [{ basket }] = useStateValue();

	const [{ basket }] = useStateValue();

	// const [{ basket }] = useStateValue() will:
	// A. fetch the contents of the array basket
	// B. the array basket stored in the constant intitial state.
	// C. the constant initial state is stored in the reducer.js page

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
							{" "}
							{basket.length}
							{/* This counts the items in the basket. 
							Then it displays the number items that are in the basket. 
							So if the basket has a lenght of two, 
							that means that it contains two items  */}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
