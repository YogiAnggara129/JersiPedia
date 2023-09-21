import {ICart} from './cart';

export interface IOrder {
  id: number;
  tanggalPemesanan: string;
  status: string;
  totalHarga: number;
  berat: number;
  pesanans: ICart[];
}
