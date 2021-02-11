const express = require('express');

// создать приложение методом express()
const app = express();

const mongoose = require('mongoose');

const PORT = 3000;

// подключиться к серверу mongo
mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
