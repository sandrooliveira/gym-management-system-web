import { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';
import { People } from './pages/people/People';
import { Finances } from './pages/finances/Finances';
import { AddPerson } from './pages/AddPerson/AddPerson';
import { Sidebar } from './components/sidebar/Sidebar';
import { Search } from './components/search/Search';
import { Backdrop } from './components/backdrop/Backdrop';
import { DrawerContext } from './providers/Drawer';
import { SideBarItem } from './components/sidebar/sidebarItem/SidebarItem';
import { FiUser, FiDollarSign } from 'react-icons/fi';
import { MdSettings, MdExitToApp } from 'react-icons/md';

function App() {
  const { isDrawerOpen, setIsDrawerOpen, setSearchTerm, showSearch } = useContext(DrawerContext);

  const onSearchHandler = (searchedValue: string) => {
    setSearchTerm(searchedValue);
    setIsDrawerOpen(false);
  }

  const backdropClickHandler = () => {
    setIsDrawerOpen(false);
  }

  let drawer;
  let backdrop;

  if (isDrawerOpen) {
    drawer = <div className={classes.drawer}>
      <Sidebar>
        {showSearch && <Search onSearch={onSearchHandler} />}

        <SideBarItem
          icon={FiUser}
          label="Alunos"
          nav={{
            activeRoutes: [ "/", "/add-person" ],
            isExact: true,
            to: "/"
          }} />

        <SideBarItem
          icon={FiDollarSign}
          label="Financeiro"
          nav={{
            activeRoutes: [ "/finances" ],
            to: "/finances"
          }} />

        <SideBarItem
          icon={MdSettings}
          label="Configurações"
        />

        <SideBarItem
          icon={MdExitToApp}
          label="Sair"
        />
      </Sidebar>
    </div>

    backdrop = <Backdrop onClick={backdropClickHandler} />
  }

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Sidebar>
            <SideBarItem
              icon={FiUser}
              label="Alunos"
              nav={{
                activeRoutes: [ "/", "/add-person" ],
                isExact: true,
                to: "/"
              }} />

            <SideBarItem
              icon={FiDollarSign}
              label="Financeiro"
              nav={{
                activeRoutes: [ "/finances" ],
                to: "/finances"
              }} />
          </Sidebar>
        </div>

        {drawer}
        {backdrop}

        <div className={classes.content}>
          <Switch>
            <Route path="/" exact component={People}></Route>
            <Route path="/finances" component={Finances}></Route>
            <Route path="/add-person" component={AddPerson}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
