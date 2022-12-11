import axios from 'axios';

axios.defaults.baseURL = 'https://vast-basin-98801.herokuapp.com';

export const register = async userData => {
  const { data } = await axios.post('/register', userData);
  return data;
};
