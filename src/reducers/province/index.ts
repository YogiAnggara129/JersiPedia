import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import axios from 'axios';
import Config from 'react-native-config';
import {IFetchStatus} from '../../data/interface/status';
import {IProvince} from '../../data/interface/province';

interface IProvinceState {
  fetchStatus: IFetchStatus;
  data: IProvince[] | undefined;
}

const initialState: IProvinceState = {
  fetchStatus: {
    status: 'LOADING',
  },
  data: [],
};

export const getProvincies = createAsyncThunk('province/get', async () => {
  console.log('getProvincies');
  console.log(Config.RAJAONGKIR_BASE_URL);
  // const response = await axios.get(`${Config.RAJAONGKIR_BASE_URL}/province`, {
  //   headers: {key: Config.RAJAONGKIR_API_KEY},
  // });
  const data = await axios
    .get('https://api.rajaongkir.com/starter/province', {
      // timeout: 120000,
      headers: {key: '6661ab4f3d65762dd5adfbf8161e1791'},
    })
    .then(res => {
      console.log(res.data);
      return res.data.rajaongkir.results as IProvince[];
    })
    .catch(e => {
      console.log('ERROR: ' + String(e));
      return undefined;
    });
  console.log('response.data: ');
  console.log(data);
  return data;
});

const provinceSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProvincies.pending, state => {
        state.fetchStatus.status = 'LOADING';
      })
      .addCase(getProvincies.fulfilled, (state, action) => {
        state.fetchStatus.status = 'SUCCESS';
        state.data = action.payload;
      })
      .addCase(getProvincies.rejected, (state, _) => {
        state.fetchStatus.status = 'FAILED';
      });
  },
});
// export const {getUser} = provinceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const province = (state: RootState) => state.province;

export default provinceSlice.reducer;
