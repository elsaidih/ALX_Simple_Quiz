function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option selected, provide feedback
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer first.";
        return;
    }

    // Get user's answer
    const userAnswer = selectedOption.value;

    // Compare answers
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
