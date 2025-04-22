import React from 'react'

export default function pokeDisplay({props}) {
//form needs nickname
//form needs moves
async function handleSubmit (event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries())
    // console.log(formObject);
    //now need to build express await 
    const body = JSON.stringify(formObject)
    const poster = await fetch(`http://localhost:3000/create`,{
        method: "POST",
        // headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formObject)
    })
    console.log(JSON.stringify(formObject))
}
  return (
    <div>
      <h4>pokemon</h4>
      <img src = {props.sprite}/>
      <div>
        {props.name}
      </div>
      <form onSubmit ={handleSubmit} >
        <input type = "text" name="nickname" /> 
        <input type = "text" name="move1" /> 
        <input type = "text" name="move2" /> 
        <input type = "text" name="move3" /> 
        <input type = "text" name="move4" /> 
        <button type ="submit">Search</button>
      </form>
      
    </div>
  )
}
