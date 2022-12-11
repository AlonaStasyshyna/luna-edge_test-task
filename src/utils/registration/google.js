import axios from 'axios';

axios.defaults.baseURL = 'https://vast-basin-98801.herokuapp.com';

export const google = async () => {
  const { data } = await axios.get('/google');
  console.log(data.token);
  return data.token;
};
