import data from './data.json' assert {type: 'json'};

const quoteText = document.getElementsByClassName("quote-text");
const author = document.getElementById("author");
const rootColor = document.querySelector(":root");
const quoteBox = document.getElementById("quote-box")
const newBtn = document.getElementById("new-quote");

newBtn.onclick = () => {
    const red = randomNumber(129);
    const green = randomNumber(129);
    const blue = randomNumber(129);
    const arrayNum = randomNumber(data.quotes.length + 1);

    // animate on Click
    quoteBox.classList.add("flip");

    setTimeout(function() {
        quoteBox.classList.remove("flip");
    }, 1000)

    setTimeout(function() {
        // change color on Click
        rootColor.style.setProperty('--primary', `rgb(${red}, ${green}, ${blue})`);

        // change quotes on Click
        quoteText[0].innerHTML = data.quotes[arrayNum].quote;
        author.textContent = `- ${data.quotes[arrayNum].author}`;
    }, 500)
}



function randomNumber(max) {
    return Math.floor(Math.random() * max);
}