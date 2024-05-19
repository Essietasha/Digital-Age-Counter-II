const timer = document.querySelector('.timer');
let days;
let weeks;
let months;
let years;
let userAge;

const userAgeInput = document.getElementById('ageInput');
userAge = userAgeInput.value;



function loadTime ()  {
 setInterval(() => {
    let thisDate = new Date();
    const currentDate = thisDate.toLocaleTimeString('default', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
    timer.innerHTML = `TIMER: ${currentDate}`
 }, 1000)
}
window.addEventListener('DOMContentLoaded', loadTime);



const formSubmission = document.getElementById('form');
const buttn = document.getElementById('submitBtn');
const message = document.querySelector('.result');

function runAgeCounter (e) {
    e.preventDefault();
    const userNameInput = document.getElementById('nameInput');
    const nameValue = userNameInput.value;
    // const userAgeInput = document.getElementById('ageInput');
    // userAge = userAgeInput.value;

    message.innerHTML = `Hello ${nameValue}, we assume you have a 100 years to live. You have ${days} DAYS,  ${weeks} WEEKS and  ${months} MONTHS to live. Make it count!`;
};
formSubmission.addEventListener('submit', runAgeCounter);

function ageCounter(age) {

    let remainingYears = 100 - age;
     days = remainingYears * 365;
     weeks= remainingYears * 52;
     months = remainingYears * 12;
    //  years = 100 - userAge;
}
    
ageCounter(30);
