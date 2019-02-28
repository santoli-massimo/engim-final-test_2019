/*Calc*/
var display = document.getElementById('risultato');
var displayString, dotUsed, nonZero, lastIsEqual;
resetCalc();

function resetCalc() {
  displayString = '0';
  display.value = '0';
  dotUsed = false;
  nonZero = false;
  lastIsEqual = true;
}
 
function addCalc(char) {
  //console.log(displayString)
  var firstChar = displayString[0];
  var lastChar = displayString[displayString.length -1];
  
  switch (char) {
 
    case '.':
      if (dotUsed) {
        return
      } else {
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || displayString === '') displayString = displayString + '0';
        dotUsed = true;
        nonZero = true;
      }
      lastIsEqual ? displayString = '0' + char : displayString += char;
      
    break;

    case '+':
    case '-':
    case '*':
    case '/':
      if (lastChar === '.') displayString += '0';
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        displayString = displayString.substring(0, (displayString.length -1));
      }
      displayString += char;
      dotUsed = false;
      nonZero = false;
    break;

    case '0':
      if (!nonZero) return;
      if (lastIsEqual) {
        displayString = char;
      } else {
        displayString += char;
      }
    break;

    default:
      if (displayString === '0') displayString = '';
      if (lastIsEqual) {
        displayString = char;
      } else {
        displayString += char;
      }
      nonZero = true;
    break;
  }
  
  lastIsEqual = false;
  if (firstChar === '+' || firstChar === '*' || firstChar === '/') displayString = displayString.substring(1, (displayString.length));
  display.value = displayString;
  //console.log(displayString)
}

function equalsCalc(){
  lastIsEqual = true;
  dotUsed = false;
  var lastChar = displayString[displayString.length -1];
  if (lastChar === '.') displayString += '0';
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    displayString = displayString.substring(0, (displayString.length -1));
  }
  displayString = "" + eval(displayString);
  display.value = displayString;
  //displayString = '';
}

function changeCalc(){
  displayString[0] === '-' ? displayString = displayString.substring(1) : displayString = '-' + displayString;
  display.value = displayString;
}

/* _______________________________ */