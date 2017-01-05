const React = require('react');
// import { Route, IndexRoute } from 'react-router';
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const Layout = require('./src/components/App');
const HomePage = require('./src/components/home/HomePage');
// import About from './src/components/about/About';
const Error404 = require('./src/components/error/404');

module.exports = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={Error404} />
  </Route>
);
