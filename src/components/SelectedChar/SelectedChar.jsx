import React, { Component } from 'react'
import "./SelectedChar.scss"
import { motion } from "framer-motion"

export default class SelectedChar extends Component {

  state = {
    oneChar: null
  }

  componentDidMount() {
    this.getOneCharacter()
  }

  getOneCharacter = () => {
    const { id } = this.props.match.params
    let url = `https://swapi.dev/api/people/${id}`
    fetch(url).then(res => {
      return res.json()
    }).then(character => {
      this.setState({
        oneChar: character
      })
    })
  }

  render() {
    const { id } = this.props.match.params

    if (this.state.oneChar) {
      return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="selected-char">
        <div className="selected-char__card item-card">
          <div className="item-card__image">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Something" />
          </div>
          <div className="item-card__info">
            <p>Name: <span>{this.state.oneChar.name}</span></p>
            <p>Height: <span>{this.state.oneChar.height}</span></p>
            <p>Mass: <span>{this.state.oneChar.mass}</span></p>
            <p>Hair Color: <span>{this.state.oneChar.hair_color}</span></p>
            <p>Skin Color: <span>{this.state.oneChar.skin_color}</span></p>
            <p>Eye Color: <span>{this.state.oneChar.eye_color}</span></p>
            <p>Birth Year: <span>{this.state.oneChar.birth_year}</span></p>
            <p>Gender: <span>{this.state.oneChar.gender}</span></p>
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


