class Room {
    
    constructor(parent, name) {
        this.parent = parent;
        this.name = name;
        this._elem = document.createElement('p');
        this._elem.className = 'rooms__name';
        this._addBtn = document.querySelector('.addnewroom');
        this.parent.insertBefore(this._elem, this._addBtn);
    }
   
    addRoomName() {
        const roomTitle = this._elem;
        roomTitle.textContent = this.name;
    }
    
    checkedRoom() {
        this._elem.addEventListener('click', () => {
          const checkedItems = this.parent.querySelectorAll('.rooms__name.checked');
          for (let i = 0; i < checkedItems.length; i++) {
              const checkedItem = checkedItems[i];
              checkedItem.classList.remove('checked');
            }
            
            if (!this._elem.classList.contains('checked')) {
                this._elem.classList.add('checked');
                
            }
        });
    }

    
    
    static createRoom(parent, name) {
        const room = new Room(parent, name);
        room.checkedRoom();
        return room;
    }
    
}


class AddRoom {
    
    constructor(roomsMenu, roomNames) {
        this.roomsMenu = roomsMenu;
        this.roomNames = roomNames;
        this.addBtn = document.querySelector('.addnewroom');
        this.checkedRoomName = this.roomNames.options[this.roomNames.selectedIndex].textContent;
    }

    sdf() {
        const sdf = document.querySelector('rooms__name.checked');
        
        console.log(sdf);
    }
    checkNewRoom() {
        this.roomNames.addEventListener('change', () => {
            this.checkedRoomName = this.roomNames.options[this.roomNames.selectedIndex].textContent;
        });

        this.addBtn.addEventListener('click', () => {
            const newRoom = Room.createRoom(this.roomsMenu, this.checkedRoomName);
            newRoom.addRoomName();
            this.saveRoom(newRoom);
        });
    }
    
    saveRoom(room) {
        const savedRooms = JSON.parse(localStorage.getItem('savedRoom')) || [];
        savedRooms.push(room._elem.innerHTML);
        localStorage.setItem('savedRoom', JSON.stringify(savedRooms));
    }

    static addRoom(roomsMenu, roomNames) {
        const roomAdder = new AddRoom(roomsMenu, roomNames);
        roomAdder.checkNewRoom();
        return roomAdder;
    }
}
class DeleteRom {

    constructor(roomsMenu, deleteBtn) {
        this.roomsMenu = roomsMenu;
        this.deleteBtn = deleteBtn;

        this.deleteBtn.addEventListener('click', () => {
            const checkedRoom = this.roomsMenu.querySelector('.rooms__name.checked');
            if (checkedRoom) {
                this.roomsMenu.removeChild(checkedRoom);
                this.deleteLastSavedRoom();
            }
        });

    }

    deleteLastSavedRoom() {
        const savedRooms = JSON.parse(localStorage.getItem('savedRoom')) || [];
        savedRooms.pop();
        localStorage.setItem('savedRoom', JSON.stringify(savedRooms));
    }

    static deleteRoom(roomsMenu, deleteBtn) {
        const roomDelete = new DeleteRom(roomsMenu, deleteBtn);
        return roomDelete;
    }
}



const roomsMenu = document.querySelector('.rooms__menu');
const roomNames = document.querySelector('#rooms-name');
const deleteBtn = document.querySelector('.deleteroom');


const roomAdder = AddRoom.addRoom(roomsMenu, roomNames);
const roomDeleter = DeleteRom.deleteRoom(roomsMenu, deleteBtn);
window.addEventListener('load', () => {
    const savedRooms = JSON.parse(localStorage.getItem('savedRoom'));
    
    if (savedRooms) {
        savedRooms.forEach(room => {
            const newRoom = Room.createRoom(roomsMenu, '');
            newRoom._elem.innerHTML = room;
            newRoom.checkedRoom();
        });
    }
});

