const fs = require('fs');
const fileName = 'example.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        return console.error('Помилка під час зчитування файлу:', err);
    }
    
    const modifiedText = data.split('').map((char, index) => {
        if (index % 3 === 2 && /[a-z]/.test(char)) {
            return char.toUpperCase();
        } else {
            return char;
        }
    }).join('');

    console.log('Модифікований текст:', modifiedText);
});

