
import {Link} from 'react-router-dom';
// import HektarB from './hektarbattle.mp3';

export default function Navbar() {
  console.log('navbar rendered');
  return (
    <nav>
      <Link to="/">Customizer</Link>
      <Link to="/customizer">Customized Pokemon</Link>
    </nav>

  )
}
