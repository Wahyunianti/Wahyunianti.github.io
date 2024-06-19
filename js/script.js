
const targetDate = new Date('2024-06-27T00:00:00').getTime();

// Update the count down every 1 second
const timer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the target date
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with corresponding IDs
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    // If the countdown is finished, clearInterval
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
}, 1000); // Update every 1 second (1000 milliseconds)
