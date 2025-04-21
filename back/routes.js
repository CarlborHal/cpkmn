import express from 'express';
import controller from './controller.js';



const router = express.Router()


//check route but should be very simple and just be

router.get('/', controller.getPokemon, (req,res) =>res.json(res.locals.pkmn)



)


export default router;