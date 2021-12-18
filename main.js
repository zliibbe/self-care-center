var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
];

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you, and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather.",
];

//✨global variables✨

//✨buttons✨
var button = document.querySelector(".button");
var affirmationButton = document.getElementById("affirmation-radio");
var mantraButton = document.getElementById("mantra-radio");

//✨variables/querySelectors✨

var svgImage = document.querySelector('svg');
var quoteDisplay = document.querySelector(".icon-text-display");
var message = document.querySelector('.message');
var errorMessage = document.querySelector('.error-message');
var clearMessage = document.querySelector('.clear-message');

//✨event listeners✨
button.addEventListener('click', radioButtonSelection);


//✨functions & event handlers✨
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function radioButtonSelection() {
  if (affirmationButton.checked === true) {
    console.log("The if affirmation is working.")
    message.innerText = affirmations[getRandomIndex(affirmations)];
    svgImage.classList.add('hidden')
    message.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    

  } else if (mantraButton.checked === true) {
    console.log("The if mantra is working.")
    message.innerText = mantras[getRandomIndex(mantras)];
    svgImage.classList.add('hidden')
    message.classList.remove('hidden');
    errorMessage.classList.add('hidden');
  } else{
    errorMessage.innerText = "Please select either affirmation or mantra."
    errorMessage.classList.remove('hidden');
    }

  }
