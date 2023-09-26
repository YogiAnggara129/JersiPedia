// import {GET_USER} from '../../actions/UserAction';
// import {IProfile} from '../../data/interface/profile';

// const initialState: IProfile = {
//   dataUser: {
//     name: '',
//     email: '',
//     phoneNumber: '',
//     address: '',
//     city: '',
//     province: '',
//     avatar: undefined,
//   },
// };

// export default function UserReducer(state = initialState, action: any) {
//   switch (action.type) {
//     case GET_USER:
//       return {
//         ...state,
//         dataUser: action.payload,
//       };
//     default:
//       return state;
//   }
// }

import {createSlice} from '@reduxjs/toolkit';
import {IProfile} from '../../data/interface/profile';
import {RootState} from '../store';

const initialState: IProfile = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: state => ({
      ...state,
      name: 'Yogi',
      email: 'yogianggaraaa@gmail.com',
    }),
  },
});

export const {getUser} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const user = (state: RootState) => state.user;

export default userSlice.reducer;
