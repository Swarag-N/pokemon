import React, {Component} from 'react'
import './Pokecard.css'
const POKE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component{
    render(){
        let URL = `${POKE_URL}${this.props.id}.png`
        return(
            <div class="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={URL} alt={this.props.name}/>
                <div>Type : {this.props.type}</div>
                <div>Experince: {this.props.base_experience}</div>
            </div>   
        )
    }
}

export default  Pokecard