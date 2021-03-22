import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

class PreLoader extends Component {
  render() {
    return (
      <div className={style.PreLoader}>
        <Loader
          type="ThreeDots"
          color="#3f51b5"
          height={100}
          width={100}
          timeout={0}
        />
      </div>
    );
  }
}

export default PreLoader;
