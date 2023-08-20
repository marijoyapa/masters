function palindrome(str) {
    let reverseString =""
    var string = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    if (string==reverseString) {
        return true;
    } 
    else{
        return false;
    }
  }
  
  palindrome("HOW ARE YOU");


  //Convert to roman numerals
  function convertToRoman(num) {
    var value = ""
    var reverseValue = ""
    var numString = num.toString();
    var digits = numString.length - 1;
    var number = numString[digits]
    let pos = 1
    var getValues = []
    for (let index = numString.length; index > 0; index--) {
        number = numString[index - 1]
        getValues.push(convertionHappens(number, pos))
        pos++
    }
    value = getValues.reverse().join('')
    console.log(value);
    return value;
}
function convertionHappens(num, pos) {
    var value = "";
    if (pos == 1) {
        value = convertToDigit(num, "I", "V", "X")
    } else if (pos == 2) {
        value = convertToDigit(num, "X", "L", "C")
    }
    else if (pos == 3) {
        value = convertToDigit(num, "C", "D", "M")
    }
    else if (pos == 4) {
        value = convertToDigit(num, "M")
    }
    return value;
}
function convertToDigit(num, a, b, c) {
    let value = ""
    if (num > 0 && num < 4) {
        value = forThree(num, a)
    } else if (num > 5 && num < 9) {
        var digits = forThree(num - 5, a)
        value = b + digits
    }
    else if (num == 4) {
        value = a + b
    }
    else if (num == 9) {
        value = a + c
    }
    else if (num == 5) {
        value = b
    }
    return value;
}
function forThree(num, a) {
    let value = ""
    for (let index = 0; index < num; index++) {
        value += a;
    }
    return value;
}

convertToRoman(3999);
  