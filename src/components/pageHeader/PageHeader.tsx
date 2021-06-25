import { MdExitToApp, MdSettings } from 'react-icons/md';

import classes from './PageHeader.module.scss';

import { Search } from '../../components/search/Search';

interface PageHeaderProps {
  onSearch: Function
}

export const PageHeader = (props: PageHeaderProps) => {
  const searchHandler = (searchedValue: string) => {
    props.onSearch(searchedValue);
  };

  return (
    <header className={classes.header}>
      <span>Alunos</span>

      <div className={classes.options}>

        <Search onSearch={searchHandler} />

        <MdSettings />

        <MdExitToApp />

      </div>
    </header>
  );
}