const { parse, HTMLElement } = require('node-html-parser');
const { readFileSync, writeFileSync } = require('fs');

const filePath = `${__dirname}/dist/andres-pirela-blog/index.html`;
let htmlBody = parse(readFileSync(filePath, 'utf8'));

const description = 'Andres Pirela - Thoughts & Statements About Technology.';
const image = 'https://www.andrespirela.com/assets/andres-pirela.jpg';
const title = 'Andres Pirela';

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

writeFileSync(filePath, htmlBody.toString());
