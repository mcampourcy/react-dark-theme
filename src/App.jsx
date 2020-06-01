import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { Moon, Sun } from './icons'

import './App.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <main data-theme={theme}>
      <button onClick={toggleTheme} name="switch" type="button">
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </main>
  );
}

export default App;
