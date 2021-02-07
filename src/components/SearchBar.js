import React from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <form className="header__form">
      <label 
        className="header__form-icon" 
        htmlFor="input-search">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M16.6666 16.6667L12.5801 12.5802M12.5801 12.5802C13.5604 11.6 14.1666 10.2458 14.1666 8.75004C14.1666 5.7585 11.7415 3.33337 8.74998 3.33337C5.75844 3.33337 3.33331 5.7585 3.33331 8.75004C3.33331 11.7416 5.75844 14.1667 8.74998 14.1667C10.2458 14.1667 11.5999 13.5604 12.5801 12.5802Z" 
                stroke="#333333" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
          </svg>
      </label>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={ searchValue } 
        className="header__form-search" 
        id="input-search" 
        type="text" 
        placeholder="Search for minimalist chair"/>
    </form>
  )
}

export default SearchBar
