const timer = document.querySelector('.timer');
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
    const userAgeInput = document.getElementById('ageInput');
    const nameValue = userNameInput.value;
    const ageValue = userNameInput.value;

    message.innerHTML = `Hello, ${nameValue}, you have -- days,  -- months and -- weeks left to walk through life.`;
};
formSubmission.addEventListener('submit', runAgeCounter);

function ageCounter(age) {
    let remainingYears = 90 - age;
    let days = remainingYears * 365;
    let weeks= remainingYears * 52;
    let months = remainingYears * 12;
    console.log(months)
}
    
ageCounter(56);