import React from "react";
import { Main } from "../layouts/Main";
import { SearchPhotoInput } from "../components/photos/SearchPhotoInput";

export const Photos: React.FC = () => {
  return (
    <Main title="List" actionLeft={<SearchPhotoInput onInput={() => {}} />}>
      TODO LIST
    </Main>
  )
}
