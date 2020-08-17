// This is where the data layer logic goes

export const initialState = {
	basket: [
		// the user can add items into the basket,
		// but the item object below is manually added into the basket
		// so it will always be there whenever the user goes to the checkout page
		{
			id: "1235",
			title:
				"Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI VGA port),Black",
			price: 89.99,
			rating: 4,
			image:
				"https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg"
		}
	],
	user: null
	// the data layer in the beginning is a basket with an empty array --> basket :[] ;
	// items will get added to it by the user
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

const reducer = (state, action) => {
	// The constant reducer stores a function that has the two parameter state and action.
	// We refer to the data layer as state; so anything inside the data layer is known as state.
	// We manipulate the data layer with actions; such as: add item to basket, remove item from basket,etc

	console.log(action);
	// console log the items that are clicked on
	// this is to check that the click function is working
	// When the button is clicked, it should output the items object and properties in the browsers console

	switch (action.type) {
		// switch stores an action, and the 'type' of that action
		// switch also checks all the cases (strings that represent a specific action )

		case "ADD_TO_BASKET":
			// This first case "ADD_TO_BASKET" represent the action of adding an item to the basket
			// Here we Logic for adding item to basket

			return {
				// After the item, that has been clicked on, is added to the basket, return:

				...state, // Return whatever the state currently is [line 4]
				// If you had other properties, then this is where you insert all your properties this is similar to how you declare state in the constructor and then set.state in componentDidMount

				basket: [...state.basket, action.item]
				// Return a new basket that's going to contain:
				// The current basket (whatever items were left over) + action.item (the item that was just picked)
				// So if you picked one item, then the new basket will contain: the 4 leftover items + the item that was previously picked. Which will be a total of 5 items.

				// (action.item gets the data points that we asked from in the addtobasket function )
			};
		// break; // this break signifies that the case logic is finished

		case "REMOVE_FROM_BASKET":
			// this second case "REMOVE_FROM_BASKET" represent the action of removing an item to the basket
			// Logic for removing item from basket
			return { state };
		// break; // this break signifies that the case logic is finished

		default:
			return state;
	}
};

export default reducer;
