export interface Photo{
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export type Photos = Photo[]

export class PhotosService{
  private url = import.meta.env.VITE_API_URL

  getList(): Promise<Photos>{
    return new Promise<Photos>(resolve => {
      setTimeout(async () => {
        try {
          const response = await fetch(this.url)
          const list = await response.json()

          resolve(list.splice(0, 20))
        } catch(error){
          console.error(error)

          resolve([])
        }
      }, 2000)
    })
  }

  getItem(id: number|undefined): Promise<Photo|null>{
    return new Promise<Photo|null>(resolve => {
      setTimeout(async () => {
        try {
          const response = await fetch(`${this.url}/${id}`)
          const item = await response.json()

          resolve(item)
        } catch(error){
          console.error(error)

          resolve(null)
        }
      }, 1000)
    })
  }
}
