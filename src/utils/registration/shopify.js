import axios from 'axios';

axios.defaults.baseURL = 'https://vast-basin-98801.herokuapp.com';

export const shopify = async userName => {
  const { data } = await axios.get(`/shopify?name=${userName}`);
  return data.token;
};
