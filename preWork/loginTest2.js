var systemLogin = 'admin@gmail.com';
var systemPassword = 'hunter2';

var login = function () {
  var userLogin = prompt("Please enter your username.");
  var userPassword = prompt("Please enter your password.");
  
  if ( userPassword.length >= 8) {
      
    if (userLogin === systemLogin && userPassword === systemPassword && checkAtDot(userLogin)) {
      return "Congrats you logged in";
    }
    else {
      return "Sorry please try again.";
    }
  }
  else {
      return "Password must be 8 characters long";
  }
}

var login2 = function () {
  var loginTrue
  var passwordTrue

  var userLogin = prompt("Please enter your username.");
  var userPassword = prompt("Please enter your password.");
  switch(userLogin) {
    case "admin@gmail.com":
      loginTrue=true;
      break;
    default:
      loginTrue=false;
  }

    switch(userPassword) {
    case "hunter2":
      passwordTrue=true;
      break;
    default:
      passwordTrue=false;
  }

  if (loginTrue && passwordTrue) {
    console.log('Valid');
  }
  else {
    console.log('invalid');
  }
}

function checkAtDot (login) {
  var atCheck=false;
  var atIndex=0;
  var dotCheck=false;
  var dotIndex=0;
  for (var letter in login) {
    if (letter === '@') {
      atIndex=letter;
      atCheck=true;
    }
    if (letter === '.') {
      dotIndex=letter;
      dotCheck= true;
    }
  }


  if (atCheck && dotCheck && atIndex < dotIndex) {
    return true;
  }
  else {
    return false;
  }
  
}
login();