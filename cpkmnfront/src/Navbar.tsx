
import {Link} from 'react-router-dom';
// import HektarB from './hektarbattle.mp3';

export default function Navbar() {
  // console.log('navbar rendered');
  return (
    <nav>
      <Link to="/signup">signup</Link>
      <Link to="/login">login</Link>
      <Link to="/getpkmn">Customizer</Link>
      <Link to="/customizer">Customized Pokemon</Link>
    </nav>

  )
}
