import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/star-wars.svg";
import "./NavBar.scss";
import { motion } from "framer-motion";

export default class NavBar extends Component {
  render() {
    return (
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="nav-bar">
        <div className="nav-bar__logo">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <ul className="nav-bar__list">
          <NavLink to="/" exact={true}><li className="nav-bar__link">Home</li></NavLink>
          <NavLink to="/characters"><li className="nav-bar__link">Characters</li></NavLink>
        </ul>
      </motion.div>
    )
  }
}
