const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function checkValidNumber(input) {
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
  resultsDiv.innerHTML = `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`;
}

checkBtn.addEventListener('click', () => {
  const input = userInput.value;

  if (input.length === 0) {
    alert('Please provide a phone number');
  } else {
    checkValidNumber(input);
    userInput.value = '';
  }
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
});
