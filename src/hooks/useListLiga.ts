import {useState, useEffect} from 'react';
import {dummyLigas} from '../data/dummyLigas';
import {ILiga} from '../data/interface/liga';

export default function useListLiga(onLigaFetched?: (ligas: ILiga[]) => void) {
  const [listLiga, setListLiga] = useState<ILiga[]>([]);
  useEffect(() => {
    setListLiga(dummyLigas);
    if (onLigaFetched) {
      onLigaFetched(dummyLigas);
    }
  }, [onLigaFetched]);

  return listLiga;
}
