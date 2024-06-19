 // Fungsi untuk menampilkan pesan yang tersimpan di local storage
 function displayMessages() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; // Bersihkan kontainer sebelum menambahkan pesan baru
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(message => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
    });
}

document.getElementById('ucapanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    const wishInput = document.getElementById('wish');
    const newWish = wishInput.value.trim();
    if (newWish !== '') {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(newWish);
        localStorage.setItem('messages', JSON.stringify(messages));
        wishInput.value = ''; // Kosongkan input setelah disimpan
        addMessageToDOM(newWish); // Tambahkan pesan baru ke DOM
    }
});

// Fungsi untuk menambahkan pesan baru ke DOM
function addMessageToDOM(message) {
    const messageContainer = document.getElementById('messageContainer');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
}

// Tampilkan pesan yang sudah ada saat halaman dimuat
window.onload = displayMessages;

const audioPlayer = document.getElementById('audioPlayer');
const audioButton = document.getElementById('audioButton');

audioButton.addEventListener('click', function() {
    const icon = audioButton.querySelector('i');
    if (audioPlayer.paused) {
        audioPlayer.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

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