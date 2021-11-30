import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ad35a9f394msh4e589fdba8a0783p1b22d5jsnd7e16d8cb30b',
    },
  });

  return data;
};
