const express = require('express');
const path = require('path');
const multer = require('multer');
const routes = require('../routes/main');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Profile Generator running at http://localhost:${PORT}`);
});
