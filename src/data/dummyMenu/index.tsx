import React from 'react';
import {
  ChangePasswordIc,
  EditProfileIc,
  HistoryIc,
  SignOutIc,
} from '../../assets';
import {IMenu} from '../interface/menu';

export const dummyMenu: IMenu[] = [
  {
    id: 1,
    name: 'Edit Profile',
    image: <EditProfileIc />,
    page: 'ProfileEdit',
  },
  {
    id: 2,
    name: 'Change Password',
    image: <ChangePasswordIc />,
    page: 'ChangePassword',
  },
  {
    id: 3,
    name: 'History Pemesanan',
    image: <HistoryIc />,
    page: 'History',
  },
  {
    id: 4,
    name: 'Sign Out',
    image: <SignOutIc />,
    page: 'Login',
  },
];
