//Day of The Week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek;

//Current  Time
const currentUTCTime = new Date().getTime();
        
 document.getElementById('utcTime').textContent = `Current UTC Time in Milliseconds: ${currentUTCTime}`;