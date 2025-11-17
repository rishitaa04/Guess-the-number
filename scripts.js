const input = document.getElementById("numberInput");
const submitBtn = document.getElementById("submit");

// Function that performs the action
function handleGuess() {
    const value = input.value;

    // Check if input is empty
    if (value === "" || value === null) {
        alert("Please enter a number first!");
        return; // stop the function
    }

    console.log("User entered:", value);
    alert("You entered: " + value);
}

// Trigger on Enter key
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleGuess();
    }
});

// Trigger on button click
submitBtn.addEventListener("click", handleGuess);
