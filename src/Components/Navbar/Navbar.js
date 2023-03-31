import React from 'react';
import './Navbar.css';
import img from '../../assets/img/Online-Sig.png';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img className="Navbar-logo-img" src={img} alt="Сбер" />
      </div>
    </div>
  );
}
