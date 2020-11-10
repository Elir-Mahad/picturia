import React from "react";
import Product from "./Product.js";
import "./Home.css";
// import Response from "../response.js";

// The home page has:
// 1. The banner
// 2. All Products (id, title, price, rating, image)

function Home() {
	//
	// const data = Response;

	// console.log(data);
	//show all the data in the console
	//
	return (
		<div className="home">
			{/* This is the banner */}

			<img
				className="home_image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=" "
			/>

			<Product />
			{/* This is the product */}
		</div>
	);
}

export default Home;
