import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
   //inputo fieldas yra tuscias
   const [term, setTerm] = useState('');

   //perduoda inputo pasikeitimus irasant teksta
   const onInputChange = (event) => {
      setTerm(event.target.value);
   };
   //pateikiant forma atlieka tai kas nurodyta funkcijoje
   const onSubmit = (event) => {
      event.preventDefault();
      //kvietimas is tevinio componento(app.js)
      onFormSubmit(term);
   };

   return (
      <div className="search-bar ui segment">
         {/* onSubmit stebi kada vartotojas pateikia forma */}
         <form onSubmit={onSubmit} className="ui form">
            <div className="field">
               <label>Video Search</label>
               <input
                  type="text"
                  //perduodama verte i inputo value is state 
                  value={term}
                  //event handler onChange pasaukia onInpitChange funkcija
                  onChange={onInputChange}
               />
            </div>
         </form>
      </div>
   );
};

export default SearchBar;