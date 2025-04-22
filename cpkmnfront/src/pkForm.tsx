import {useState} from 'react';
import PokeDisplay from './pokeDisplay.tsx';

export default function pkForm() {
  const [name, setName] = useState({});
  const fetchPokemon = async (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    const pkmn:Response = await fetch(`http://localhost:3000/?name=${name}`);
    const pkmnJSON= await pkmn.json();
    // console.log(pkmnJSON)
    const picks:{[key:string]: string} = {
      sprite : pkmnJSON.sprites.front_default,
      name : pkmnJSON.name
    }
    setName(picks);

    console.log(picks.sprite);
  }

  // fetch is working. now:
  //make state object to track an array, where pokemon goes
  //and then map that into components, each containing:
  //sprite
  return (
<div>
{ /* submit to backend */}
    <form onSubmit={fetchPokemon}>
      <input
        id="pkmn-puller"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button id='button' type="submit">Get Pokemon</button>
    </form>
    {/* <PokeDisplay image = /> */}

  </div>
);
}

// const MarketsDisplay = props => (
//   <div className="displayBox">
//     <h4>Markets</h4>
//     <div className="allMarkets">
//       {props.marketList.map((market, idx) => marketMaker(market, idx, props))}
//     </div>
//   </div>
// );

