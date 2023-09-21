import {useEffect, useState} from 'react';
import {dummyPesanans} from '../data/dummyPesanans';
import {IOrder} from '../data/interface/order';

export default function useListOrder() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    setOrders(dummyPesanans);
  }, []);

  return orders;
}
