const controller = {};
import pool from './db.js'
import bcrypt from 'bcrypt'

controller.getPokemon = async (req,res, next) =>{

    try{
        // console.log("hi");
        const query = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.query.name}`);
        const queryJSON=await query.json()
        res.locals.pkmn=queryJSON;
        // res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000/')
        // console.log(res.locals.pkmn);
        return next()
    }
    catch{
        console.log('error on accessing database');
    }
}

controller.postPokemon = async (req, res, next) =>{
    console.log(req.body)
    const text = "INSERT INTO pokemon (name, nickname, move1, move2, move3, move4, sprite) VALUES($1, $2, $3, $4, $5, $6, $7)"
    // const text = "INSERT INTO pokemon (name, nickname, move1, move2, move3, move4) VALUES($1, $2, $3, $4, $5, $6)"
    const values = [req.body.name, req.body.nickname, req.body.move1, req.body.move2, req.body.move3, req.body.move4, req.body.sprite] 
    // ('mudkip','piruk','water','fire','blah','d')
    res.locals.upload = await pool.query(text, values);
    console.log(res.locals.upload);
    return next()
}
controller.getCustomPokemon = async (req, res, next) =>{
    try{
        // const text = 'SELECT * FROM pokemon'
        const response = await pool.query('SELECT * FROM pokemon')
        console.log(response);
        // res.locals.pkmn = await response.json()
        res.locals.pkmn = response.rows;
        console.log(res.locals.pkmn);
        return next()

    }catch(err){
        return next(err)
    }


}

controller.createUser = async (req, res, next) =>{
    //get data, run through bcrypt
    const test = 'demo'
    const saltRounds = 5;
    bcrypt.hash(test, saltRounds, function(err, hash){
        if (err){
            console.error(err)
            return next(err)
        }
      console.log(hash);
      //send to db
      const text = cREATE
      await pool.query

    })
    next()
}

export default controller