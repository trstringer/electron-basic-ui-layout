import React, { Component } from 'react';
import styles from './Main.css';
import MainLeft from './MainLeft';
import MainRight from './MainRight';


export default class Main extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <MainLeft />
          <MainRight />
        </div>
      </div>
    );
  }
}
