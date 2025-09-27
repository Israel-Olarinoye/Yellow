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
        h1.textContent = "Countdown to Oprah's Birthday!";
    }
    updatePoetryLink();
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function updatePoetryLink() {
    const startDate = new Date('2025-09-27T00:00:00');
    const now = new Date();
    const daysSinceStart = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const link = document.getElementById('poetry-link');
    if (daysSinceStart < 0) {
        // Before start, perhaps no link or default
        link.href = 'poetry1.html';
    } else if (daysSinceStart < 7) {
        link.href = 'poetry' + (daysSinceStart + 1) + '.html';
    } else if (daysSinceStart === 7) {
        link.href = 'final-poetry.html';
    } else {
        // After, perhaps cycle or final
        link.href = 'final-poetry.html';
    }
}

// Update countdown on page load
updateCountdown();

// Update every second
setInterval(() => {
    updateCountdown();
}, 1000);
