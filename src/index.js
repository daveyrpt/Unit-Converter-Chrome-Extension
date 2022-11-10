const inputValue = document.getElementById('input-value');
const convertBtn = document.getElementById('convert-btn');
const lengthText = document.getElementById('length-text');
const volumeText = document.getElementById('volume-text');
const massText   = document.getElementById('mass-text');

convertBtn.addEventListener('click', function() {
    let input   = inputValue.value;
    let feet    = (input * 3.281).toFixed(3);
    let meter   = (input / 3.281).toFixed(3);
    let gallons = (input * 0.264).toFixed(3);
    let litters = (input / 0.264).toFixed(3);
    let pounds  = (input * 2.204).toFixed(3);
    let kg      = (input / 2.204).toFixed(3);

    console.log(feet);
    console.log(meter);

    lengthText.textContent = `${input} meters = ${feet} feet | ${input} feets = 6.096 ${meter}`;
    volumeText.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${litters} liters`;
    massText.textContent   = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kg} kilos`;

})

// dark mode part
const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked
  ? html.classList.add("dark")
  : html.classList.remove("dark");
}

//calling the function directly

toggleDarkMode();
checkbox.addEventListener("click",toggleDarkMode);