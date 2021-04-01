import axios from 'axios';
//youtube api key
const KEY = 'AIzaSyC5BJMCsWXfPEdU_lZx3ELQDlMYowsvNpI';
//fetchinam is youtube api
export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
   }
});

