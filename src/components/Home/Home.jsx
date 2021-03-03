import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Home.scss";
import Hero from "../../assets/hero.png"
import { motion } from "framer-motion"

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <motion.div animate={{ scale: 1.5 }} className="home__content">
          <h1>Star Wars</h1>
          <p>Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.</p>
          <p>
            The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.
          </p>
          <Link to="/characters">
            <button className="home__btn">Explore Characters</button>
          </Link>
        </motion.div>
        <motion.div animate={{ x: -50 }} className="home__image">
          <img src={Hero} alt="Yoda" />
        </motion.div>
      </div>
    )
  }
}
