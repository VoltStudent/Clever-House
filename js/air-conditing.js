class AirConditingCard extends Card {
    constructor(parent) {
        super(parent);
        this._elem.className = 'rooms__device airconditing';
        this. checkedDevice();
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
        const airConditingCard = document.createElement('div');
        airConditingCard.className = 'fir-conditing__card';
        this._elem.appendChild(airConditingCard);
    }

    addTitle() {
        const airConditingCardTitle = document.createElement('h3');
        airConditingCardTitle.className = 'rooms__device-title';
        airConditingCardTitle.textContent = 'Air-Conditing';
        this._elem.appendChild(airConditingCardTitle);
    }

    addProgress() {

        const button = `<path  id="button-icon" fill-rule="evenodd" clip-rule="evenodd" 
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 5C12.5523 5 13 5.44772 13 6V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55229 11 9V6C11 5.44772 11.4477
      5 12 5ZM15.5355 7.05025C15.9261 6.65973 16.5592 6.65973 16.9497 7.05025C17.9287 8.02922 18.5954 9.2765 18.8655 10.6344C19.1356 11.9922 18.997 13.3997 18.4672 14.6788C17.9373 15.9579 17.0401 17.0511 15.889 17.8203C14.7378 18.5895
      13.3845 19 12 19C10.6155 19 9.26215 18.5895 8.11101 17.8203C6.95986 17.0511 6.06265 15.9579 5.53284 14.6788C5.00303 13.3997 4.8644 11.9922 5.1345 10.6344C5.4046 9.2765 6.07128 8.02922 7.05025 7.05025C7.44077 6.65973 8.07394 
      6.65973 8.46446 7.05025C8.85499 7.44078 8.85499 8.07394 8.46446 8.46447C7.7652 9.16373 7.289 10.0546 7.09607 11.0245C6.90314 11.9945 7.00216 12.9998 7.3806 13.9134C7.75904 14.827 8.3999 15.6079 9.22215 16.1573C10.0444 16.7068 
      11.0111 17 12 17C12.9889 17 13.9556 16.7068 14.7778 16.1573C15.6001 15.6079 16.241 14.827 16.6194 13.9134C16.9978 12.9998 17.0968 11.9945 16.9039 11.0245C16.711 10.0546 16.2348 9.16373 15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025Z" />`;

        const airConditingBox = document.createElement('div');
        airConditingBox.className = 'air-conditing__state';

        const svgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgCircle.setAttribute('viewBox', '0 0 100 100');

        const lightCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        lightCircle.setAttribute('class', 'light__circle');
        lightCircle.setAttribute('cx', '50%');
        lightCircle.setAttribute('cy', '50%');
        lightCircle.setAttribute('r', '40');

        const fan = document.createElement('div');
        fan.setAttribute('class', 'fan');

        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'button-container');

        const lampOnContainer = document.createElement('div');
        lampOnContainer.setAttribute('class', 'air-conditing__on-container');
        lampOnContainer.innerHTML = '<p>Conditing On/Off</p>'

        const heatCol = document.createElement('div');
        heatCol.innerHTML = '<p>Option Heat/Cold</p>'
        heatCol.setAttribute('class', 'heat-cold-container cold')


        const onButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        onButton.setAttribute('width', '70px');
        onButton.setAttribute('height', '70px');
        onButton.setAttribute('class', 'on-conditing');
        onButton.setAttribute('viewBox', '0 0 24 24');
        onButton.innerHTML = button;


        const heatColdBTN = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        heatColdBTN.setAttribute('width', '70px');
        heatColdBTN.setAttribute('height', '70px');
        heatColdBTN.setAttribute('class', 'on-heat');
        heatColdBTN.setAttribute('viewBox', '0 0 24 24');
        heatColdBTN.innerHTML = button;

        const coldHeatInput = document.createElement('input');
        coldHeatInput.type = 'range';

        const temperatureLabel = document.createElement('label');
        temperatureLabel.textContent = 'Temperature Range: ';
        temperatureLabel.appendChild(coldHeatInput);

        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        progressContainer.appendChild(temperatureLabel);

        svgCircle.appendChild(lightCircle);

        lampOnContainer.appendChild(onButton);
        heatCol.appendChild(heatColdBTN);

        buttonContainer.appendChild(lampOnContainer);
        buttonContainer.appendChild(heatCol);

        airConditingBox.appendChild(svgCircle);
        airConditingBox.appendChild(buttonContainer);
        airConditingBox.appendChild(progressContainer);
        airConditingBox.appendChild(fan);

        this._elem.appendChild(airConditingBox);
    }

    coldOn() {
        const conditingButtons = this._elem.querySelectorAll('.on-conditing');
        const conditingStateElements = this._elem.querySelectorAll('.air-conditing__state');
        const fanElements = this._elem.querySelectorAll('.fan');

        for (let i = 0; i < conditingButtons.length; ++i) {
            const conditingButton = conditingButtons[i];
            const conditingState = conditingStateElements[i];
            const fan = fanElements[i];
            const fanGif = document.createElement('img');
            fanGif.setAttribute('src', 'images/fann-gif.gif');

            conditingButton.addEventListener('click', () => {
                if (conditingState.classList.contains('fan-1')) {
                    conditingState.classList.remove('fan-1');
                    fan.style.opacity = '0'
                    conditingButton.setAttribute('fill', '#3cff00');
                } else {
                    conditingState.classList.add('fan-1');
                    conditingButton.setAttribute('fill', '#c30101');
                    fan.style.opacity = '1'
                    fan.appendChild(fanGif);
                }
            });
        }
    }

    coldHeat() {
        const heatColdContainer = document.querySelector('.heat-cold-container')
        const coldHeatBtns = document.querySelectorAll('.on-heat')
        const coldHeatInput = this._elem.querySelector('input[type="range"]');
        const coldColors = ['radial-gradient(#0b4eb4 20%, #0062ff35) ',
            'radial-gradient(#0b4eb4 25%, #0062ff35)',
            'radial-gradient(#0b4eb4 40%, #0062ff35)',
            'radial-gradient(#0b4eb4 49%, #0062ff35)',
            'radial-gradient(#0b4eb4 60%, #0062ff35)',];
        const warmColors = ['radial-gradient(#fa0000 20%, #ff000035) ',
            'radial-gradient(#fa0000 25%, #ff000035)',
            'radial-gradient(#fa0000 40%, #ff000035)',
            'radial-gradient(#fa0000 49%, #ff000035)',
            'radial-gradient(#fa0000 60%, #ff000035)'];

        for (let i = 0; i < coldHeatBtns.length; ++i) {
            const coldHeatBtn = coldHeatBtns[i];

            coldHeatBtn.addEventListener('click', () => {
                coldHeatInput.min = 1;
                coldHeatInput.max = coldColors.length;
                coldHeatInput.value = 1;
                if (heatColdContainer.classList.contains('heat')) {
                    heatColdContainer.classList.remove('heat');
                    heatColdContainer.classList.add('cold');
                    coldHeatBtn.setAttribute('fill', '#0b4eb4');
                    coldHeatInput.addEventListener('input', (event) => {
                        const coldHeatLevel = +(event.target.value) - 1;
                        const lightCircle = this._elem.querySelector('.fan-1');
                        lightCircle.style.background = coldColors[coldHeatLevel];
                    });
                } else if (heatColdContainer.classList.contains('cold')) {
                    heatColdContainer.classList.remove('cold')
                    heatColdContainer.classList.add('heat');
                    coldHeatBtn.setAttribute('fill', '#fa0000');
                    coldHeatInput.addEventListener('input', (event) => {
                        const coldHeatLevel = +(event.target.value) - 1;
                        const lightCircle = this._elem.querySelector('.fan-1');
                        lightCircle.style.background = warmColors[coldHeatLevel];
                    });
                }
            });
        }
    }





    static airConditingCard(parent) {
        const card = new AirConditingCard(parent);
        card.addCard();
        card.addTitle();
        card.addProgress();
        card.coldOn();
        card.coldHeat()
        return card;
    }
}




