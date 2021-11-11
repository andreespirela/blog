const {parse} = require("node-html-parser");
const { readFileSync } = require('fs');

const filePath = `${__dirname}/dist/andres-pirela-blog/index.html`;
const fileContent = readFileSync(filePath, 'utf8');

const buildSeo = (description = 'Andres Pirela - Thoughts & Statements About Technology.',
                  image = 'https://www.andrespirela.com/assets/andres-pirela.jpg',
                  title = 'Andres Pirela') => {

  let htmlBody = parse(fileContent);

  const array = [
    {
      name: 'description',
      content: description
    },
    {
      name: 'image',
      content: image
    },
    {
      name: 'title',
      content: title,
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      itemprop: 'name',
      content: title
    },
    {
      itemprop: 'description',
      content: description
    },
    {
      itemprop: 'image',
      content: image
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:creator',
      content: '@andreestech'
    },
    {
      name: 'twitter:image',
      content: image
    },
    {
      name: 'og:title',
      content: title
    },
    {
      name: 'og:description',
      content: description
    },
    {
      name: 'og:image',
      content: image
    },
    {
      name: 'og:site_name',
      content: title
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:image:src',
      content: image
    }
  ];

  array.forEach((item) => {
    const key = item.itemprop ? 'itemprop' : 'name';
    htmlBody.querySelector('head').insertAdjacentHTML("afterbegin",
      `<meta ${key}="${item[key]}" content="${item.content}">`
    );
  })

  return htmlBody;

}

module.exports = {
  buildSeo
};

