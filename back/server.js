import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config()

const app = express();
const PORT = process.env.PORT;
import router from './routes.js'
app.use(express.json());
//so its allowing requests from 5173
app.use(cors({origin:'http://localhost:5173', credentials:true }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use('/', router);


// app.get('/yo', (req, res) =>{res.send('hello from server');})

app.use((req, res) => res.status(404).send('unknown page'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, _next) => {
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