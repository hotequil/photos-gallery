import { Outlet } from "react-router-dom"
import { Link, Target } from "./components/link/Link";
import styles from "./App.module.scss"
import { SelectTheme } from "./components/theme/SelectTheme";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Photos gallery</h1>
        <SelectTheme />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        Developed by <Link target={Target.BLANK} href="https://hotequil.tech">hotequil</Link>
      </footer>
    </div>
  )
}

export default App
