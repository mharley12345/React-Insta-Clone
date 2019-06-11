import React from 'react';

import { i } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

const SearchBar = () => {
  return (

    <div className="search-bar-wrapper">
      <div className='fa-instagram' id='igLogo'alt="instagram logo"  />
     
      <div>
        <input type="text" placeholder="Search" />
        <button onSubmit="alert:No Match Found">
                  <i className='fa fa-search'  />
                  </button>
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;