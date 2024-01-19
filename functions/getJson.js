import fs from 'fs';

exports.handler = async function (event, context) {
  try {
    const jsonData = fs.readFileSync('public/data/drink.json', 'utf-8');
    const parsedData = JSON.parse(jsonData);

    return {
      statusCode: 200,
      body: JSON.stringify(parsedData),
    };
  } catch (error) {
    console.error('Error reading JSON file:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read JSON file' }),
    };
  }
};
