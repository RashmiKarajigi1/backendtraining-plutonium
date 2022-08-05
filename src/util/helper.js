function printDate(){
    const date = new Date();
    const today_Date = date.getDate()
    console.log("Today date is: "+today_Date + "-08-2022")
}


function printMonth(){
    const month = new Date();
    const this_month = month.getMonth()+1
    console.log("Month is : "+ this_month);
}


function getBatchInfo(){
    console.log("Plutonium, W3D3, the topic for today is Nodejs module system");
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo