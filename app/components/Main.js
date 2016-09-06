import React, { Component } from 'react';
import styles from './Main.css';
import MainLeft from './MainLeft';
import MainRight from './MainRight';
import StatusBar from './StatusBar';
import AppBar from './AppBar';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <AppBar />
          <MainLeft />
          <MainRight />
          <StatusBar />
        </div>
      </div>
    );
  }
}
