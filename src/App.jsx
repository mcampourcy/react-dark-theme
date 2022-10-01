import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { Moon, Sun } from './icons'

import './App.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <main data-theme={theme}>
      <h1>Change theme</h1>
      <button onClick={toggleTheme} name="switch" type="button" aria-label="Click here to switch theme">
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </main>
  );
}

export default App;
