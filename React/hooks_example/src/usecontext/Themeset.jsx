import React, { createContext, useContext, useState } from 'react'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

const Themecontext = createContext()

const Themetext = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggletheme = () => {
        setTheme((set) => set === "light" ? "dark" : "light")
    }

    return (
        <Themecontext.Provider value={{ theme, toggletheme }}>
            {children}
        </Themecontext.Provider>
    )
}
const Themeshow = () => {
    const { theme, toggletheme } = useContext(Themecontext)
    const lighttheme = {
        backgroundColor: "white",
        color: "black"
    }
    const darktheme = {
        backgroundColor: "black",
        color: "white"
    }
    return (
        <>
            {/* <div className='container' style={theme === "light" ? lighttheme : darktheme}> */}
            <div className={theme === "light" ? 'lighttheme' : 'darktheme'}>
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} onClick={toggletheme} />
                <p>{theme}</p>
            </div>
        </>
    )
}
const Themeset = () => {
    return (
        <>
            <Themetext>
                <Themeshow />
            </Themetext>
        </>
    )
}

export default Themeset
