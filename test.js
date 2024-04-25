const axios = require('axios');

async function getPythonPrediction(message) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/send_message', { user_message: "What is the process for submitting my idea to the school?" });
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Example usage
const message = 'Cảm ơn';
getPythonPrediction(message)
  .then((response) => {
    console.log('Python response:', response);
  });
