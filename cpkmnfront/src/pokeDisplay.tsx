import React from 'react'

export default function pokeDisplay({props}) {
//form needs nickname
//form needs moves
  return (
    <div>
      <h4>pokemon</h4>
      <img src = {props.sprite}/>
      <div>
        {props.name}
      </div>
      
    </div>
  )
}
