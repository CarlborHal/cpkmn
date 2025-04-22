import express from 'express';
import controller from './controller.js';



const router = express.Router()


//check route but should be very simple and just be
router.use(express.json());//for req.bodies to exist
router.get('/', controller.getPokemon, (req,res) =>res.json(res.locals.pkmn))

router.post('/create', controller.postPokemon, (req,res) =>res.send('success'))



export default router;