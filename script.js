// Calling the Button in the Javascript
const clickMeButton = document.querySelector('.js-btn');

// Calling the Error Display in Javascript
const errorDisplay = document.querySelector('.js-error');

// Calling both the Question and Answer display
const questionDisplay = document.querySelector('.js-question-display');
const answerDisplay = document.querySelector('.js-answer-display');

// Calling the API Url
const apiUrl = "https://official-joke-api.appspot.com/random_joke";

// Function to remove the Error
function removeError() {
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 2000);
}
 
// function that runs all the code
async function generateJokes() {
    try {
        const request = await fetch(apiUrl);
        let response = await request.json();
        questionDisplay.innerText = response.setup;
        answerDisplay.innerText = response.punchline;
    } catch (error) {
        errorDisplay.style.display = 'block';
        removeError();
    };
};

// The button that makes the entire code work
clickMeButton.addEventListener('click', () => {
    generateJokes();
});