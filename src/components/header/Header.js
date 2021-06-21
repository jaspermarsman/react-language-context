import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../../assets/spain.svg';
import content from '../../data/content.json';
import './Header.css';
import {languageContext} from "../../contexts/LanguageProvider";


function Header() {
  const {language, setLanguage} = useContext(languageContext);

  return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/about-us">
                  {content.[language].header.menuItems.aboutUs}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/all-plants">
                  {content.[language].header.menuItems.allPlants}
                </NavLink>
              </li>
              <li className="language-switch">
                <p>{content.[language].header.changeTo}</p>
                {language === "es"? <FlagNL onClick={() => setLanguage("nl")}/> : <FlagES onClick={() => setLanguage("es")}/>}
              </li>
            </ul>
          </nav>
          <div className="image-container">
            <img src={headerImage} alt="Header image plants" className="header-image"/>
            <h1>{content.[language].header.title}</h1>
          </div>

        </header>
      </>
  );
}

export default Header;