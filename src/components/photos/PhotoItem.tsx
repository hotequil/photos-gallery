import React from "react";
import styles from "./PhotoItem.module.scss";
import { Target } from "../link/Link";
import { Link } from "react-router-dom";

export interface PhotoItemProps{
  id: number,
  title: string,
  thumbnailUrl: string,
}

export const PhotoItem: React.FC<PhotoItemProps> = ({ id, title, thumbnailUrl }) =>
  <li className={styles.item}>
    <Link className={styles.click}
          to={`/photos/${id}`}
          target={Target.SELF}>
      <img className={styles.image} src={thumbnailUrl} alt={`Photo of ${title}`}/>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  </li>
