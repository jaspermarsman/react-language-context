import React, {useContext} from 'react';
import content from '../../data/content.json';
import {languageContext} from "../../contexts/LanguageProvider";

function Home() {
    const {language} = useContext(languageContext);
  return (
    <div className="page-container">
      <h2>{content.[language].home.title}</h2>
      <p>{content.[language].home.introText}</p>
    </div>
  );
}

export default Home;
