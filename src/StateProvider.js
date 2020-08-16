import React, { createContext, useContext, useReducer } from "react";

// Tasks:
// setup data layer
// we need this to track the shopping basket and the items that are in it

// If i want to know the number of items that are in the shopping basket,
// at a specific point, i would have to pass a prop from grandparent to parent to child
// to figure out how many items were bought. (Refer to screenshot named 'drilling')
// This process of passing props down, is called prop drilling.
// Instead of doing this, we are going to react context api, to be able to identify the contents of the basket, without prop drilling.
// The process for the react context api is similar to the process of
// creating global variables that can be passed around in the react app.

// Once we understand how to use the react context api,
// we can usually copy and paste the contents of the file ,
// and thereby insert it into the react project,
// because the contents of the file don't change too much from project to project

// This is the data layer

export const StateContext = createContext();

// Build a provider , wrap the entire app inside of the provider and give it access to the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}{" "}
		{/* children is equivalent to <App />. 
        For, in index.js, <App /> is nested in the StateProvider.
        In the same way that, here, children is nested in Statecontext provider */}
	</StateContext.Provider>
);

// This is how we use it iniside of a component

export const useStateValue = () => useContext(StateContext);

// the useStateValue constant is then going to be imported into the header.js
