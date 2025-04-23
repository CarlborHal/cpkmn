import {useState} from 'react';
import PokeDisplay from './pokeDisplay.tsx';

export default function PkForm() {
  const [pokemon, setPokemon] = useState('');
  const [data, setData] = useState({})
  const fetchPokemon = async (event) => {
    event.preventDefault();
    const pkmn:Response = await fetch(`http://localhost:3000/?name=${pokemon}`);
    const pkmnJSON= await pkmn.json();//awaits dont return strings as i thought, or even normal objects. Response type god dammit struggled a lot
    //and therefore we dont' use json.parse we use object.json();
    // console.log(pkmnJSON)
    //react router
    //components MUST BE CAPITALIZED IT IS NOT A CONVENTION
    const picks:{[key:string]: string} = {
      sprite : pkmnJSON.sprites.front_default,
      name : pkmnJSON.name
    }
    setData(picks);

  }

  // console.log(data);
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
        onChange={e => setPokemon(e.target.value)}
      />
      <button id='button' type="submit">Get Pokemon</button>
    </form>
    <PokeDisplay props={data}/>

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

