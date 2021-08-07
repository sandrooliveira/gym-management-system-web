import React, { MouseEventHandler } from 'react';
import { IconBaseProps } from 'react-icons';
import { NavLink, useLocation } from 'react-router-dom';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  icon: React.ComponentType<IconBaseProps>;
  label: string;
  nav?: {
    to: string;
    isExact?: boolean;
    activeRoutes: string[]
  },
  click?: MouseEventHandler<HTMLSpanElement>
}

export const SideBarItem: React.FC<SidebarItemProps> = ({ icon: Icon, nav, label, click }) => {
  const location = useLocation();
  let usedClasses;
  let menuItem;

  if (!!nav) {
    if (nav?.activeRoutes) {
      usedClasses = nav?.activeRoutes.includes(location.pathname)
        ? `${classes.menu_item} ${classes.active}`
        : classes.menu_item;
    } else {
      usedClasses = classes.menu_item;
    }

    menuItem = nav.isExact 
      ? <NavLink exact to={nav?.to}>{label}</NavLink> 
      : <NavLink to={nav?.to}>{label}</NavLink> 
  } else {
    usedClasses = classes.menu_item;
    menuItem = <span onClick={click}>{label}</span>
  }


  return (
    <div className={usedClasses}>
      <Icon />
      {menuItem}
    </div>
  )
}