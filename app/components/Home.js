import React, { Component } from 'react';
import styles from './Home.css';
import Nav from './Nav';
import Main from './Main';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}
