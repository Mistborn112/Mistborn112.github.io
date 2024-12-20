const currentYear = new Date().getFullYear();
const footerYearElement = document.getElementById('currentYear');
footerYearElement.textContent = currentYear;
let currentTime = new Date();
let hours = currentTime.getHours();
let greetingElement = document.getElementById('greeting');

if (hours < 12) {
  greetingElement.innerText = "Good morning!";
  greetingElement.classList.add('morning');
} else if (hours >= 12 && hours < 17) {
  greetingElement.innerText = "Good afternoon!";
  greetingElement.classList.add('afternoon');
} else {
  greetingElement.innerText = "Good evening!";
  greetingElement.classList.add('evening');
}


const button = document.getElementById('btn-alert');
button.onmouseover = function() {
    button.innerHTML = 'Helloooo!';
};
button.onmouseout = function() {
    button.innerHTML = 'Click Me';
};
button.addEventListener('click', function() {
    
    alert('Hello world!');
});


const numbersList = document.getElementById('numbers');


for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement('li');
    if (i % 2 === 0) {
        listItem.textContent = 'even';
    } else {
        listItem.textContent = 'odd';
    }
    numbersList.appendChild(listItem);
}