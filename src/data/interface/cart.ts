import {IProduct} from './product';

export interface ICart {
  id: number;
  product: IProduct;
  jumlahPesan: number;
  totalHarga: number;
  keterangan: string | undefined | null;
  ukuran: string;
}
