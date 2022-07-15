import React from "react";
import styles from "./NotFound.module.css"

export interface NotFoundProps{
  message: string
}

export const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  return (
    <div className={styles.notFound}>
      <span aria-hidden="true">(o^^)o</span>
      <span>{message}</span>
    </div>
  )
}
