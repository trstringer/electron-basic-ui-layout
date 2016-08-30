import React from 'react';
import styles from './Nav.css';
import NavTop from './NavTop';
import NavBottom from './NavBottom';

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <NavTop />
      <NavBottom />
    </div>
  );
};

export default Nav;
