import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Room from './Components/Udvashroom/room';
import Header from './Components/Header/header';

function App() {
 
  return (
      <div>
         <Header></Header>
         <Room></Room>
      </div>
  );
}

export default App;
