const week = document.querySelector('#week');
const currentDate = document.querySelector('#currentDate');

// get a current a new  date()
 let today = new Date();


// get a day 
let day = today.getDay();

// get a date
let data = today.toLocaleDateString();

if(day ===  0){
    day = 'Sunday'
}else if (day === 1){
    day = 'Monday'
}else if(day === 2){
    day = 'Tuesday'
}else if(day === 3){
    day = 'Wednesday'
}else if(day === 4){
    day = 'Thursday'
}else if(day === 5){
    day = 'Monday'
}else if(day === 6){
    day = 'Saturday'
}

week.textContent = day;
currentDate.textContent = data;