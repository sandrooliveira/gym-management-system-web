import React, { ReactNode, useState } from 'react';

interface DrawerContextData {
  isDrawerOpen: boolean,
  setIsDrawerOpen(isOpen: boolean): void,
  searchFunction?: Function,
  setSearchFunction(searchFunction?: Function): void
}

export const DrawerContext = React.createContext<DrawerContextData>({} as DrawerContextData);

export const DrawerProvider: React.FC<ReactNode> = props => {
  const [searchFunction, setSearchFunction] = useState(undefined);
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  return (
    <DrawerContext.Provider value={{isDrawerOpen, setIsDrawerOpen, searchFunction, setSearchFunction }}>
      {props.children}
    </DrawerContext.Provider>
  );
}