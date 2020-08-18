import React, { useEffect } from "react";

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
import Login from "./Login.js";
import "./App.css";

import { useStateValue } from "./StateProvider.js";
import { auth } from "firebase";

function App() {
	const [{ user }, dispatch] = useStateValue(); // THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED WHEN WILL NEED TO THE GRAB THE BASKET ITEMS OR BASKET SOMEWHERE IN THE COMPONENT

	// We need a piece of code which runs based on a given condition
	// this is what we call a useEffect Hook ------> very powerful and important

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//  the user is logged in ...
				dispatch({
					type: "SET_USER",
					user: authUser
				});
			} else {
				// the user is logged out ..
				dispatch({
					type: "SET_USER",
					user: null
				});
			}
		});

		console.log("User is ...", user);

		return () => {
			// any clean up operations go in here...
			unsubscribe();
		};
		// the below comment was added because the empty brackets makes react things that hook is missing dependencies.
		// To see what happens, remove the disable line and run.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
						<Login />
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
