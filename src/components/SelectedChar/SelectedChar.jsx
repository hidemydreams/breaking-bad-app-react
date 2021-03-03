import React, { Component } from 'react'
import "./SelectedChar.scss"
import { motion } from "framer-motion"

export default class SelectedChar extends Component {

  render() {
    let { state } = this.props.location
    console.log(state)

    if (state) {
      return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="selected-char">
        <div className="selected-char__card item-card">
          <div className="item-card__image">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.location.state.id + 1}.jpg`} alt={this.props.location.state.selectedChar.name} />
          </div>
          <div className="item-card__info">
            <p>Name: <span>{this.props.location.state.selectedChar.name}</span></p>
            <p>Height: <span>{this.props.location.state.selectedChar.height}</span></p>
            <p>Mass: <span>{this.props.location.state.selectedChar.mass}</span></p>
            <p>Hair Color: <span>{this.props.location.state.selectedChar.hair_color}</span></p>
            <p>Skin Color: <span>{this.props.location.state.selectedChar.skin_color}</span></p>
            <p>Eye Color: <span>{this.props.location.state.selectedChar.eye_color}</span></p>
            <p>Birth Year: <span>{this.props.location.state.selectedChar.birth_year}</span></p>
            <p>Gender: <span>{this.props.location.state.selectedChar.gender}</span></p>
          </div>
        </div>
      </motion.div>)
    } else {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="error">
          <h1>Oops...</h1>
          <p>It seems like you didn't choose any character</p>
        </motion.div>
      )
    }
  }
}


