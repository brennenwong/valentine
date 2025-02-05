const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifContainer = document.querySelector('.gif_container');

    // Change text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get No button dimensions
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    // Get gif container position & dimensions
    const gifRect = gifContainer.getBoundingClientRect();

    let randomX, randomY;
    let isOverlapping;

    do {
        // Generate random position
        randomX = Math.random() * (viewportWidth - buttonWidth);
        randomY = Math.random() * (viewportHeight - buttonHeight);

        // Check if button overlaps with gif container
        isOverlapping = (
            randomX < gifRect.right &&
            randomX + buttonWidth > gifRect.left &&
            randomY < gifRect.bottom &&
            randomY + buttonHeight > gifRect.top
        );
    } while (isOverlapping); // Retry if overlapping

    // Move No button to new position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}


function handleYesClick() {
    window.location.href = "yes_page.html";
}
