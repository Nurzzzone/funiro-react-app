import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav({ navItem }) {
  return (
    <nav className="header__nav">
      <ul className="header__menu">
        {
          navItem.map(function(elem, index) {
            return (
              <li
                key={ index } 
                className="header__menu-item">
                <Link to={ elem.link } className="header__menu-link">
                  <span>{ elem.title }</span>
                  { elem.icon && elem.icon }
                </Link>
              </li>
            )   
          })
        }
      </ul>
    </nav>
  )
}

export default HeaderNav
