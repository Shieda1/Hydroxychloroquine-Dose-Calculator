// https://www.omnicalculator.com/health/hydroxychloroquine-dose
// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const doseperkilogramRadio = document.getElementById('doseperkilogramRadio');
const weightRadio = document.getElementById('weightRadio');
const customdailydoseRadio = document.getElementById('customdailydoseRadio');

let doseperkilogram;
let weight = v1;
let customdailydose = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

doseperkilogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Custom daily dose';
  weight = v1;
  customdailydose = v2;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Dose per kilogram';
  variable2.textContent = 'Custom daily dose';
  doseperkilogram = v1;
  customdailydose = v2;
  result.textContent = '';
});

customdailydoseRadio.addEventListener('click', function() {
  variable1.textContent = 'Dose per kilogram';
  variable2.textContent = 'Weight';
  doseperkilogram = v1;
  weight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(doseperkilogramRadio.checked)
    result.textContent = `Dose per kilogram = ${computedoseperkilogram().toFixed(2)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;

  else if(customdailydoseRadio.checked)
    result.textContent = `Custom daily dose = ${computecustomdailydose().toFixed(2)}`;
})

// calculation

function computedoseperkilogram() {
  return Number(customdailydose.value) / Number(weight.value);
}

function computeweight() {
  return Number(customdailydose.value) / Number(doseperkilogram.value);
}

function computecustomdailydose() {
  return Number(doseperkilogram.value) * Number(weight.value);
}