import {useEffect, useState} from 'react';
import {IMenu} from '../data/interface/menu';
import {dummyMenu} from '../data/dummyMenu';

export default function useListMenu() {
  const [menus, setMenus] = useState<IMenu[]>([]);

  useEffect(() => {
    setMenus(dummyMenu);
  }, []);

  return menus;
}
