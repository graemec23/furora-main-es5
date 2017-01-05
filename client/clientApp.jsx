const React = require('react');
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;

const routes = require('./routes');
const store = require('./store');

require('./public/styles/shared.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store} key="provider">
        <Router history={browserHistory} routes={routes} />
      </Provider>
    )
  }
};

module.exports = App;
