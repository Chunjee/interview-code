// Challenge: Parse a directory of files containing line separated customer names and orders
// each line contains a customerID and the orderID separaded by a space
// Required Output: Print out each customer on it's own line and all their orders

var hash = require('string-hash');

var exampleinput = 'Customer1 asdhqjhs\nCustomer2 asiduh\nCustomer1 asidyyyya\nCustomer1 yuyudk\nCustomer3 xyyasfd';
var customers = [];

var alllines_array = exampleinput.split('\n');
for (let index = 0; index < alllines_array.length; index++) {
    var line = alllines_array[index].split(' ');

    var customerhash = hash(line[0])
    if (customers[customerhash] == undefined) {
        customers[customerhash] = {};
    }
    //append or create orders array depending on if the customer has been seen before
    if (customers[customerhash].orders == undefined) {
        customers[customerhash].orders = [];
    }
    customers[customerhash].name = line[0];
    customers[customerhash].orders.push(line[1]);
}

//printout each customer and their orders
for (const key in customers) {
    if (customers.hasOwnProperty(key)) {
        const element = customers[key];
        console.log(element.name + ' ' + element.orders.join(', '));
    }
}

// Expected Output:
// Customer1 asdhqjhs, asidyyyya, yuyudk
// Customer2 asiduh
// Customer3 xyyasfd
