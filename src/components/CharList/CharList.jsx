import React, { Component } from 'react'
import Loader from '../Loader/Loader';
import "./CharList.scss"
import { motion } from "framer-motion"

export default class CharList extends Component {
  state = {
    characters: null,
    selectedId: null,
  }


  handleMovieClick = (e) => {
    let clickedChar = this.state.characters.find((elem) => elem.name == e.target.id);
    let index = this.state.characters.indexOf(clickedChar)
    this.props.history.push(`/characters/${index + 1}`)
  }

  componentDidMount() {
    let url = 'https://swapi.dev/api/people/'
    fetch(url).then(res => {
      return res.json()
    }).then(characters => {
      this.setState({
        characters: characters.results
      })
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="outer">
        <div className="char-list">
          {this.state.characters ? this.state.characters.map((char, index) => {
            let id = index + 1
            return <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
              onClick={(e) => this.handleMovieClick(e)}
              key={char.name}
              className="char-list__item">
              <div
                className="char-list__image">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                  alt={char.name} id={char.name} />
                <p className="char-list__name"><span>{char.name}</span></p>
              </div>
            </motion.div>
          }) : <Loader />}
        </div>
      </div>
    )
  }
}

// add comment
