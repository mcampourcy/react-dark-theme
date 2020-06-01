import React, { createContext, useState } from 'react'
import { element } from 'prop-types'

ThemeProvider.propTypes = {
  children: element,
}

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const storedTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(storedTheme)

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
