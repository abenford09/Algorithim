// roman numeral solution


const romanToInt = function(s) {
    const romanNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    
};


const romanToNumInt = function (s) {
    // base integer
    let int = 0;
    // base map roman numeral values
    var roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    // loop through the values 
    for(let i = 0, j = s.length; i < j; i++){
        // Read the value correctly so that the calculations can be read correctly
        // taking the input number verify its first roman digit 
        // loop through the following numbers while checking the next digit roman numeral position
        if(roman[s[i]] < roman[s[i+1]]){
            int += roman[s[i] + s[i + 1]];
            ++i;
        } else {
            console.log(roman[s[i]] < roman[s[i+1]])
            int += roman[s[i]];
        }
    }
    return int;
  };
  
  const check = "XLX"
  console.log(check)
  console.log(romanToNumInt(check))