class AddAirConditing {

    constructor(roomsDevices) {
        this.roomsDevices = roomsDevices;
        this.addBtn = document.querySelector('.add-air-conditing');
    }

    addCard() {
        this.addBtn.addEventListener('click', () => {
            let card = AirConditingCard.airConditingCard(roomsDevices);
            roomsDevices.appendChild(card._elem);
            this.saveCard(card)
        });
    }

    saveCard(card) {
        const savedairConditingCards = JSON.parse(localStorage.getItem('savedairConditingCards')) || [];
        savedairConditingCards.push(card._elem.innerHTML);
        localStorage.setItem('savedairConditingCards', JSON.stringify(savedairConditingCards));
    }

    static addLight(roomsDevices) {
        const cardAdder = new AddAirConditing(roomsDevices);
        cardAdder.addCard();
        return cardAdder;
    }
}

class DeleteAirConditing {

    constructor(roomsDevices) {
        this.roomsDevices = roomsDevices;
        this.deleteItem = document.querySelector('.delete-air-conditing');

        this.deleteItem.addEventListener('click', () => {
            const checkedDevice = this.roomsDevices.querySelector('.rooms__device.checked');
            if (checkedDevice) {
                this.roomsDevices.removeChild(checkedDevice);
                this.deleteSavedConditing() ;
            }
            
        });

    }

    deleteSavedConditing() {
        const savedairConditingCards = JSON.parse(localStorage.getItem('savedairConditingCards')) || [];
        savedairConditingCards.pop();
        localStorage.setItem('savedairConditingCards', JSON.stringify(savedairConditingCards));
    }

    static deleteLight(roomsDevices) {
        const cardDelete = new DeleteAirConditing(roomsDevices);
        return cardDelete;
    }
}
const addAirConditing = AddAirConditing.addLight(roomsDevices);
const deleteAirConditing = DeleteAirConditing.deleteLight(roomsDevices);

window.addEventListener('load', () => {
    const savedairConditingCards = JSON.parse(localStorage.getItem('savedairConditingCards'));
    const lightState = JSON.parse(localStorage.getItem('lightState'));
    if (savedairConditingCards) {
        savedairConditingCards.forEach((cardHTML) => {
            let card = AirConditingCard.airConditingCard(roomsDevices);
            roomsDevices.appendChild(card._elem);
            card._elem.innerHTML = cardHTML;
            card.coldOn();
            card.coldHeat();
        });
    }
});