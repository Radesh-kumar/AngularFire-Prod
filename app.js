const express = require('express');
const path = require('path');
const app = express();
// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'crud')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
