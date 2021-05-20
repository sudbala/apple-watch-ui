import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyD1RSQ-wXZQpGhXLfmNahovPbunJ2bxE3g';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 15,
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

// Simplifies making http api requests (GET, POST, etc.) Wrapping in promise to use easily from index.js
export default youtubeSearch;
