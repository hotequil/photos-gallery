import React, { useEffect, useState } from "react";
import { Main } from "../layouts/Main";
import { SearchPhotoInput } from "../components/photos/SearchPhotoInput";
import { Photos as PhotosType, PhotosService } from "../services/PhotosService"
import { NotFound } from "../components/not-found/NotFound";
import { Loading } from "../components/loading/Loading";
import { PhotosList } from "../components/photos/PhotosList";
import { PhotoItem } from "../components/photos/PhotoItem";

const service = new PhotosService()

export const Photos: React.FC = () => {
  const [, setSearch] = useState("")
  const [photos, setPhotos] = useState<PhotosType>([])
  const [memoryPhotos, setMemoryPhotos] = useState<PhotosType>([])
  const [loading, setLoading] = useState(false)

  const onSearch = value => {
    setSearch(value)
    setPhotos(memoryPhotos.filter(({ title }) => title.includes(value)))
  }

  const get = async () => {
    onSearch("")
    setLoading(true)

    const photos = await service.getList()

    setPhotos(photos)
    setMemoryPhotos(photos)
    setLoading(false)
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <Main title="List" action={!loading && <SearchPhotoInput onInput={onSearch} />}>
      { loading && <Loading /> }

      { !loading && !photos.length && <NotFound message="There are no photos"/> }

      {
        !loading &&
        !!photos.length &&
        <PhotosList>{photos.map(photo => <PhotoItem key={photo.id} id={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} />)}</PhotosList>
      }
    </Main>
  )
}
