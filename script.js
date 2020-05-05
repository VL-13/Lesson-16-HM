/* leap year */
function leapYear(year) {
  let result;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      result = "This is Leap Year";
  } else {
      result = "This is not leap year";
  }
  alert(result);
}
leapYear(2009);

/* celsius to fahrenheit */
function celsiusToFahr(celsius) {
  var convertCelsius = celsius * 1.8 + 32;
  alert(celsius +'C is ' + convertCelsius + 'F.')
}
celsiusToFahr(23);

/* fahrenheit to celsius */
function fahrToCelsius(fahrenheit) {
  var convertFahr = (fahrenheit - 32) * 1.8;
  alert(fahrenheit +'F is ' + convertFahr + 'C.')
} 
fahrToCelsius(46);