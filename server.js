const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Устанавливаем статическую папку
app.use(express.static(path.join(__dirname, 'public')));

// Обрабатываем запросы к корневому маршруту
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
