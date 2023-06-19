
import './App.css';
import Fullname from './Fullname';
import Dob from './Dob';
import Address from './Address';

function App() {
  const name="Amal"

  return (
    <>
     <h2>Hello, {msg()} {name}</h2>
     <p>Plz enter your details...</p>
     <Fullname></Fullname>
     <Dob></Dob>
     <Address></Address>

     
    </>
  );
  function msg() {
    return "welcome "
    
  }
}

export default App;
