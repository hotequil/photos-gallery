import React from "react";
import { Main } from "../layouts/Main";
import { SearchPhotoInput } from "../components/photos/SearchPhotoInput";

export const Photos: React.FC = () => {
  return (
    <Main title="List" action={<SearchPhotoInput onInput={() => {}} />}>
      <span>TODO</span>
      <span>LIST</span>
    </Main>
  )
}
