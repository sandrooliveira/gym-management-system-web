import React, { ReactNode } from 'react';
import classes from './PageMenu.module.scss';

export const PageMenu: React.FC<ReactNode> = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}