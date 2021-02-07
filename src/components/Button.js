import React from 'react';
import classNames from 'classnames';

function Button({ buttonClass, title, icon }) {
  return (
    <button 
      className={classNames(
        'btn', 
        {[`btn-${buttonClass.firstClass}`] : buttonClass.firstClass}, 
        {[`${buttonClass.secondClass}`] : buttonClass.secondClass}
      )}
    >
      { title && title }
      { icon && icon }
    </button>
  )
}

export default Button
