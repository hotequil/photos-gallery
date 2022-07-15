import React, { useMemo } from "react";
import { uniqueId } from "../../helpers/unique-id";
import styles from "./SearchPhotoInput.module.css"

export interface SearchPhotoInputProps{
  onInput: Function
}

export const SearchPhotoInput: React.FC<SearchPhotoInputProps> = ({ onInput }) => {
  const id = useMemo(() => uniqueId(), [])

  return (
    <input className={styles.input}
           aria-label="Search photo"
           name="searchPhotoInput"
           type="text"
           id={id}
           placeholder="Search by photo title"
           onInput={event => onInput(event.currentTarget.value)} />
  )
}
