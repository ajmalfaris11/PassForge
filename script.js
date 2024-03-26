
const rangeInput = document.getElementById('customRange');

function updateBackground() {
    const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min);
    console.log(rangeInput.min);
    rangeInput.style.background = `linear-gradient(to right, #34F30F 0%, #3498db ${value * 100}%, #1E1E1E 0% ${value * 100}%, gray 100%)`;
}

updateBackground();

rangeInput.addEventListener('input', updateBackground);

const rangeIn = document.getElementById('customRange');
const valueDisplay = document.getElementById('valueDisplay');

rangeInput.addEventListener('input', function() {
    valueDisplay.textContent = rangeIn.value;
});

// =======================================================================================================  

let lowerVal = false ;
let uppeVal = false;
let digiVal = false;
let specialVal = false ;

let lowercaseCbl = document.getElementById('lowercaseCb');
let uppercaseCb = document.getElementById('uppercaseCb');
let digitsCb = document.getElementById('digitsCb');
let specialsCb = document.getElementById('specialsCb');

lowercaseCbl.addEventListener('click',function(){
    lowerVal = checking(lowerVal,lowercaseCbl)
});
uppercaseCb.addEventListener('click',function(){
    uppeVal = checking(uppeVal,uppercaseCb)
});
digitsCb.addEventListener('click',function(){
    digiVal = checking(digiVal,digitsCb)
});

specialsCb.addEventListener('click',function(){
    specialVal = checking(specialVal,specialsCb)
});

checking(lowerVal,lowercaseCbl);

function checking(val,element){
   
    let va ;
    va = val ? false : true;
    
    if(va == true){
        element.style.background = "linear-gradient(to right, #34F30F, #0073ff)";
    }
    else{
        element.style.background ='';
    }

    generate();

    return va ;

}


function generate() {
    let dictionary = '';
    if (lowerVal==true) {
      dictionary += 'qwertyuiopasdfghjklzxcvbnm';
     }

    if (uppeVal==true) {
      dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    
    if (digiVal==true) {
      dictionary += '1234567890';
    }
    if (specialVal==true) {
      dictionary += '!@#$%^&*()_+-={}[];<>:';
    }

    const length = document.querySelector('input[type="range"]').value;
  
    if (length < 1 || dictionary.length === 0) {
      return;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * dictionary.length);
      password += dictionary[pos];
    }
  
    document.querySelector('input[type="text"]').value = password;
  }
  
  [...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
    elem.addEventListener('click', generate);
  });
  
  document.querySelector('input[type="range"]').addEventListener('input', e => {
    document.querySelector('div.range span').innerHTML = e.target.value;
    generate();
  });
  
  document.querySelector('div.password button').addEventListener('click', () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
      document.querySelector('div.password button').innerHTML = 'copied!';
      setTimeout(() => {
        document.querySelector('div.password button').innerHTML = 'copy';
      }, 1000);
    })
  });
  
  lowerVal = checking(lowerVal,lowercaseCbl)
  generate();

  