interface Content {
  loc: string
  lastmod?: string
  images?: [{
    loc: string
    title?: string
    description?: string
  }]
}

export function build(content: Array<Content>): string
