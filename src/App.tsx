import { useState, useEffect, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/theme.css'
import "./App.css"
import Landing from "./screens/Landing"
import Header from "./components/Header/Header"
import { ThemeContext } from "./context/ThemeContext"
import type { Theme } from "./types/constants"

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

function App() {
  const [ theme, setTheme ] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;