import React from 'react';
import classNames from 'classnames';

function HeaderButton({ buttons }) {

  return (
    <div className="header__profile">
      {
        buttons.map(function(elem, index) {
          return (
            <button
              key={index} 
              className={classNames("btn", "header__profile-button", `header__profile-button--${ elem.buttonType }`)}>
                {
                  elem.icon ? 
                  elem.icon : 
                  <img src={ elem.image } alt="profile image"/>
                }
            </button>
          )
        })
      }
    </div>
  )
}

export default HeaderButton
