// hover effect st here 
function selectPayment(element) {
    document.querySelectorAll('.p-3').forEach(method => {
        method.classList.remove('bg-blue-200');
    });
    element.classList.add('bg-blue-200');
}
// hover effect end here 

// Function to generate UPI QR Code
function generateUPIQRCode(event) {
    event.preventDefault(); // Prevent default form submission

    // Fixed UPI ID
    const upiId = "mohidulh71@oksbi";

    // Get the amount from user input
    const amount = document.getElementById("amount").value.trim();

    // Define the recipient's name (optional but recommended)
    const recipientName = "Air IQ"; // Replace with the actual recipient's name

    // Define the currency code (INR for Indian Rupees)
    const currency = "INR";

    // Check if amount is valid (greater than zero)
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid amount greater than 5.");
        return;
    }

    // Construct the UPI payment URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
        recipientName
    )}&am=${amount}&cu=${currency}`;

    // Generate the QR code
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear previous QR code if any
    new QRCode(qrcodeContainer, {
        text: upiUrl,
        width: 256,
        height: 256,
    });

    // Start the countdown timer
    startCountdown();
}




// Function to start a 2-minute countdown
function startCountdown() {
    let timeLeft = 90; // 2 minutes in seconds
    const timeDisplay = document.getElementById("time");
    const continueButton = document.getElementById("continue-btn");

    // Reset and hide the button initially
    continueButton.style.display = "none";

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timeDisplay.innerHTML = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeDisplay.innerHTML = "Time Expired!";
            continueButton.style.display = "block"; // Show the button after time expires
        }

        timeLeft--;
    }, 1000);
}

// Attach the function to the form's submit event
document.getElementById("upi-form").addEventListener("submit", generateUPIQRCode);
