import fs from 'fs';

exports.handler = async function (event, context) {
  try {
    // Ваша логіка оновлення JSON-файла
    const newData = {
      item: "newTitle"
    };

    // Шлях до JSON-файлу
    const jsonFilePath = 'public/data/drink.json';

    // Читаємо поточний вміст файлу
    const currentData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    // Оновлюємо дані
    const updatedData = {
      ...currentData,
      ...newData
    };

    // Записуємо оновлений вміст назад у файл
    fs.writeFileSync(jsonFilePath, JSON.stringify(updatedData), 'utf-8');

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
