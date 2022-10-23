import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '11b88cc64emsh3e07598415a0f0cp1c5c58jsn3531bde8bf53',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};
