import React, { useEffect, useState } from "react";
import { Main } from "../layouts/Main";
import { PhotoDetails } from "../components/photos/PhotoDetails";
import { NotFound } from "../components/not-found/NotFound";
import { PhotosService, Photo as PhotoType } from "../services/PhotosService";
import { Link, Target } from "../components/link/Link";
import { Loading } from "../components/loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

const service = new PhotosService()

export const Photo: React.FC = () => {
  const [photo, setPhoto] = useState<PhotoType|null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  const get = async () => {
    setLoading(true)

    const id = params?.photoId
    const response = await service.getItem((id && +id) || undefined)

    setPhoto(response)
    setLoading(false)

    if(!response?.id) setTimeout(() => navigate('/'), 2000)
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <Main title="Details" action={<Link target={Target.SELF} href="/">Back</Link>}>
      { loading && <Loading /> }

      { !loading && !photo?.id && <NotFound message={"Photo doesn't exist, you'll be redirect to list soon"} /> }

      { !loading && !!photo?.id && <PhotoDetails id={photo.id} albumId={photo.albumId} title={photo.title} thumbnailUrl={photo.thumbnailUrl} url={photo.url} /> }
    </Main>
  )
}
