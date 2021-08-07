import { ReactNode } from 'react';

import classes from './Sidebar.module.scss';


export const Sidebar: React.FC<ReactNode> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.logo}>ELITE FITNESS</div>
        <div className={classes.menu_items}>
          {props.children}
        </div>
      </div>
    </div >
  )
}