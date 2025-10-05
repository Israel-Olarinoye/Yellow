// Target date: October 4th, 2025
const targetDate = new Date('2025-10-04T00:00:00');

function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const timeLeft = getTimeLeft();
    document.getElementById('days').textContent = timeLeft.days;
    document.getElementById('hours').textContent = timeLeft.hours;
    document.getElementById('minutes').textContent = timeLeft.minutes;
    document.getElementById('seconds').textContent = timeLeft.seconds;
    const h1 = document.querySelector('h1');
    if (timeLeft.days === 0) {
        h1.textContent = 'Happy Birthday My Love';
    } else {
        h1.textContent = "Countdown to Oprah's Birthday!";
    }
}

// Update countdown on page load
updateCountdown();

// Update every second
setInterval(() => {
    updateCountdown();
}, 1000);
