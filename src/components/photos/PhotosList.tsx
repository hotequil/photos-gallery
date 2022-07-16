import React, { PropsWithChildren } from "react";
import styles from "./PhotosList.module.css"

export const PhotosList: React.FC<PropsWithChildren> = ({ children }) => <ul className={styles.list}>{children}</ul>
