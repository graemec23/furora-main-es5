const React = require('react');
const Provider = require('react-redux').Provider;
const RouterContext = require('react-router').RouterContext;
const match = require('react-router').match;
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;

const store = require('../../client/store');
const myRoutes = require('../../client/routes');

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
        res.status(200).render('index', { body });
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};

module.exports = reactRoutes;
