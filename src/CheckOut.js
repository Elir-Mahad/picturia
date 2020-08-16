import React from "react";

function CheckOut() {
	const [{ basket }, dispatch] = useStateValue();

	return <div className="checkout"></div>;
}

export default CheckOut;
