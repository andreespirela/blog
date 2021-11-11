//Install express server
const express = require('express');
const path = require('path');
const fs = require('fs');
const { buildSeo } = require("./seobuilder");
const blogs = JSON.parse(fs.readFileSync('./src/assets/posts/posts.json', 'utf8'));

const app = express();

app.get('/*', function(req,res, next) {
  // if the request has a '.' assume that it's for a file, move along
  const reqPath = req.path;
  const ext = path.extname(reqPath);

  if (ext !== '') {
    return next();
  }

  if(reqPath.startsWith("/blog/")) {
    const blogRoute = reqPath.split("/blog/")[1];
    const blog = blogs.find(item => item.route === blogRoute);
    if(blog) {
      const content = buildSeo(blog.description, 'https://www.andrespirela.com/assets/andres-pirela.jpg', `Andres Pirela - ${blog.title}`);
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(content.toString()));
      return;
    }
  }

  res.sendFile(path.join(__dirname+'/dist/andres-pirela-blog/index.html'));
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/andres-pirela-blog'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
