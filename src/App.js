import React,{Component} from 'react';
import Pokecard from './Pokecard';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Pokecard id={7} name='Squirtle' type='water' base_experience={63}/>
      </div>
    );
  }
}

export default App;
