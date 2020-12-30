import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <header>
      <Link to="/" className="header__brand">
        Tari's <br /> Cakes
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>Location goes here</p>
    </header>
  );
}

export default Header;
