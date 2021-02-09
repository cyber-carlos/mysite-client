export interface IFeed {
  date: string
  id: string
  title: string
  link: string
  pubDate: Date
  description: string
  sourceId: string
  thumbnail: string
  hasThumbnail?: boolean
  author: string
  source: any
}
