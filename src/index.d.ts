interface Content {
  /** Page URL */
  loc: string
  /** Last page change */
  lastmod?: string
  /** List of parameters for images */
  images?: [{
    /** Image URL */
    loc: string
    /** Image title */
    title?: string
    /** Image description */
    description?: string
  }]
}

export function build(content: Array<Content>): string
