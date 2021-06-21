import React, { useState, createContext, } from "react";

export const languageContext = createContext({});

export default function LanguageProvider({children}) {
const [language, setLanguage] = useState("nl")

    return (
        <languageContext.Provider
            value={{
                language: language,
                setLanguage: setLanguage,
            }}
            >
            {children}
        </languageContext.Provider>
    );
}