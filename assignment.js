// https://github.com/Md-Kais/assignment.js


//kilometerToMeter

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

//budgetCalculator

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
    else {
        let total = watch * 50 + phone * 100 + laptop * 500;
        return total;
    }

}
// console.log(budgetCalculator(1.0, 1.0, 19.000000000000000000));




