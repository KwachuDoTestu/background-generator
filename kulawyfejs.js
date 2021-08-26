var database = [
		{
			username: "mati",
			password: "haslo123"
		}
];

var newsFeed = [
	{
		username: "Bob"
		timeline: "blablla"
	},

	{
		username: "Sally",
		timeline: "Javava"
	}


];

var userNamePrompt = prompt("What is your name?");
var pwdPrompt = prompt("Enter pwd");


var signIn = function {

	if(userNamePrompt === username && pwdPrompt === password){
		alert("Signed in " + username);
	} else {
		alert("Incorrect data");
	}

}
