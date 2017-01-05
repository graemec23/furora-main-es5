const React = require('react');
const Provider = require('react-redux').Provider;
const RouterContext = require('react-router').RouterContext;
const match = require('react-router').match;
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;
const fs = require('fs');
const path = require('path');
const store = require('../../client/store');
const myRoutes = require('../../client/routes');


const css = fs.readFile(path.join(__dirname, '../../client/dist/styles.css'), (err, data) => {
  if (err) {
    console.log('error occured')
  }
  return data;
})

const reactRoutes = (app) => {
  app.use((req, res) => {
    match({ routes: myRoutes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        const body = renderToStaticMarkup(
          React.createElement(Provider, { store }, React.createElement(RouterContext, props)),
        );
        res.status(200).render('index', { css, body });
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};

module.exports = reactRoutes;
