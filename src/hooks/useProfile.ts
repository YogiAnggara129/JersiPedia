import {useState, useEffect} from 'react';
import {dummyProfile} from '../data/dummyProfile';
import {IProfile} from '../data/interface/profile';

export default function useProfle() {
  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    setProfile(dummyProfile);
  }, []);

  return profile;
}
