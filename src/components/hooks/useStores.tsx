import { createContext, useContext, useState } from 'react';
import { StoresProviderProps } from '../../interfaces/props';
import { Stores, StoresContextData } from '../../interfaces/types';

import data from '../../data/data.json';

const StoresContext = createContext<StoresContextData>({
  stores: data.stores,
  setSearch: () => console.log(''),
});

export function StoresProvider({ children }: StoresProviderProps) {
  const [stores, setStores] = useState<Stores[]>(data.stores);
  const [search, setSearch] = useState<string | number>('');

  const storesFiltered = stores.filter((store) => {
    if (search === null) {
      return store;
    }
    if (typeof search === 'string') {
      if (store.name.toLowerCase().includes(search.toLowerCase())) {
        return store;
      }
    }
    if (store.revenue >= search) {
      return store;
    }
  });

  return (
    <StoresContext.Provider value={{ stores: storesFiltered, setSearch }}>
      {children}
    </StoresContext.Provider>
  );
}

export const useStores = () => {
  const context = useContext(StoresContext);

  return context;
};
