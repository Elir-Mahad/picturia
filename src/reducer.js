// This is where the data layer logic goes

export const initialState = {
	basket: []
	// the data layer in the beginning is a basket with an empty array; items will get added to it by the user
	// This is similar to the empty array, that is used in the constructor,
	// as a placeholder for incoming api data is being expected

	// To test whether the context api is working. Comment out the above 'basket:[]'
	// Uncomment the below basket
	// basket: ["bread", "meat"]
	// This basket has two items, therefore if the context api is working
	// then, on the page, it should display the number 2 next to the basket.

	// Or uncomment the below basket
	// basket: ["bread", "meat", "pizza"]
	// This basket has three items, therefore if the context api is working
	// then, on the page, it should display the number 3 next to the basket.
};

function reducer(state, action) {
	// We refer to the data layer as state; so anything inside of it is known as state
	// We manipulate the data layer with actions; such as: add basket, add item to basket, remove item from basket,etc
	switch (action.type) {
		// switch stores an action, and the 'type' of that action
		// switch also checks all the cases (strings that represent a specific action )
		case "ADD_TO_BASKET":
			// this first case "ADD_TO_BASKET" represent the action of adding an item to the basket
			// Logic for adding item to basket
			break; // this break signifies that the case logic is finished
		case "REMOVE_FROM_BASKET":
			// this second case "REMOVE_FROM_BASKET" represent the action of removing an item to the basket
			// Logic for removing item from basket
			break; // this break signifies that the case logic is finished
		default:
			return state;
	}
}

export default reducer;
