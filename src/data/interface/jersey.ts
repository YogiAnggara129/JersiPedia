import {ILiga} from './liga';

export interface IJersey {
  id: number;
  nama: string;
  gambar: any[];
  liga: ILiga;
  harga: number;
  berat: number;
  jenis: string;
  ukuran: string[];
  ready: boolean;
}
