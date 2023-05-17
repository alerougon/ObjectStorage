$(document).ready(function() {
    const API_KEY = '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'; // Reemplaza con tu API key
    const chatbotEndpoint = 'https://api.openai.com/v1/chat/completions';

    function sendMessage(message) {
        $.ajax({
            url: chatbotEndpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY
            },
            method: 'POST',
            data: JSON.stringify({
                'messages': [{'role': 'system', 'content': 'You are a user'}, {'role': 'user', 'content': message}]
            }),
            success: function(data) {
                var response = data.choices[0].message.content;
                displayMessage(response);
            },
            error: function(err) {
                console.error('Error:', err);
            }
        });
    }

    function displayMessage(message) {
        var messageContainer = $('#messages');
        var messageElement = $('<div class="message">').text(message);
        messageContainer.append(messageElement);
    }

    $('#send-button').click(function() {
        var userMessage = $('#user-input').val();
        sendMessage(userMessage);
    });
});
