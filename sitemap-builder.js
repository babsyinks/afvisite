require("babel-register")({
    presets: ["es2015", "react"]
  });
  const router = require('./src/components/router').default;
  const Sitemap = require('react-router-sitemap').default;
  (
     new Sitemap(router)
        .build("https://abujafilmvillage.com/")
        .save('./public/sitemap.xml')
  );