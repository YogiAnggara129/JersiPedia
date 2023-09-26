export const GET_USER = 'GET_USER';

export const getUser = () => {
  console.log('MASUK REDUCER');
  return (dispatch: any) => {
    dispatch({
      type: 'GET_USER',
      payload: {
        nama: 'Yogi',
        email: 'yogianggaraaa@gmail.com',
      },
    });
  };
};
