/* eslint-disable no-unused-vars */
const router = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

router.all('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

// router.get('*', (req, res) => {
//   throw new NotFoundError('Запрашиваемый ресурс не найден');
// });

// router.post('*', (req, res) => {
//   throw new NotFoundError('Запрашиваемый ресурс не найден');
// });

module.exports = router;
