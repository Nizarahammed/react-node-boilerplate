const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const publicPath = path.resolve(__dirname, 'public');

const port = process.env.PORT || 8000;

app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/public', express.static(publicPath, { redirect: false }));

app.get('/api/healthy', (req, res) => {
  console.log('welcome');
  res.status(200).json({ message: ' Web is healthy!'+ process.env.NODE_ENV});
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});


const server = app.listen(port, () => {
  console.log(`running in port ${port}`);
});

module.exports = server;

