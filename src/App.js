import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// React apps are single page apps (SPA)
// If you want to have different pages in a SPA, then you have to use the react router.
// This will help you go to different pages without refreshing or reloading the SPA.
// The router nests all the code.
// The router is the parent that wraps the app.
// It gives all the children, inside the app, page routing logic.
// The route is determines what content will load, at which page url.
// Inside of Switch is where we add the multiple types of routes to different pages
// The last path is usually the default route - the Home page

// Observation: You can add the same components to different pages/routes
// For example: below we added the Header component to the checkout page, and to the homepage, but its not on the login page.

import Header from "./Header.js";

import CheckOut from "./CheckOut.js";

import Home from "./Home.js";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/checkout">
						<Header />{" "}
						{/* This is the Header component from Header.js It will appear on the check out page */}
						{/* For this path, Route path="/checkout", 
				when you enter this url (http://localhost:3000/checkout)
				an h1 with the word checkout will appear on the page */}
						<CheckOut />
					</Route>
					<Route path="/login">
						{/* For this path, Route path="/login", 
            when you enter this url (http://localhost:3000/login)
            an h1 with the word login will appear on the page */}
						<h1> login page </h1>
					</Route>
					<Route path="/">
						<Header />{" "}
						{/* This is the Header component from Header.js It will appear on the homepage */}
						<Home />{" "}
						{/* This is the Home component from Home.js It will appear on the homepage */}
						{/* For this first path, Route path="/", 
            when you enter this url (http://localhost:3000/)
            an h1 with the word homepage will appear on the page */}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
