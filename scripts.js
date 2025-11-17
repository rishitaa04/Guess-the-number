const input = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");

const secretNumber = 29; // the correct number

function handleGuess() {
    const value = Number(input.value); // convert from string → number

    // Check if input is empty
    if (input.value === "" || input.value === null) {
        alert("Please enter a number first!");
        return;
    }

    // Compare with secret number
    if (value === secretNumber) {
        alert("🎉 You guessed it right!!");
    } 
    else if (value < secretNumber) {
        alert("⬇️ Too low! Try a higher number.");
    } 
    else if (value > secretNumber) {
        alert("⬆️ Too high! Try a lower number.");
    }
}

// Trigger on Enter key
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleGuess();
    }
});

// Trigger on button click
submitBtn.addEventListener("click", handleGuess);
