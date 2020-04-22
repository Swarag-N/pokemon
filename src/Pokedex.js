import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        let result;
        if (this.props.isWinner){
            result=<h1 className="Pokedex-Winner">Winner</h1>
        }else{
            result=<h1 className="Pokedex-Loser">Loser</h1>
        }
        return(
            <div className="Pokedex">
                {result}
                <h4>Toatal Exp: {this.props.exp}</h4>
                <div className="Pokedex-Cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard name={p.name} id={p.id} base_experience={p.base_experience} type={p.type} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex