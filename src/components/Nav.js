import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import "./nav.module.css"


const Nav = () => {
  return (
    <header>
      <Link  style = {{ paddingTop:'25px', fontSize:'30px', color: 'white', textDecoration: 'none'}} to="/">Головна</Link>
      <Link style = {{ paddingTop:'25px', fontSize:'30px', color: 'white' , textDecoration: 'none'}} to="/publications">Публікації</Link>
      <Link  style = {{paddingTop:'25px', fontSize:'30px', color: 'white', textDecoration: 'none'}}to="/photo">Фото</Link>
      <Link style = {{paddingTop:'25px', fontSize:'30px', color: 'white', textDecoration: 'none'}} to="/contacts">Контакти</Link>
    </header>
  );
};


export default Nav;