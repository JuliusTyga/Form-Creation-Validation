document.addEventListener("DOMContentLoaded", () => {
    // Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Call the validateForm function and get the result
        const { isValid, messages } = validateForm(username, email, password);

        // Display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Error messages
            feedbackDiv.style.color = "#dc3545"; // Error color
        }
    });

    /**
     * Validates the form inputs.
     * @param {string} username - The username input.
     * @param {string} email - The email input.
     * @param {string} password - The password input.
     * @returns {object} Validation result and messages.
     */
    function validateForm(username, email, password) {
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.'.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        return { isValid, messages };
    }
});
