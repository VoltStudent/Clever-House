class Card {

  constructor(parent) {
    this.parent = parent;
    this._elem = document.createElement('div');
    this.parent.appendChild(this._elem);
  }

}


class LightCard extends Card {
  constructor(parent) {
    super(parent);
    this._elem.className = 'rooms__device light';
    this.checkedDevice()
  }

  checkedDevice() {
    this._elem.addEventListener('click', () => {
      const checkedItems = this.parent.querySelectorAll('.rooms__device.checked');
      for (let i = 0; i < checkedItems.length; i++) {
          const checkedItem = checkedItems[i];
          checkedItem.classList.remove('checked');
        }
        
        if (!this._elem.classList.contains('checked')) {
            this._elem.classList.add('checked');
            
        }
    });
}

  addCard() {
    const lightCard = document.createElement('div');
    lightCard.className = 'light__card';
    this._elem.appendChild(lightCard);
  }

  addTitle() {
    const lightCardTitle = document.createElement('h3');
    lightCardTitle.className = 'rooms__device-title';
    lightCardTitle.textContent = 'Lamp';
    this._elem.appendChild(lightCardTitle);
  }

  addProgress() {

    const button = `<path  id="button-icon" fill-rule="evenodd" clip-rule="evenodd" 
    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 5C12.5523 5 13 5.44772 13 6V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55229 11 9V6C11 5.44772 11.4477
    5 12 5ZM15.5355 7.05025C15.9261 6.65973 16.5592 6.65973 16.9497 7.05025C17.9287 8.02922 18.5954 9.2765 18.8655 10.6344C19.1356 11.9922 18.997 13.3997 18.4672 14.6788C17.9373 15.9579 17.0401 17.0511 15.889 17.8203C14.7378 18.5895
    13.3845 19 12 19C10.6155 19 9.26215 18.5895 8.11101 17.8203C6.95986 17.0511 6.06265 15.9579 5.53284 14.6788C5.00303 13.3997 4.8644 11.9922 5.1345 10.6344C5.4046 9.2765 6.07128 8.02922 7.05025 7.05025C7.44077 6.65973 8.07394 
    6.65973 8.46446 7.05025C8.85499 7.44078 8.85499 8.07394 8.46446 8.46447C7.7652 9.16373 7.289 10.0546 7.09607 11.0245C6.90314 11.9945 7.00216 12.9998 7.3806 13.9134C7.75904 14.827 8.3999 15.6079 9.22215 16.1573C10.0444 16.7068 
    11.0111 17 12 17C12.9889 17 13.9556 16.7068 14.7778 16.1573C15.6001 15.6079 16.241 14.827 16.6194 13.9134C16.9978 12.9998 17.0968 11.9945 16.9039 11.0245C16.711 10.0546 16.2348 9.16373 15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025Z" />`;

    const lightBox = document.createElement('div');
    lightBox.className = 'light__state';

    const svgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCircle.setAttribute('viewBox', '0 0 100 100');

    const backLight = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    backLight.setAttribute('class', 'light__backlight');
    backLight.setAttribute('cx', '50%');
    backLight.setAttribute('cy', '50%');
    backLight.setAttribute('r', '40');

    const lightCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    lightCircle.setAttribute('class', 'light__circle');
    lightCircle.setAttribute('cx', '50%');
    lightCircle.setAttribute('cy', '50%');
    lightCircle.setAttribute('r', '32');

    const lamp = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    lamp.setAttribute('width', '70px');
    lamp.setAttribute('height', '70px');
    lamp.setAttribute('class', 'lamp');
    lamp.innerHTML = `<use xlink:href="images/lamp.svg#lamp-element1"></use>
    <use xlink:href="images/lamp.svg#lamp-element2"></use>
    <use xlink:href="images/lamp.svg#lamp-element3"></use>
    <use xlink:href="images/lamp.svg#lamp-element4"></use>
    <use xlink:href="images/lamp.svg#lamp-element5"></use>`

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'button-container');

    const lampOnContainer = document.createElement('div');
    lampOnContainer.setAttribute('class', 'lamp__on-container');
    lampOnContainer.innerHTML = '<p>Light On/Off</p>'
    const backLightOn = document.createElement('div');
    backLightOn.innerHTML = '<p>Backlight On/Off</p>'
    backLightOn.setAttribute('class', 'backlight-container')


    const onButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    onButton.setAttribute('width', '70px');
    onButton.setAttribute('height', '70px');
    onButton.setAttribute('class', 'on-light');
    onButton.setAttribute('viewBox', '0 0 24 24');
    onButton.innerHTML = button;


    const onBackLightBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    onBackLightBtn.setAttribute('width', '70px');
    onBackLightBtn.setAttribute('height', '70px');
    onBackLightBtn.setAttribute('class', 'on-backlight');
    onBackLightBtn.setAttribute('viewBox', '0 0 24 24');
    onBackLightBtn.innerHTML = button;

    const brightnessInput = document.createElement('input');
    brightnessInput.type = 'range';

    const brightnessLabel = document.createElement('label');
    brightnessLabel.textContent = 'Brightness: ';
    brightnessLabel.appendChild(brightnessInput);

    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.appendChild(brightnessLabel);

    svgCircle.appendChild(lightCircle);
    svgCircle.appendChild(backLight);

    lampOnContainer.appendChild(onButton);
    backLightOn.appendChild(onBackLightBtn);

    buttonContainer.appendChild(lampOnContainer);
    buttonContainer.appendChild(backLightOn);

    lightBox.appendChild(svgCircle);
    lightBox.appendChild(lamp);
    lightBox.appendChild(buttonContainer);
    lightBox.appendChild(progressContainer);

