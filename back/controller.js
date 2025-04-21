import express from 'express'
const controller = {};

controller.getPokemon = async (req,res, next) =>{
    try{
        console.log("hi");
        const query = (await fetch(`https://pokeapi.co/api/v2/pokemon/${req.query.name}`)).json()
        res.locals.pkmn=query;
        console.log(res.locals.pkmn);
        return next()
    }
    catch{
        console.log('error on accessing database');
    }
}

export default controller