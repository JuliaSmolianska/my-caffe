import fetch from 'node-fetch';

exports.handler = async function (event, context) {
  try {
    // Ваша логіка оновлення JSON-файла
    const newData = { 
      item: "newTitle"
    };

    // Оновлення JSON-файла через Netlify API за допомогою node-fetch
    const response = await fetch(process.env.JSON_FILE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NETLIFY_API_ACCESS_TOKEN}`
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
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
