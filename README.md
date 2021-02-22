# Dynamic Sitemap

  A module for generating dynamic sitemaps.

  [![NPM](https://nodei.co/npm/dynamic-sitemap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dynamic-sitemap/)

## Installation

  This module is available at [npm](https://www.npmjs.com/package/dynamic-sitemap).

  You can install it using the command:

  ```bash
  $ npm install dynamic-sitemap
  ```

## Features

  * Generation of dynamic sitemap through a list
  * Create sitemaps for pages
  * Create sitemaps for images

## Example of use

  Import the module, call the construction function and treat the data as you wish:

  ```js

  const dySitemap = require('dynamic-sitemap')
  const fs = require('fs')

  const xml = dySitemap.build([
    {
      loc: 'https://www.npmjs.com',
      lastmod: '06-11-2020'
    },
    {
      loc: 'https://docs.npmjs.com/',
      lastmod: '04-07-2020',
      images: [
        {
          loc: 'https://docs.npmjs.com/image.jpg',
          title: 'Title example'
        },
        {
          loc: 'https://docs.npmjs.com/image2.jpg'
        }
      ]
    },
    {
      loc: 'https://www.npmjs.com/package/dynamic-sitemap',
      lastmod: '06-11-2020',
    }
  ])

  fs.writeFileSync('sitemap.xml', xml)

  ```

  > Attention! You cannot generate a sitemap with more than 500 URLs. You must use a sitemap for sitemaps. [Learn more](https://www.sitemaps.org/protocol.html#index).

  In the case above, I saved the returned data in a sitemap.xml file and the result was as follows:

  ```xml

  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
      <loc>https://www.npmjs.com</loc>
      <lastmod>06-11-2020</lastmod>
    </url>
    <url>
      <loc>https://docs.npmjs.com/</loc>
      <lastmod>04-07-2020</lastmod>
      <image:image>
        <image:loc>https://docs.npmjs.com/image.jpg</image:loc>
        <image:title>Title example</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.npmjs.com/package/dynamic-sitemap</loc>
      <lastmod>06-11-2020</lastmod>
    </url>
  </urlset>

  ```

  Generation parameters:

  Parameter | Description
  --------- | ------
  loc       | Page URL (required)
  lastmod   | Last page change (optional)
  image     | List of parameters for images (optional)
  
  Image parameters:

  Parameter   | Description
  ---------   | ------
  loc         | Image URL (required)
  title       | Image title (optional)
  description | Image description (optional)

## Note
  This module follows the sitemap standards used by Google based on the rules defined by [sitemap.org](https://www.sitemaps.org/).

  This module is still in development. new functions and improvements will be added in the future.

## License

  [MIT](LICENSE)