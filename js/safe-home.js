const fireCheckbox = document.querySelector('.fire');
const voltageInput = document.querySelector('.votage');
const shortCircuitCheckbox = document.querySelector('.short-circuit');
const signalizationIndicator = document.querySelector('.signalization-indicator');
const signalizationInput = document.querySelector('.move');
const airAlarm = document.querySelector('.air-alarm');
const alarmSound = [new Audio('../sound/alarm.mp3'), new Audio('../sound/signalization.mp3'), new Audio('../sound/fire.mp3')]

function changeIndicatorColor(animation) {
    signalizationIndicator.classList.add(animation)
}

function playAlarmSound(sound) {
  sound.play();
}

function stopAlarmSound(sound) {
  sound.pause();
  sound.currentTime = 0;
}

fireCheckbox.addEventListener('change', function () {
    if (fireCheckbox.checked) {
        changeIndicatorColor('fire-color');
        playAlarmSound(alarmSound[2])
    } else {
        signalizationIndicator.classList.remove('fire-color');
        stopAlarmSound(alarmSound[2]);
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
    playAlarmSound(alarmSound[1]);
  });

  signalizationInput.addEventListener('mouseout', function() {
    signalizationIndicator.classList.remove('move-color');
    stopAlarmSound(alarmSound[1]);
  });

  airAlarm.addEventListener('change', function () {
    
    if (airAlarm.checked) {
        changeIndicatorColor('alarm-color');
        playAlarmSound(alarmSound[0])
    } else {
        signalizationIndicator.classList.remove('alarm-color');
        stopAlarmSound(alarmSound[0]);
    }
});