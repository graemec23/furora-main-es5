const React = require('react');
const PropTypes = require('react').PropTypes;
const Header = require('./common/header/Header');
const Footer = require('./common/footer/Footer');
// const ContactSection = require('./contact/ContactSection');

const propTypes = {
  children: PropTypes.object.isRequired,
};

class Layout extends React.Component {
  render() {
    return (
      <div className="o-container">
        <Header />
        <main>
          {this.props.children}
        </main>
        {/* <ContactSection /> */}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = propTypes;
module.exports = Layout;
