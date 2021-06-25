import { NavLink, useLocation } from 'react-router-dom'
import { FiUser, FiDollarSign } from 'react-icons/fi';

import classes from './Sidebar.module.scss';

export const Sidebar = () => {
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return path === location.pathname
      ? `${classes.menu_item} ${classes.active}`
      : classes.menu_item;
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.logo}>ELITE FITNESS</div>

        <div className={getNavLinkClass("/")}>
          <FiUser />
          <NavLink activeClassName={classes.active} exact to="/">Alunos</NavLink>
        </div>

        <div className={getNavLinkClass("/finances")}>
          <FiDollarSign />
          <NavLink activeClassName={classes.active} to="finances">Financeiro</NavLink>
        </div>
      </div>
    </div >
  )
}