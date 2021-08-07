import React, { ReactNode, useState } from 'react';

interface DrawerContextData {
  isDrawerOpen: boolean,
  setIsDrawerOpen(isOpen: boolean): void,
  searchTerm: string,
  setSearchTerm(searchFunction: string): void,
  showSearch: boolean,
  setShowSearch(showSearch: boolean): void
}

export const DrawerContext = React.createContext<DrawerContextData>({} as DrawerContextData);

export const DrawerProvider: React.FC<ReactNode> = props => {
  const [ showSearch, setShowSearch  ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, searchTerm, setSearchTerm, showSearch, setShowSearch }}>
      {props.children}
    </DrawerContext.Provider>
  );
}