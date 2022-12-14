// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDOBHqEu_FX5cwR-P79SUHPrl85Eu2R91g",
	authDomain: "contact-form-e2058.firebaseapp.com",
	databaseURL: "https://contact-form-e2058-default-rtdb.firebaseio.com",
	projectId: "contact-form-e2058",
	storageBucket: "contact-form-e2058.appspot.com",
	messagingSenderId: "484040147864",
	appId: "1:484040147864:web:7586cb329bf14a753761ed",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initialize variables
const auth = firebase.auth();
const database = firebase.database();
// reference the database
var contactFormDB = firebase.database().ref("contactForm");
// var contactFormDBS = firebase.database().ref("loginForm");
var contactFormDBS = firebase.database().ref("commentForm");

//contact form validation
function formValidation() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let subject = document.getElementById("subject").value;
	let message = document.getElementById("message").value;
	let validName = document.getElementById("validName");
	let validEmail = document.getElementById("validEmail");
	let validSubject = document.getElementById("validSubject");
	let validMessage = document.getElementById("validMessage");
	let notBelowCharactes = document.getElementById("notBelowCharactes");
	let emailValidityNot = document.getElementById("emailValidityNot");
	let emailValidity = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let alert = document.querySelector(".alert");
	if (name === "") {
		validName.style.display = "block";
		setTimeout(() => {
			validName.style.display = "none";
		}, 5000);
		return false;
	}
	if (email === "") {
		validEmail.style.display = "block";
		setTimeout(() => {
			validEmail.style.display = "none";
		}, 5000);
		return false;
	}
	if (!email.match(emailValidity)) {
		emailValidityNot.style.display = "block";
		setTimeout(() => {
			emailValidityNot.style.display = "none";
		}, 5000);
		return false;
	}
	if (subject === "") {
		validSubject.style.display = "block";
		setTimeout(() => {
			validSubject.style.display = "none";
		}, 5000);
		return false;
	}
	if (message === "") {
		validMessage.style.display = "block";
		setTimeout(() => {
			validMessage.style.display = "none";
		}, 5000);
		return false;
	}
	if (message.length < 20) {
		notBelowCharactes.style.display = "block";
		setTimeout(() => {
			notBelowCharactes.style.display = "none";
		}, 5000);
		return false;
	}
	if (!message === "") {
		alert.style.display = "block";
		setTimeout(() => {
			alert.style.display = "none";
		}, 3000);
	}
	//contact saving in firebase

	//contact saving in local storage
	// const contactMessage = JSON.parse(localStorage.getItem("contacts"));
	// const newMessage = {};
	// newMessage["id"] = Date.now().toString();
	// newMessage["name"] = name;
	// newMessage["email"] = email;
	// newMessage["subject"] = subject;
	// newMessage["time"] =
	// 	new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
	// newMessage["message"] = message;
	// contactMessage.push(newMessage);
	// localStorage.setItem("contacts", JSON.stringify(contactMessage));
	document.getElementById("contactForm").reset();
	//contact saving in firease
	saveMessage(name, email, subject, message);
	document.querySelector(".alert").style.display = "block";
	setTimeout(() => {
		document.querySelector(".alert").style.display = "none";
	}, 3000);
}

const saveMessage = (name, email, subject, message) => {
	var newContactForm = contactFormDB.push();
	newContactForm.set({
		name: name,
		email: email,
		subject: subject,
		message: message,
	});
};

//login validation

function loginFormValidation() {
	let idloginFormEmail = document.getElementById("idloginFormEmail").value;
	let Password = document.getElementById("Password").value;
	let loginFormEmail1 = document.getElementById("loginFormEmail1");
	let loginFormEmail = document.getElementById("loginFormEmail");
	let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let loginFormPassword = document.getElementById("loginFormPassword");
	const admin = localStorage.getItem("Admin");
	if (idloginFormEmail === "") {
		loginFormEmail1.style.display = "block";
		setTimeout(() => {
			loginFormEmail1.style.display = "none";
		}, 5000);
		return false;
	}
	if (!idloginFormEmail.match(validEmailRegex)) {
		loginFormEmail.style.display = "block";
		setTimeout(() => {
			loginFormEmail.style.display = "none";
		}, 5000);
		return false;
	}
	if (Password === "") {
		loginFormPassword.style.display = "block";
		setTimeout(() => {
			loginFormPassword.style.display = "none";
		}, 5000);
		return false;
	}
	// if (admin.email !== idloginFormEmail || admin.password !== Password) {
	// 	document.getElementById("loginError").style.display = "block";
	// 	setTimeout(() => {
	// 		document.getElementById("loginError").style.display = "none";
	// 	}, 3000);
	// 	return false;
	// }
	// auth
	// 	.signInWithEmailAndPassword(idloginFormEmail, Password)
	// 	.then(function () {
	// 		var user = auth.currentUser;
	// 		var database_ref = database.ref();
	// 		//create user data
	// 		var userData = {
	// 			email: idloginFormEmail,
	// 			password: Password,
	// 			last_login: Date.now(),
	// 		};
	// 		database_ref.child(`users/` + user.uid).update(userData);
	// 	})
	// 	.catch(function (error) {
	// 		var error_code = error.code;
	// 		var error_message = error.message;
	// 	});
}

// comment validation

function commentSubmit() {
	let demoName = document.getElementById("commentName").value;
	let demoEmail = document.getElementById("commentEmail").value;
	let demoMessage = document.getElementById("commentMessage").value;
	let demoNameText = document.getElementById("demoNameText");
	let demoEmailText = document.getElementById("demoEmailText");
	let demoMessageText2 = document.getElementById("demoMessageText2");
	let validEmailComment = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let demoMessageText = document.getElementById("demoMessageText");
	let demoMessageText1 = document.getElementById("demoMessageText1");
	if (demoName === "") {
		demoNameText.style.display = "block";
		setTimeout(() => {
			demoNameText.style.display = "none";
		}, 5000);
		return false;
	}
	if (demoEmail === "") {
		demoEmailText.style.display = "block";
		setTimeout(() => {
			demoEmailText.style.display = "none";
		}, 5000);
		return false;
	}
	if (!demoEmail.match(validEmailComment)) {
		demoMessageText2.style.display = "block";
		setTimeout(() => {
			demoMessageText2.style.display = "none";
		}, 5000);
		return false;
	}
	if (demoMessage === "") {
		demoMessageText.style.display = "block";
		setTimeout(() => {
			demoMessageText.style.display = "none";
		}, 5000);
		return false;
	}
	if (demoMessage.length < 20) {
		demoMessageText1.style.display = "block";
		setTimeout(() => {
			demoMessageText1.style.display = "none";
		}, 5000);
		return false;
	}
	saveCommentMessage(demoName, demoEmail, demoMessage);
	document.getElementById("commentForm").reset();
}

const saveCommentMessage = (demoName, demoEmail, demoMessage) => {
	var newCommentContactForm = contactFormDBS.push();
	newCommentContactForm.set({
		name: demoName,
		email: demoEmail,
		comment: demoMessage,
	});
};

function displayCommentForm() {
	document.querySelector("#commentForm").style.display = "block";
}
function commentReset() {
	document.querySelector("#commentForm").style.display = "none";
}
