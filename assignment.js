// https://github.com/Md-Kais/assignment.js


//kilometerToMeter--------------------------------------------------->

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Invalid Input.Because,Distance can't be negative.";
    }
    else if (typeof kilometer === 'string' || kilometer instanceof String) {
        return "Invalid Input.Because,Distance can't be String.";
    }
    else {
        let meter = kilometer * 1000;
        return meter;
    }
}
// console.log(kilometerToMeter(13));//hoye gese

//budgetCalculator--------------------------------------------------->

//watch->$50,phone->$100,laptop->$500;
//ouptut ->total $

function budgetCalculator(watch, phone, laptop) {

    //we don't count when the number is float or less than 0 or string

    if (watch < 0 || phone < 0 || laptop < 0 || typeof watch === 'string' || watch instanceof String || typeof phone === 'string' || phone instanceof String || typeof laptop === 'string' || laptop instanceof String || parseInt(watch) != parseFloat(watch) || parseInt(phone) != parseFloat(phone) || parseInt(laptop) != parseFloat(laptop)) {
        //invalid notification:
        var invalid = "Invalid input. Because, following items can't be negative or string or float:";
        //watch check:
        if (watch < 0 || typeof watch === 'string' || watch instanceof String || parseInt(watch) != parseFloat(watch)) {
            invalid += " watch";
        }
        //phone check:
        if (phone < 0 || typeof phone === 'string' || phone instanceof String || parseInt(phone) != parseFloat(phone)) {
            invalid += " phone";
        }
        //laptop check:
        if (laptop < 0 || typeof laptop === 'string' || laptop instanceof String || parseInt(laptop) != parseFloat(laptop)) {
            invalid += " laptop";
        }
        return invalid;
    }
    //if things passed:
    else {
        let total = watch * 50 + phone * 100 + laptop * 500;
        return total;
    }

}
// console.log(budgetCalculator(1.0, 1.0, 19.000000000000000000));

//hotelCost--------------------------------------------------->

//1->10=>$100,11->20=>$80,>20=>$50;

function hotelCost(day) {
    var amount = 0;
    //invalid
    if (day < 0) {
        return "Day can't be negative, SIR!"
    }
    else if (day <= 10 && day >= 0) {
        amount = Math.ceil(day) * 100;
        return amount;
    }
    else if (day <= 20 && day > 10) {
        amount = 10 * 100;///10
        var reminder = Math.ceil(day - 10) * 80;///<20
        amount += reminder;
        return amount;
    }
    else if (day > 20) {
        amount = 10 * 100;///10
        amount += (10 * 80);///another 10 , <20
        var reminder = Math.ceil(day - 20) * 50;//greater than 20;
        amount += reminder;
        return amount;

    }
}
//console.log(hotelCost(21));

//megaFriend--------------------------------------------------->

//array
//big friend(length);
// only works for correct string array;

function megaFriend(array) {
    var len = 0;//length of element of an array
    var ans = "";//return ans;
    for (let i = 0; i < array.length; i++) {
        var friend = array[i];
        if (friend.length > len) {
            len = friend.length;
            ans = friend;
        }
    }
    //invalid
    if (len === 0) {
        return "There is no input or you have no friend or invalid input(numebers) or empty strings. Go and Find Some or give us correct input.";
    }
    else {
        return ans;
    }
}
// console.log(megaFriend(["kacff ksfsfs","fsfsdf sdfsdfd","dsf dfds","fdsfdsf"]));

// give me a star in github please.

// -------------------->END---------------------------->