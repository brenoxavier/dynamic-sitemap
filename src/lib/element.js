function build (data) {
  const { loc, lastmod, images } = data
  let xml = ''

  xml += '  <url>\n'
  xml += `    <loc>${loc}</loc>\n`
  xml += `    <lastmod>${lastmod}</lastmod>\n`

  if (images) {
    images.map(item => {
      xml += '    <image:image>\n'
      xml += `      <image:loc>${item.loc}</image:loc>\n`

      if (item.title) {
        xml += `      <image:title>${item.title}</image:title>\n`
      }

      if (item.caption) {
        xml += `      <image:caption>${item.caption}</image:caption>\n`
      }

      xml += '    </image:image>\n'
    })
  }

  xml += '  </url>\n'

  return xml
}

module.exports = { build }
