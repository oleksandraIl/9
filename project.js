const fs = require('fs');
const fileName = 'example.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) return console.error('Помилка під час зчитування файлу:', err);
    
    const modifiedText = data.split('').map((char, index) => (index % 3 === 2 && /[a-z]/.test(char)) ? char.toUpperCase() : char).join('');

    console.log('Модифікований текст:', modifiedText);
