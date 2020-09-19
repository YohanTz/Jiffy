import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Footer.css';

const Footer = ({ activeApp, setActiveApp }) => {
  return (
    <footer>
      <FontAwesomeIcon icon={faPowerOff} size='2x' />
    </footer>
  );
};

export default Footer;
