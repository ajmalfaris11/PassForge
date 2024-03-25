
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