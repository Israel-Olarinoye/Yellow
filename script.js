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

function getDaysLeft() {
    return getTimeLeft().days;
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
        h1.textContent = 'Countdown to October 4th, 2025';
    }
    updatePoetryLink();
}

function updatePoetryLink() {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 1); // Yesterday as day 0
    const now = new Date();
    const dayDiff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const dayNumber = dayDiff % 7 === 0 ? 7 : dayDiff % 7;
    const link = document.getElementById('poetry-link');
    if (getTimeLeft().days === 0) {
        link.href = 'final-poetry.html';
    } else {
        link.href = `poetry${dayNumber}.html`;
    }
}

// Update countdown on page load
updateCountdown();

// Update every second
setInterval(() => {
    updateCountdown();
}, 1000);
