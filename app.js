const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const authRouter = require('./routes/authRouter');
const classRouter = require('./routes/classRouter');
const feedbackRouter = require('./routes/feedbackRouter');
const lessonRouter = require('./routes/lessonRouter');


app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use('/', authRouter);
app.use('/class', classRouter);
app.use('/feedback', feedbackRouter);
app.use('/lesson',lessonRouter)

app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ error: 'Internal Server Error' }); 
});

app.listen(3000, () => {
console.log(`Server running at http://localhost:${3000}/`);
});
