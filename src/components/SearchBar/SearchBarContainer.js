import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className='fa-instagram' href='..IgLogo.png' alt="instagram logo"  />
      
      <div>
        <input type="text" placeholder="Search" />
          <i className='fa fa-search'/>
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