    this._elem.appendChild(lightBox);
  }

  lightOn() {
    const lightButtons = this._elem.querySelectorAll('.on-light');
    const lightStateElements = this._elem.querySelectorAll('.light__state');
    const lampElements = this._elem.querySelectorAll('.lamp');
    const brightnessInput = this._elem.querySelector('input[type="range"]');
    const brightnessColors = ['radial-gradient(circle, rgba(247, 236, 0, 1) 0%, rgba(238, 244, 7, 0.49343487394957986) 20%, rgba(7, 8, 0, 1) 100%)',
                              'radial-gradient(circle, rgba(247, 236, 0, 1) 0%, rgba(238, 244, 7, 0.49343487394957986) 25%, rgba(7, 8, 0, 1) 100%)', 
                              'radial-gradient(circle, rgba(247, 236, 0, 1) 0%, rgba(238, 244, 7, 0.49343487394957986) 40%, rgba(7, 8, 0, 1) 100%)',
                              'radial-gradient(circle, rgba(247, 236, 0, 1) 0%, rgba(238, 244, 7, 0.49343487394957986) 49%, rgba(7, 8, 0, 1) 100%)',
                              'rgba(243, 251, 0, 0.5)',];

    for (let i = 0; i < lightButtons.length; ++i) {
      const lightOnButton = lightButtons[i];
      const lightState = lightStateElements[i];
      const lamp = lampElements[i];

      lightOnButton.addEventListener('click', () => {
        if (lightState.classList.contains('light-1')) {
          lightState.classList.remove('light-1');
          lightOnButton.setAttribute('fill', '#3cff00');
          lamp.setAttribute('fill', '	#e9d700');
        } else {
          lightState.classList.add('light-1');
          lightOnButton.setAttribute('fill', '#c30101');
          lamp.setAttribute('fill', '#000');
          brightnessInput.min = 1;
          brightnessInput.max = brightnessColors.length;
          brightnessInput.value = 1;
          brightnessInput.addEventListener('input', (event) => {
            const brightnessLevel = +(event.target.value) - 1;
            const lightCircle = this._elem.querySelector('.light-1');
            lightCircle.style.background = brightnessColors[brightnessLevel];
          });
        }
        if (!lightState.classList.contains('light-1')) {
          lightState.style.background = 'radial-gradient(#000 10%, #ffff0035)';
        }
        else {
          lightState.style.background = 'radial-gradient(circle, rgba(247, 236, 0, 1) 0%, rgba(238, 244, 7, 0.49343487394957986) 20%, rgba(7, 8, 0, 1) 100%)';
        }
      });
    }
  }

  backlightOn() {
    const backLightsBtns = this._elem.querySelectorAll('.on-backlight');
    const backLights = this._elem.querySelectorAll('.light__backlight');

    for (let i = 0; i < backLights.length; ++i) {
      const backLightsBtn = backLightsBtns[i];
      const backLight = backLights[i];

      backLightsBtn.addEventListener('click', () => {
        if (backLight.classList.contains('backlight-switch')) {
          backLight.classList.remove('backlight-switch');
          backLightsBtn.setAttribute('fill', '#c30101');
        } else {
          backLight.classList.add('backlight-switch');
          backLightsBtn.setAttribute('fill', '#3cff00');
        }
      });
    }
  }

  static lightCard(parent) {
    const card = new LightCard(parent);
    card.addCard();
    card.addTitle();
    card.addProgress();
    card.lightOn();
    card.backlightOn()
    return card;
  }
}


const roomsDevices = document.querySelector('.rooms__devices');

class AddLight {

  constructor(roomsDevices) {
    this.roomsDevices = roomsDevices;
    this.addBtn = document.querySelector('.add-light');
  }

  addCard() {
    this.addBtn.addEventListener('click', () => {
      let card = LightCard.lightCard(roomsDevices);
      roomsDevices.appendChild(card._elem);
      this.saveCard(card)
    });
  }

  saveCard(card) {
    const savedLightCards = JSON.parse(localStorage.getItem('savedLightCards')) || [];
    savedLightCards.push(card._elem.innerHTML);
    localStorage.setItem('savedLightCards', JSON.stringify(savedLightCards));
  }

  static addLight(roomsDevices) {
    const cardAdder = new AddLight(roomsDevices);
    cardAdder.addCard();
    return cardAdder;
  }
}

class DeleteLight {

  constructor(roomsDevices) {
    this.roomsDevices = roomsDevices;
    this.deleteItem = document.querySelector('.delete-light');

    this.deleteItem.addEventListener('click', () => {
      const checkedDevice = this.roomsDevices.querySelector('.rooms__device.checked');
            if (checkedDevice) {
                this.roomsDevices.removeChild(checkedDevice);
                this.deleteSavedLight() ;
            }
    });

  }

  deleteSavedLight() {
    const savedLightCards = JSON.parse(localStorage.getItem('savedLightCards')) || [];
    savedLightCards.pop();
    localStorage.setItem('savedLightCards', JSON.stringify(savedLightCards));
  }

  static deleteLight(roomsDevices) {
    const cardDelete = new DeleteLight(roomsDevices);
    return cardDelete;
  }
}
const addLight = AddLight.addLight(roomsDevices);
const deleteLight = DeleteLight.deleteLight(roomsDevices);

window.addEventListener('load', () => {
  const savedLightCards = JSON.parse(localStorage.getItem('savedLightCards'));
  const lightState = JSON.parse(localStorage.getItem('lightState'));
  if (savedLightCards) {
    savedLightCards.forEach((cardHTML) => {
      let card = LightCard.lightCard(roomsDevices);
      roomsDevices.appendChild(card._elem);
      card._elem.innerHTML = cardHTML;
      card.lightOn();
      card.backlightOn();
    });
  }
});

