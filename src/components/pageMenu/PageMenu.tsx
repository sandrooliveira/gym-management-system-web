import React, { MouseEventHandler } from 'react';
import { MdMenu } from 'react-icons/md';

import classes from './PageMenu.module.scss';

interface PageMenuProps {
  mobileMenuClick: MouseEventHandler<HTMLButtonElement>
}

export const PageMenu: React.FC<PageMenuProps> = (props) => {
  return (
    <div className={classes.container}>
      <button className={classes.btn_mobile} onClick={props.mobileMenuClick}><MdMenu /></button>
      <div className={classes.inline_menu}>{props.children}</div>
    </div>
  )
}