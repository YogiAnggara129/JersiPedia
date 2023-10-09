import {useEffect} from 'react';
import {getProvincies, province} from '../reducers/province';
import {useAppSelector, useAppDispatch} from './redux';

export default function useProvincies() {
  const provinceData = useAppSelector(province);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProvincies());
  }, [dispatch]);

  const result = {...provinceData};

  return result;
}
