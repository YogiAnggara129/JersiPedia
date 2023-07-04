import {
  BundesLigaImg,
  LaLigaImg,
  PremierLeagueImg,
  SerieAImg,
} from '../../assets';
import {ILiga} from '../interface/liga';

export const dummyLigas: ILiga[] = [
  {
    id: 1,
    name: 'La Liga',
    image: LaLigaImg,
  },
  {
    id: 2,
    name: 'Premier League',
    image: PremierLeagueImg,
  },
  {
    id: 3,
    name: 'Bundes Liga',
    image: BundesLigaImg,
  },
  {
    id: 4,
    name: 'Serie A',
    image: SerieAImg,
  },
];
