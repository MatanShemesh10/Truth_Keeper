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
    async function sendMessage() {
        const inputField = $('#user-input');
        const userInput = inputField.val();
        inputField.val('');
        $('#output').append(`<div class="message user-message">You: ${userInput}</div>`);
    
        // Show loading animation
        $('#loading').show();
    
        try {
            // Make the POST request to the model
            const response = await fetch('https://truth-keeper-server.vercel.app/chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({ "user_input": userInput })
            });

            if (!response.ok) {
                // If the response is not ok, throw an error with the status
                throw new Error(`HTTP status ${response.status}`);
            }
            
            
            const data = await response.json();
            
            // Hide loading animation
            $('#loading').hide();
    
            // Append bot response
            $('#output').append(`<div class="message bot-message">Bot: ${data.bot_response}. Percentage of accuracy: ${parseFloat(data.confidence_score[0]).toFixed(2)}</div>`);
            $('#output').scrollTop($('#output')[0].scrollHeight); // Scroll to the bottom
        } 
        catch (error) 
        {
            // Hide loading animation
            $('#loading').hide();
    
            // Display an error message in the custom alert
            const userMessage = 'An error occurred. Please try again.';
            const developerMessage = `Developer Note: ${error.message}`;

            $('#custom-alert-message').html(`${userMessage}<br><small>${developerMessage}</small>`);
            $('#custom-alert').show();
        }
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
