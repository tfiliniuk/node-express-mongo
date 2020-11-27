const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} on port ${PORT}!`);
});
