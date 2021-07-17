import { BrowserRouter, Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';
import { People } from './pages/people/People';
import { Finances } from './pages/finances/Finances';
import { AddPerson } from './pages/AddPerson/AddPerson';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <div className={classes.content}>
        <Switch>
          <Route path="/" exact component={People}></Route>
          <Route path="/finances" component={Finances}></Route>
          <Route path="/add-person" component={AddPerson}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
