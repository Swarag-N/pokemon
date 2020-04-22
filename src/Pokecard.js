import React, {Component} from 'react'
import './Pokecard.css'
// const POKE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
class Pokecard extends Component{
    render(){
        // function padding(num,to){
        //     let str = String(num)
        //     while(str.length<to){
        //         str = "0"+str
        //     }
        //     return str
        // }
        // let paddedNum = padding(this.props.id,3)
        let padTo3 = (num)=>(num<=999?`00${num}`.slice(-3):num)
        let URL = `${POKE_URL}${padTo3(this.props.id)}.png`
        return(
            <div class="Pokecard">
                <div className="Pokecard-title">{this.props.name}</div>
                <div className="Pokecard-img">
                    <img src={URL} alt={this.props.name}/>
                </div>
                <div className="Pokecard-Data">Type : {this.props.type}</div>
                <div className="Pokecard-Data">Experince: {this.props.base_experience}</div>
            </div>   
        )
    }
}

export default  Pokecard