// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.


// should be able to get this with a if else statement
function booleanToString(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}


// a differnt way to do it
function booleanToString(b){
    return b.toString();
}

// or
function booleanToString(b){
    return b ? 'true' : 'false';
}


// or
function booleanToString(b){
    return String(b);
}
