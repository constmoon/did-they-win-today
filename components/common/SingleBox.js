import React from 'react';
import style from '../../styles/singleBox.styl';

const SingleBox = ({ children }) => {
  return (
    <div className={style.box}>
      {children}
    </div>
  )
}

export default SingleBox;