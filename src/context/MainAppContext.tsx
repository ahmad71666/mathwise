import React, { Dispatch, SetStateAction, useState } from 'react';
import { ReactNode } from 'react';

interface MainAppContextProps {
  children: ReactNode;
}

export interface MainAppContextType {
  subjectsData: any[];
  setSubjectsData: Dispatch<SetStateAction<any[]>>;
}

const MainAppContext = React.createContext<MainAppContextType | null>(null);

export const useMainApp = (): MainAppContextType | null => {
  return React.useContext(MainAppContext);
};

export const MainAppProvider: React.FC<MainAppContextProps> = ({ children }) => {
  const [subjectsData, setSubjectsData] = useState<any[]>([]);

  return (
    <MainAppContext.Provider value={{ subjectsData, setSubjectsData }}>
      {children}
    </MainAppContext.Provider>
  );
};
