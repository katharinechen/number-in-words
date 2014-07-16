
var numWord = function(number) {

  var numWordList = {0: "zero", 1: "one", 2: "two", 3: "three",
                      4: "four", 5: "five", 6: "six", 7: "seven",
                      8: "eight", 9: "nine", 10: "ten", 11: "eleven",
                      12: "twelve", 13: "thirteen", 14: "fourteen",
                      15: "fifteen", 16: "sixteen", 17: "seventeen",
                      18: "eighteen", 19: "nineteen", 20: "twenty",
                      30: "thirty", 40: "forty", 50: "fifty", 60: "sixty",
                      70: "seventy", 80: "eighty", 90: "ninety"
                    };

  if (number <= 20) {
    return numWordList[number];
  }

  if (number < 100 && number % 10 === 0) {
    return numWordList[number];
  }

  if (number < 100) {
    return numWord(number - (number % 10)) + " " + numWord((number % 10));
  }

  if (number < 1000) {
    if (number % 100 === 0) {
      return numWord(parseInt(number / 100)) + " hundred";
    }
    return numWord(parseInt(number / 100)) + " hundred " + numWord(number % 100);
  }

  if (number < 1000000) {
    if (number % 1000 === 0) {
      return numWord(parseInt(number / 1000)) + " thousand";
    }
    return numWord(parseInt(number / 1000)) + " thousand " + numWord(number % 1000);
  }

  if (number < 1000000000) {
    if (number % 1000000 === 0) {
      return numWord(parseInt(number / 1000000)) + " million";
    }
    return numWord(parseInt(number / 1000000)) + " million " + numWord(number % 1000000);
  }
};

$(document).ready(function(){
  $("form#user-form").submit(function(event){
    var number = parseInt($("#user-number").val());
    var result = numWord(number);
    $("#results").empty();
    $("#results").append("<h1>" + result + "</h1>");
    event.preventDefault();
  });
});



