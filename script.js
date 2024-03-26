
// *===== Range input Customization ===== Range input Customization ===== Range input Customization =====

const rangeInput = document.getElementById('customRange');

function updateBackground() {
    const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min);
    const percentage = value * 100;
    rangeInput.style.background = `linear-gradient(to right, #34F30F 0%, #3498db ${percentage}%, #1E1E1E ${percentage}%, gray 100%)`;
}

updateBackground();

rangeInput.addEventListener('input', updateBackground);

// short the code of dogument.getElementById() to variable
const [rangeIn, valueDisplay] = ['customRange', 'valueDisplay'].map( id => document.getElementById(id));

rangeInput.addEventListener('input', ()=> valueDisplay.textContent = rangeIn.value);

// =======================================================================================================  

//  assign false to all boolien data type variable 
let lowerVal = uppeVal = digiVal = specialVal = false;

let lowercaseCbl = document.getElementById('lowercaseCb'),
    uppercaseCb = document.getElementById('uppercaseCb'),
    digitsCb = document.getElementById('digitsCb'),
    specialsCb = document.getElementById('specialsCb');

lowercaseCbl.addEventListener('click', () => lowerVal = checking(lowerVal, lowercaseCbl));
uppercaseCb.addEventListener('click', () => uppeVal = checking(uppeVal, uppercaseCb));
digitsCb.addEventListener('click', () => digiVal = checking(digiVal, digitsCb));
specialsCb.addEventListener('click', () => specialVal = checking(specialVal, specialsCb));

// chekcing tru or false and return to element id
function checking(val, element) {
    element.style.background = val ? "" : "linear-gradient(to right, #34F30F, #0073ff)";
    return !val;
}

// short the code of assign to dictianary variable use with ternary operator
function generate() {
    let dictionary = (lowerVal ? 'qwertyuiopasdfghjklzxcvbnm' : '') +
                      (uppeVal ? 'QWERTYUIOPASDFGHJKLZXCVBNM' : '') +
                      (digiVal ? '1234567890' : '') +
                      (specialVal ? '!@#$%^&*()_+-={}[];<>:' : '');

    const length = document.querySelector('input[type="range"]').value;

    if(length < 1 || dictionary.length === 0)return;

    // array.from() method create new array with size of lenghth to Generate the password ,
    // the call back execute the code untle the times of lenght and join method join each randon code from the array to single string
    const password = Array.from({ length }, () => dictionary[Math.floor(Math.random() * dictionary.length)]).join('');

    document.querySelector('input[type="text"]').value = password;
  }
  
  [...document.querySelectorAll('button.generate')].forEach(elem => {
    elem.addEventListener('click', generate);
  });
  
  document.querySelector('input[type="range"]').addEventListener('input',  () => {
    generate();
  });
  
  document.querySelector('div.password button').addEventListener('click', () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
      document.querySelector('div.password button').innerHTML = '<i class="fa-solid fa-copy"></i>';
      setTimeout(() => {
        document.querySelector('div.password button').innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 1000);
    })
  });
  generate();
  lowerVal = checking(lowerVal,lowercaseCbl)


  