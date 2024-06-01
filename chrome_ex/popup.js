$(document).ready(function() {
    // Event listener for the send button
    $('.send-button').on('click', function() {
        sendMessage();
    });

    // Allow Enter key to send message
    $('#user-input').on('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send message
    function sendMessage() {
        const inputField = $('#user-input');
        const userInput = inputField.val();
        inputField.val('');
        $('#output').append(`<div class="message user-message">You: ${userInput}</div>`);

        // Show loading animation
        $('#loading').show();

        // Make the POST request to the model
        fetch('http://127.0.0.1:8000/chat/', { // Replace with your model's endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "user_input": userInput })
        })
        .then(response => response.json())
        .then(data => {
            // Hide loading animation
            $('#loading').hide();

            // Append bot response
            $('#output').append(`<div class="message bot-message">Bot: ${data.bot_response}</div>`);
            $('#output').scrollTop($('#output')[0].scrollHeight); // Scroll to the bottom
        })
        .catch(error => {
            // Hide loading animation
            $('#loading').hide();

            // Display an error message in the custom alert
            $('#custom-alert-message').text('An error occurred. Please try again.');
            $('#custom-alert').show();
        });
    }

    // Event listener for the settings icon
    $('.settings-icon').on('click', function() {
        chrome.runtime.openOptionsPage();
    });

    // Event listener for closing the custom alert
    $('#close-alert').on('click', function() {
        $('#custom-alert').hide();
    });
});
