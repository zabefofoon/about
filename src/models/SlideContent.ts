export class SlideContent {
  image = ''
  date = ''
  title = ''
  description = ''
  caption = ''
  constructor(raw: RawSlideContent) {
    this.image = raw.image
    this.date = raw.date
    this.title = raw.title
    this.description = raw.description
    this.caption = raw.caption
  }

  static of(raw: RawSlideContent) {
    return new SlideContent(raw)
  }
}

export type RawSlideContent = {
  image: string
  date: string
  title: string
  description: string
  caption: string
}