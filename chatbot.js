$(document).ready(function() {
    const API_KEY = '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'; // Replace with your actual API key
    const chatbotEndpoint = 'https://api.openai.com/v1/chat/completions';

    // Function to send user input to the ChatGPT API
    function sendMessage(message) {
        $.ajax({
            url: chatbotEndpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY
