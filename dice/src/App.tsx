import React from 'react';
import './App.css';
import { Container, Row, Button } from 'react-bootstrap'
import { roll } from './utilities/data';
import { diceImages } from './utilities/data';

function pictureChange(){
  var image = document.getElementById('state') as HTMLImageElement;
  image.src=roll();
}

function App() {
  return (
    
    <div className="App">
      <img id="state" src="./assets/dice5.png"></img><br></br>
      <Button onClick={pictureChange}>Roll Dice</Button>
    
    </div>
  );
}

export default App;
