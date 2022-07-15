import React, { PropsWithChildren, ReactNode } from "react";
import PropTypes from "prop-types";
import styles from "./Main.module.css"

interface MainProps{
  title: string
  action?: ReactNode
}

export const Main: React.FC<PropsWithChildren<MainProps>> = ({ title, action, children }) => {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {action}
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  )
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.node,
}
