import { useState, useEffect } from 'react'
import Custompkmn from './Custompkmn'
export default function Customized() {
    
  const [piruk,setPiruk] =useState([]);

  useEffect( () =>{
    const getPkmn = async () => {
    const data = await fetch('http://localhost:3000/customized', {
      method:'GET',
      credentials: 'include'
    });
    const customPkmn = await data.json();
     setPiruk(customPkmn);

    }
    getPkmn();

  }, [])
//map with customPkmn, each one will have image, moves and name
  return (
    <div>
      Hello, world!
      {piruk.length}
      {piruk.map( (elem, index) =>{
      return <Custompkmn pokemon = {elem} key = {index}/>
      })}

    </div>
  )
}
//need to make pokemon each one 
//show pokemon, and moves
//just do it