import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()

const app = express();
const PORT = process.env.PORT;
import router from './routes.js'
app.use(express.json());//for req.bodies to exist
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', router);


// app.get('/yo', (req, res) =>{res.send('hello from server');})
// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('unknown page'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))