import { Photo } from "../../services/PhotosService";
import React from "react";
import styles from "./PhotoDetails.module.css"

export interface PhotoDetailsItem {
  title: string
  text: number|string
}

export const PhotoDetails: React.FC<Photo> = ({ albumId, id, title, url, thumbnailUrl }) => {
  const alt = `Photo of ${title}`

  const list: PhotoDetailsItem[] = [
    { text: id, title: "ID" },
    { text: albumId, title: "Album ID" },
  ]

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <img className={styles.thumbnail} src={thumbnailUrl} alt={alt} />
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.body}>
        <img className={styles.image} src={url} alt={alt} />
        <ul className={styles.list}>{list.map((item, index) => <li key={index}><strong>{item.title}: </strong>{item.text}</li>)}</ul>
      </div>
    </section>
  )
}
