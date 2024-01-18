// functions/updateJson.js
import axios from 'axios';

exports.handler = async function (event, context) {
  try {
    // Ваша логіка оновлення JSON-файла
    const newData = { 
      item: "newTitle"
     };

    // Оновлення JSON-файла через Netlify API за допомогою Axios
    const response = await axios({
      method: 'put',
      url: process.env.JSON_FILE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NETLIFY_API_ACCESS_TOKEN}`
      },
      data: newData
    });

    if (!response.status === 200) {
      throw new Error(`Failed to update JSON file. Status: ${response.status}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'JSON file updated successfully' })
    };
  } catch (error) {
    console.error('Error updating JSON file:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update JSON file' })
    };
  }
};
