import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './ThemeProvider'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
