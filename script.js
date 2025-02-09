const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you really, really sure?",
    "You wouldn't say no again...",
    "You can take some time to think about it!",
    "If you say no, I will be really sad...",
    "Please click Yes ):",
    "Ok fine, I will stop asking...",
    "I'll buy you cheesecake if you say yes!"
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
        // Generate random position within 80% of the viewport dimensions
        randomX = Math.random() * (viewportWidth * 0.6 - buttonWidth);
        randomY = Math.random() * (viewportHeight * 0.6 - buttonHeight);

        // Ensure the button stays within the viewport
        randomX = Math.max(0, Math.min(randomX, viewportWidth * 0.6 - buttonWidth));
        randomY = Math.max(0, Math.min(randomY, viewportHeight * 0.6 - buttonHeight));

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