const form = document.getElementById('myForm');
const inputField = document.getElementById('myInput');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const userInput = inputField.value.trim().toLowerCase(); // Get user input and trim whitespace and force lower case

    if (userInput === 'frozen') { // Check if input is correct
        window.location.href = "publishing-success.html"; // Direct to next page
    } else {
        errorMessage.textContent = 'Incorrect input. Please enter correct password.';
        errorMessage.style.display = 'block'; // Show error message
    }
});

$("#submitStudBtn").click(function () {
    var answer = document.getElementById("answer").value.toString().toLowerCase();
    var result = answer.includes("4") || answer.includes("4.4");
    if (result == true) {
        window.location.href = "fifth.html";
    }
    else if (answer === "") {
        M.toast({ html: 'Answer cannot be empty' });
    }
    else {
        M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submitStudBtn").trigger('click');
    }
});