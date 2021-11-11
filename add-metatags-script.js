const { buildSeo } = require("./seobuilder");
const { writeFileSync } = require("fs");

const filePath = `${__dirname}/dist/andres-pirela-blog/index.html`;

writeFileSync(filePath, buildSeo().toString());
