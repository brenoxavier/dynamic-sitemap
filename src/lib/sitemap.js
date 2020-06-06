const element = require('./element')

function build (data) {
  let xml = ''

  xml += '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'

  data.map(item => {
    const { loc, lastmod, images } = item

    xml += element.build({ loc, lastmod, images })
  })

  xml += '</urlset>\n'

  return xml
}

module.exports = { build }
