function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  if (distance <= 400) {
    result =  "This one is on me!";
    return result;
  } else if (distance <= 2500 ) {
    result =  "I will gladly take your thirty bucks.";
    return result;
  } else {
    result =  "No can do.";
    return result;
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  let result = (destination=="NYC")?'Ok, sounds good.':'No go.';
  return result;
    
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;

  switch(tip) {

    case "generous":
      result = "Thank you so much.";
      return result;
      break;
    case "not as generous":
      result = "Thank you.";
      return result;
      break;
      
    default:
      result = "Bye."
      return result;
  }
  
  }

