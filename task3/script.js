function checkDate(date) {
    if(date.getDay() == 5) {
        return true;
    }
    return false;
}

function start3() {
    let startDate = new Date(document.getElementById('input3').value);
    let startAge = 20;
    let endAge = 67;
    startDate.setFullYear(startDate.getFullYear() + 20);
    let count = 0;
    let h = "";
    for(let i = 20; i < 70; i += 10) {
        if(checkDate(startDate)) {
            console.log(startDate);
            count++;
            h += "<li>" + startDate + "</li>"
        }
        startDate.setFullYear(startDate.getFullYear() + 10);
        
    }

    document.getElementById('dateUl3').innerHTML = h;
    document.getElementById('count3').innerHTML = count;
}