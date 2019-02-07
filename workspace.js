// Challenge: 
// each line contains a customerID and the orderID separaded by a space
// Required Output: Print a single integer denoting the amount of money that can be spent to get the one of each without going over budget. 
//If both cannot be aquired without overspending, print -1 instead.

    
console.log(miniMaxSum([1,2,3,4,5]));
// Expected Output => [10,14]

var re = /\b([aeiou]{1})\w+\1\b/gi;
function reverseString(s) {
    try {
        var array = s.split("").reverse()
        console.log(array.join(""));
    } catch (error) {
        console.log(error.message)
        console.log(s)
    }
}

//throwing errors
function isPositive(a) {
    if (a == 0) {
        throw new Error("Zero Error");
    }
    if (a == Math.abs(a)) {
        return "YES";
    }

    throw new Error("Negative Error");
}
function main() {
    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}


//super constructors and inheritance
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
class Square extends Rectangle {
    constructor(w) {
        super(w,w)
        // this.w = w;
        // this.h = w;
    }
}


function getLetter(str) {
    //get 1st character in string parameter
    let letter = str.charAt(0);

    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            return "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            return "C";
            break;

        default:
            return "D"
            break;
    }
    // return letter;
}

class Polygon {
    constructor(array) {
        this.value = array;
    }
    perimeter() {
        var returnval = 0;
        var i = this.value.length;
        while (i--) {
            returnval += this.value[i]; 
        }
        return returnval;
    }
}


function miniMaxSum(arr) {
    //sort array from smallest to largest
    arr.sort();

    //find smallest sum by adding all values except the last (largest)
    var small_sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (index == arr.length - 1) {
            break;
        }
        small_sum += arr[index];
    }

    //traverse the array backwards, adding all values except the last (smallest)
    var largest_sum = 0;
    var index = arr.length;
    while (index--) {
        if (index == 0) {
            break;
        }
        largest_sum += arr[index];
    }

    //return the largest and smallest in an array
    return [small_sum,largest_sum];
}

//MAP
function modifyArray(nums) {
    var converted_array = nums.map(function (s) {
        //multiply by 2 if even, otherwise by 3
        if (s % 2 == 0) {
            return s * 2
        } else {
            return s * 3
        }
    });
    return converted_array;
}
