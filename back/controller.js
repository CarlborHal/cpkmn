const controller = {};
import pool from './db.js';
import bcrypt from 'bcrypt';

controller.getPokemon = async (req, res, next) => {
  try {
    // console.log("hi");
    console.log(req.cookies)
    const query = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${req.query.name}`,
    {method:'GET',
    credentials: 'include'}
    );
    const queryJSON = await query.json();
    res.locals.pkmn = queryJSON;
    // res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000/')
    // console.log(res.locals.pkmn);
    return next();
  } catch {
    console.log('error on accessing database');
  }
};

controller.postPokemon = async (req, res, next) => {
  console.log(req.cookies.user);
  const text =
    'INSERT INTO pokemon (name, nickname, move1, move2, move3, move4, sprite, owner) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
  // const text = "INSERT INTO pokemon (name, nickname, move1, move2, move3, move4) VALUES($1, $2, $3, $4, $5, $6)"
  const values = [
    req.body.name,
    req.body.nickname,
    req.body.move1,
    req.body.move2,
    req.body.move3,
    req.body.move4,
    req.body.sprite,
    req.cookies.user,
  ];
  // ('mudkip','piruk','water','fire','blah','d')
  res.locals.upload = await pool.query(text, values);
  console.log(res.locals.upload);
  return next();
};
controller.getCustomPokemon = async (req, res, next) => {
  try {
    // const text = 'SELECT * FROM pokemon'
    const query = 'SELECT * FROM pokemon WHERE owner = ($1)'
    const text = [req.cookies.user]
    const response = await pool.query(query, text);
    console.log(response);
    // res.locals.pkmn = await response.json()
    res.locals.pkmn = response.rows;
    console.log(res.locals.pkmn);
    return next();
  } catch (err) {
    return next(err);
  }
};

controller.createUser = async (req, res, next) => {
  //get data, run through bcrypt

  const saltRounds = 5;
  const hashedpw = await bcrypt.hash(
    req.body.password,
    saltRounds,
    async function (err, hash) {
      if (err) {
        console.error(err);
        return next(err);
      }
      const text = 'INSERT INTO passwords (username, hashedpw) VALUES($1, $2) ';
      const values = [req.body.username, hash];
      await pool.query(text, values);
      next();
    }
  );
};

controller.createUser = async (req, res, next) => {
  //get data, run through bcrypt

  const saltRounds = 5;
  const hashedpw = await bcrypt.hash(
    req.body.password,
    saltRounds,
    async function (err, hash) {
      if (err) {
        console.error(err);
        return next(err);
      }
      const text = 'INSERT INTO passwords (username, hashedpw) VALUES($1, $2) ';
      const values = [req.body.username, hash];
      await pool.query(text, values);
      next();
    }
  );
};

controller.loginUser = async (req, res, next) => {
  //req.body will have user and pw
  const text = 'SELECT hashedpw FROM passwords WHERE username = ($1)';
  const values = [req.body.username];
  const toCompare = await pool.query(text, values);
//   console.log(toCompare.rows[0].hashedpw);

  await bcrypt.compare(
    req.body.password,
    toCompare.rows[0].hashedpw,
    function (err, result) {
    //   console.log(result);
      if (result) {
        return next();
      } else {
        return next(err);
      }
    }
  );
  // bcrypt.compare(req.body.password, )
};

controller.setCookie = async (req, res, next) =>{
    console.log(req.body.username)
    res.cookie('user',String(req.body.username), {httpOnly:true})
    // res.setHeader('Access-Control-Allow-Credentials', 'true')

    return next()
//we need to set cookie for login of user (no session yet)
//and then from tehre we can go back and make all functions rely on cookie to serve request appropriately

}

//wehn back: implement login, with user and pw
//on login, give cookie
//pokemon added are sent to db with cookie as unique identifier
//modify get request to pull with that cookie
export default controller;
