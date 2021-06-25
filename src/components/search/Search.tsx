import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

import classes from './Search.module.scss';

interface SearchProps {
  onSearch: Function
}

export const Search = (props: SearchProps) => {
  const searchedValue = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    props.onSearch(searchedValue.current?.value);
  }

  return (
    <div className={classes.search}>
      <input ref={searchedValue} placeholder="Pesquisar..." />
      <div className={classes.searchIcon}>
        <FiSearch onClick={handleSearch} className={classes.icon} />
      </div>
    </div>
  );
}