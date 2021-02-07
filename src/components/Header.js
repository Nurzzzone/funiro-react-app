import React from 'react';

import { HeaderNav, SearchBar, HeaderButton, Cart, Account } from './index';

import accountImg from '../assets/img/img/profile-img.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link className="header__logo-link" to="/">Funiro.</Link>
          </div>
          <HeaderNav navItem={[
              {
                link: "products",
                title: "Products",
                icon: (
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M15.8333 7.50012L10 13.3335L4.16668 7.50012" 
                        stroke="#3A3A3A" 
                        strokeWidth="1.8" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                link: "rooms",
                title: "Rooms",
                icon: (
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M15.8333 7.50012L10 13.3335L4.16668 7.50012" 
                        stroke="#3A3A3A" 
                        strokeWidth="1.8" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                link: "inspirations",
                title: "Inspirations",
              },
            ]}
          />
          <SearchBar />
          <div className="header__profile">
            <Link
              to="/favourite" 
              className="btn header__profile-button header__profile-button--favorite"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9996 21.0542C-8 10 5.99999 -1.99997 11.9996 5.58809C18 -1.99997 32 10 11.9996 21.0542Z" 
                    stroke="#3a3a3a" 
                    strokeWidth="1.8"/>
              </svg>
            </Link>
            <Cart />
            <Account />
          </div>
          {/* <HeaderButton buttons={[
            {
              buttonType: "favorite",
            },
            {
              buttonType: "account",
              image: accountImg,
            },
          ]}/> */}
        </div>
      </div>
    </header> 
  )
}

export default Header
