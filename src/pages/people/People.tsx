import { useState, useContext, useCallback, useEffect } from 'react';
import { MdAddCircle, MdExitToApp, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import classes from './People.module.scss';

import { Card } from '../../components/card/Card';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { PageMenu } from '../../components/pageMenu/PageMenu';
import { Search } from '../../components/search/Search';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { DrawerContext } from '../../providers/Drawer';
import { peopleList } from './people-list';


export interface Person {
  name: string;
  picture: string;
  theme: 'blocked' | 'active' | 'expired';
  footerText: string
}

export const People = () => {
  const [ people, setPeople ] = useState(peopleList);
  const { isDrawerOpen, setIsDrawerOpen, setSearchFunction } = useContext(DrawerContext);

  const onMobileMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const searchHandler = useCallback((searchText: string) => {
    if (searchText === "" || !searchText) {
      setPeople(peopleList);
    } else {
      const filteredPeople = people.filter(person => person.name.includes(searchText));
      setPeople(filteredPeople);
    }
  }, [ people ]);

  useEffect(() => {
    setSearchFunction(() => searchHandler);
  }, [ setSearchFunction, searchHandler ])

  return (
    <div className={classes.container}>

      <PageHeader>
        <PageTitle title="Alunos" />

        <PageMenu mobileMenuClick={onMobileMenuClick}>
          <Search onSearch={searchHandler} />
          <MdSettings />
          <MdExitToApp />
        </PageMenu>
      </PageHeader>

      <div className={classes.addButton}>
        <NavLink to="/add-person"><MdAddCircle /></NavLink>
      </div>

      <div className={classes.cards}>
        {people.map(({ name, picture, theme, footerText }: Person) => {
          return (
            <Card
              key={name}
              name={name}
              picture={picture}
              theme={theme}
              footerText={footerText} />
          )
        })}
      </div>
    </div >
  )
}