import React from "react";
import styles from "./PhotoItem.module.css";
import { Target } from "../link/Link";

export interface PhotoItemProps{
  id: number,
  title: string,
  thumbnailUrl: string,
}

export const PhotoItem: React.FC<PhotoItemProps> = ({ id, title, thumbnailUrl }) =>
  <li className={styles.item}>
    <a className={styles.click}
       href={`/photos/${id}`}
       target={Target.SELF}>
      <img className={styles.image} src={thumbnailUrl} alt={`Photo of ${title}`}/>
      <h3 className={styles.title}>{title}</h3>
    </a>
  </li>
