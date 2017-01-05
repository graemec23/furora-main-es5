const React = require('react');
const Link = require('react-router').Link;
const Logo = require('./Logo');
const SocialMedia = require('../socialMedia/SocialMedia');

const Header = () => (
  <header className="c-header c-header--dark">
    <div className="o-wrapper c-header__container">
      <div className="o-layout">
        <nav className="o-layout__item u-1/1 c-nav">
          <Link to="/" className="c-nav__home-link">
            <Logo />
          </Link>
          <SocialMedia />
        </nav>
        <div className="o-layout__item u-1/1">
          <div className="o-flag">
            <div className="o-flag__body c-header__headline">
              <h1 className="c-header__title">Front End Development Consultancy
                <br/>
                Based in Essex / London</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

module.exports = Header;
