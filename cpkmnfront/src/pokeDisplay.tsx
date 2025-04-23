import React from 'react'
type custompkmn = {[key:string]:string}
type dbObj = {
  move1:string;
  name:string;
  [key: string]: string;
}
export default function pokeDisplay(pokemon: custompkmn) {
//form needs nickname
console.log(pokemon)
//form needs moves
async function handleSubmit (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries()) as dbObj;

    formObject.name = pokemon.name;
    formObject.sprite = pokemon.sprite;
    await fetch(`http://localhost:3000/create`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify(formObject)
    })
    // console.log(JSON.stringify(formObject))
}
  return (
    <div>
      <h4>Pokemon</h4>
      <img src = {pokemon.sprite}/>
      <div>
        {pokemon.name}
      </div>
      <form onSubmit ={handleSubmit} >
        <input type = "text" name="nickname" placeholder="Nickname"/> 
        <input type = "text" name="move1" placeholder="move1" required/> 
        <input type = "text" name="move2" placeholder="move2"/> 
        <input type = "text" name="move3" placeholder="move3"/> 
        <input type = "text" name="move4" placeholder="move4"/> 
        <button type ="submit">Submit to API</button>
      </form>
      
    </div>
  )
}
