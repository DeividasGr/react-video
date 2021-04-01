//custom hook, kuris pagal duota inputa suranda ir grazina
//lista itemu

import { useState, useEffect } from 'react';
import Youtube from '../apis/Youtube';

const useVideos = (defaultSearchTerm) => {
   //i array bus dedami paieskos rezultatai
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      search(defaultSearchTerm);
   }, [defaultSearchTerm]);

   //kiekviena karta kai submitina forma
   const search = async (term) => {
      const { data } = await Youtube.get('/search', {
         params: {
            q: term
         }
      });
      //ideda i videos masyva gautus paieskos rezultatus
      setVideos(data.items);
   };

   return [videos, search];
};

export default useVideos;

