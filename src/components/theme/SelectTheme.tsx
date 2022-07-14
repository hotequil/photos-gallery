import { useState } from "react";
import styles from "./SelectTheme.module.css"

enum Theme{
  LIGHT = "light",
  DARK = "dark",
}

const THEME_KEY = "PHOTOS_GALLERY_THEME"
let html: HTMLHtmlElement|null = null

const setTheme = (theme: Theme) => {
  if(!html) html = document.querySelector('html')

  html.classList.add(theme)
  html.classList.remove(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

  localStorage.setItem(THEME_KEY, theme)
}

const getTheme = () => {
  const themeFromLocalStorage = localStorage.getItem(THEME_KEY) as Theme
  let nextTheme: Theme

  if(themeFromLocalStorage === Theme.LIGHT || themeFromLocalStorage === Theme.DARK) nextTheme = themeFromLocalStorage
  else if(window.matchMedia('(prefers-color-scheme: light)').matches) nextTheme = Theme.LIGHT
  else nextTheme = Theme.DARK

  setTheme(nextTheme)

  return nextTheme
}

export const SelectTheme = () => {
  const [theme, set] = useState(getTheme())
  const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

  const change = () => {
    set(nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button className={styles.button}
            onClick={change}
            type="button"
            aria-label={`Change theme to ${nextTheme}`}>
      Switch theme
    </button>
  )
}
