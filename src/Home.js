import React from "react";
import Product from "./Product.js";
import "./Home.css";

// The home page has:
// 1. The banner
// 2. All Products (id, title, price, rating, image)

function Home() {
	return (
		<div className="home">
			{/* This is the banner */}

			<img
				className="home_image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=" "
			/>

			{/* This is the product */}

			<div className="home_row">
				<Product
					id="1234"
					title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
				/>
				<Product
					id="1235"
					title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI VGA port),Black"
					price={89.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg"
				/>
			</div>

			<div className="home_row">
				<Product
					id="1236"
					title="Seagate (STGD2000100) Game Drive for PS4 Systems 2TB External Hard Drive Portable HDD – USB 3.0, Officially Licensed Product"
					price={79.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81M88kKp54L._AC_SX679_.jpg"
				/>
				<Product
					id="1237"
					title="AmazonBasics Lightweight Super Soft Easy Care Microfiber Sheet Set with 16 Deep Pockets - Queen, Spa Blue"
					price={20.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71I38txiDQL._AC_SX522_.jpg"
				/>
				<Product
					id="1238"
					title="AmazonBasics Memory Foam Filled Bean Bag Chair with Microfiber Cover - 4', Gray"
					price={40.0}
					rating={2}
					image="https://images-na.ssl-images-amazon.com/images/I/819hWnQOJeL._AC_SX569_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="1239"
					title="AmazonBasics Head Strap Camera Mount for GoPro"
					price={10.34}
					rating={1}
					image="https://images-na.ssl-images-amazon.com/images/I/710ERU80dXL._AC_SX425_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
