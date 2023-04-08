import axios from 'axios';

const API_KEY = '35068915-6f531fe4c920c3a2931c1aa3f';
const URL = 'https://pixabay.com/api/';

export default async function fetchImages(searchValue, currentPage) {
  try {
    const response = await axios.get(`${URL}`, {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        page: currentPage,
        per_page: 40,
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    throw new Error(error.message);
  }
}
