import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (event) => {
		event.preventDefault(); // this stops page referesh
		// do the login logic here

		auth.signInWithEmailAndPassword(email, password);
	};

	const register = (event) => {
		event.preventDefault(); // this stops page referesh
		// do the register logic here
	};

	return (
		<div className="login">
			<Link to="/">
				{/* this link, will wrap a picture, 
                    and when clicked it will 
                    redirect the user back to the homepage */}
				<img
					className="login_logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>

			<div className="login_container">
				<h1> Sign in </h1>
				<form>
					<h5> Email </h5>
					<input value={email} type="email" />
					<h5>Password</h5>
					<input value={password} type="password" />
					<button onClick={login} type="submit" className="login_signInButton">
						Sign in
					</button>
				</form>
				<p>
					To use certain Amazon Services on a Product, you must have your own
					Amazon.com account, be logged in to your account on the Product, and
					have a valid payment method associated with your account.
				</p>
				<button onClick={register} className="login_registerButton">
					Create your Amazon button
				</button>
			</div>
		</div>
	);
}

export default Login;
