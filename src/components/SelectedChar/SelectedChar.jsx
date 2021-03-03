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
    let url = `https://swapi.dev/api/people/1`
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

    if (this.state) {
      return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="selected-char">
        <div className="selected-char__card item-card">
          <div className="item-card__image">
            <img src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} alt="Something" />
          </div>
          <div className="item-card__info">
            <p>Name: <span></span></p>
            <p>Height: <span>{ }</span></p>
            <p>Mass: <span>{ }</span></p>
            <p>Hair Color: <span>{ }</span></p>
            <p>Skin Color: <span>{ }</span></p>
            <p>Eye Color: <span>{ }</span></p>
            <p>Birth Year: <span>{ }</span></p>
            <p>Gender: <span>{ }</span></p>
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


