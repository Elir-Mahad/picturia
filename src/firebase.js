// Here we are bringing firebase in, and connecting it to our front-end amazon app

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCYpUeI0soXMop0fbOqhVjljLBvTe0KA7Q",
	authDomain: "fir-86a51.firebaseapp.com",
	databaseURL: "https://fir-86a51.firebaseio.com",
	projectId: "fir-86a51",
	storageBucket: "fir-86a51.appspot.com",
	messagingSenderId: "8804929788",
	appId: "1:8804929788:web:9c71dfd745d3bbac470779",
	measurementId: "G-RKKFP1GZFH"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
	// db,
	auth
};
