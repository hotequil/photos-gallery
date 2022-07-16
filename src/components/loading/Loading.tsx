import styles from "./Loading.module.css"

export const Loading = () =>
  <div className={styles.container}>
    <span aria-label="Loading" className={styles.dotPulse} />
  </div>
