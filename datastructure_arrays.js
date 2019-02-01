// Challenge: Parse a directory of files containing line separated customer names and orders
// each line contains a customerID and the orderID separaded by a space
// Required Output: Print out each customer on it's own line and all their orders


var fs = require('fs');

//looping all files in a specific dir which isn't the point of this exercise
// dir_import = "\\home\\examplefolder"
// fs.readdir(process.cwd() + dir_import, function (err, files) {
//     if (err) {
//         console.error("Could not list the directory.", err);
//     }
// }
// files.forEach(function (file, index) {
    //parse each file
// })

var exampleinput = 'Customer1 asdhqjhs\nCustomer2 asiduh\nCustomer1 asidyyyya\nCustomer1 yuyudk\nCustomer3 xyyasfd'
var customers = [];

var alllines_array = exampleinput.split('\n');
for (let index = 0; index < alllines_array.length; index++) {
    var line = alllines_array[index].split(' ');

    var cusomerindex = findCustomerIndex(line[0])
    if (cusomerindex != -1) {
        // console.log("found existing customer")
        customers[cusomerindex].orders += ", " + line[1] //append the newfound order to orders element
    } else {
        var newitem = {};
        newitem.name = line[0];
        newitem.orders = line[1];
        customers.push(newitem);
    }
}

//printout each customer and their orders
customers.forEach(element => {
    console.log(element.name + " " + element.orders)
});



// ----- Functions ----- //
function findCustomerIndex(para_customer) {
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].name == para_customer) {
            return i;
        }
    }
    return -1;
}

// Expected Output:
// Customer1 asdhqjhs, asidyyyya, yuyudk
// Customer2 asiduh
// Customer3 xyyasfd
