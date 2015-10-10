

function checkAtDot (login) {

  var atCheck=false;
  var atIndex=0;
  var dotCheck=false;
  var dotIndex=0;

  for (var letter in login) {
    if (login[letter] === '@') {
      atIndex=letter;
      atCheck=true;
    }
    if (login[letter] === '.') {
      dotIndex=letter;
      dotCheck= true;
    }
  }


  console.log("atIndex is " + atIndex + " dotIndex is  " + dotIndex);
  console.log(atIndex > dotIndex);

  if (atCheck && dotCheck && (atIndex > dotIndex)) {
    return true;
  }
  else {
    return false;
  }
  
}

checkAtDot("admin@gmail.com");