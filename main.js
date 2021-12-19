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

//✨buttons✨
var receiveButton = document.querySelector('.button');
var affirmationButton = document.querySelector('#affirmation-radio');
var mantraButton = document.querySelector('#mantra-radio');
var clearButton = document.querySelector('#clearMsgButton');

//✨variables/querySelectors✨
var svgImage = document.querySelector('img');
var message = document.querySelector('.message');
var errorMessage = document.querySelector('.error-message');

//✨event listeners✨
receiveButton.addEventListener('click', displayAffirmationOrMantra);
clearButton.addEventListener('click', clearMessage);

//✨functions & event handlers✨
function getRandomIndexIn(array) {
    return Math.floor(Math.random() * array.length);
};

function displayAffirmationOrMantra() {
  if (affirmationButton.checked === true) {
    message.innerText = affirmations[getRandomIndexIn(affirmations)];
    hideImage();
    showMessage();
    hideErrorMessage();
    showClearButton();

  } else if (mantraButton.checked === true) {
    message.innerText = mantras[getRandomIndexIn(mantras)];
    hideImage();
    showMessage();
    hideErrorMessage();
    showClearButton();

  } else{
    errorMessage.innerText = "⬆️ Please select either 'affirmation' or 'mantra' above. ⬆️ "
    showErrorMessage();
  }
}

function clearMessage() {
    showImage();
    hideClearButton();
    hideErrorMessage();
    hideMessage();
  }

//✨functions (continued) - functions to be used to clarify 3 previous functions
function showImage() {
    svgImage.classList.remove('hidden');
}

  function hideImage() {
    svgImage.classList.add('hidden');
  }

  function showMessage() {
    message.classList.remove('hidden');
  }

  function hideMessage() {
    message.classList.add('hidden');
  }

  function hideErrorMessage() {
    errorMessage.classList.add('hidden');
  }

  function showErrorMessage() {
    errorMessage.classList.remove('hidden');
  }

    function showClearButton() {
    clearButton.classList.remove('hidden');
  }

  function hideClearButton() {
    clearButton.classList.add('hidden');
  }
