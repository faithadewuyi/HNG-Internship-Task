//Day of The Week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek;

//Current  Time
function updateTime() {
    const present = new Date();
    const hours = String(present.getHours()).padStart(2, '0');
    const minutes = String(present.getMinutes()).padStart(2, '0');
    const seconds = String(present.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours; // Get hour
    document.getElementById('minutes').textContent = minutes; // Get minutes
    document.getElementById('seconds').textContent = seconds; // Get seconds
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initial update
updateTime();