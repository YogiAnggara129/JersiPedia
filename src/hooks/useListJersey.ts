import {useEffect, useState} from 'react';
import {dummyJerseys} from '../data/dummyJerseys';
import {IJersey} from '../data/interface/jersey';
import {ILiga} from '../data/interface/liga';

export default function useListJersey(liga?: ILiga) {
  const [jerseys, setJerseys] = useState<IJersey[]>([]);
  useEffect(() => {
    setJerseys(dummyJerseys);
    // setJerseys(
    //   liga
    //     ? dummyJerseys.filter(jersey => jersey.liga.id === liga.id)
    //     : dummyJerseys,
    // );
  }, [liga]);
  return jerseys;
}
