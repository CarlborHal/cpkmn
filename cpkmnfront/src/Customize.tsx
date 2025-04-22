import React, { useState } from 'react'

export default function Customize() {

    const [piruk,setPiruk] =useState([]);

    useEffect( () =>{
      const customPkmn:any = async () => await fetch('http://localhost:3000/customized');
       setPiruk(customPkmn)
    }, [])

    //get data from thingie
    //store in array, in state
    //then run through and render em to screen


  return (
    <div>
    </div>
  )
}
