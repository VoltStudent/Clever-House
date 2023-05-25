const fireCheckbox = document.querySelector('.fire');
const voltageInput = document.querySelector('.votage');
const shortCircuitCheckbox = document.querySelector('.short-circuit');
const signalizationIndicator = document.querySelector('.signalization-indicator');
const signalizationInput = document.querySelector('.move');


function changeIndicatorColor(animation) {
    signalizationIndicator.classList.add(animation)
}

fireCheckbox.addEventListener('change', function () {
    if (fireCheckbox.checked) {
        changeIndicatorColor('fire-color');
    } else {
        signalizationIndicator.classList.remove('fire-color');
    }
});

voltageInput.addEventListener('input', function() {
    const voltage = parseInt(voltageInput.value);
    if (voltage < 180 || voltage > 250) {
      changeIndicatorColor('votage-color');
    } else {
        signalizationIndicator.classList.remove('votage-color');
    }
  });

  shortCircuitCheckbox.addEventListener('change', function() {
    if (shortCircuitCheckbox.checked) {
      changeIndicatorColor('short-circuit-color');
    } else {
        signalizationIndicator.classList.remove('short-circuit-color');
    }
  });

  signalizationInput.addEventListener('mouseover', function() {
    changeIndicatorColor('move-color');
  });

  signalizationInput.addEventListener('mouseout', function() {
    signalizationIndicator.classList.remove('move-color');
  });