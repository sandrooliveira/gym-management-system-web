import { useState } from 'react';
import { MdAddCircle, MdExitToApp, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import classes from './People.module.scss';

import { Card } from '../../components/card/Card';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { PageMenu } from '../../components/pageMenu/PageMenu';
import { Search } from '../../components/search/Search';
import { PageTitle } from '../../components/pageTitle/PageTitle';

interface Person {
  name: string;
  picture: string;
  theme: 'blocked' | 'active' | 'expired';
  footerText: string
}

export const People = () => {
  const peopleList: Person[] = [
    {
      name: "Aliciana do Carmo Lopes",
      picture: require('../../assets/images/aliciana.jpg').default,
      theme: "blocked",
      footerText: "Acesso Bloqueado"
    },
    {
      name: "André Lopes Reis",
      picture: require('../../assets/images/face1.png').default,
      theme: "active",
      footerText: "Acesso Liberado até 20/07/2021"
    },
    {
      name: "Carmem Lucia Faria",
      picture: require('../../assets/images/face2.jpg').default,
      theme: "expired",
      footerText: "Período de acesso vencido em 20/05/2021",
    }
  ]

  const [ people, setPeople ] = useState(peopleList);

  const onSearchHandler = (searchedValue: string) => {
    if (searchedValue === "") {
      setPeople(peopleList);
    } else {
      const filteredPeople = people.filter(person => person.name.includes(searchedValue));
      setPeople(filteredPeople);
    }
  }

  return (
    <div className={classes.container}>

      <PageHeader>
        <PageTitle title="Alunos"/>

        <PageMenu>
          <Search onSearch={onSearchHandler} />
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
    </div>
  )
}