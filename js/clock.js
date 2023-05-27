function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    
    clockElement.textContent = formattedTime;
  }
  
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
  
  setInterval(updateClock, 1000);