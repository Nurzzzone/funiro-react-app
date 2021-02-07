import React from 'react'

import ProfileImg from '../assets/img/img/profile-img.png'
import Button from './Button';

function Account() {
  const [ loginPopup, setLoginPopup ] = React.useState(false);
  const accountRef = React.useRef(null);

  const clickOutsideAcc = (e) => {
    if(!e.path.includes(accountRef.current)) {
      setLoginPopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', clickOutsideAcc)
  }, [])

  return (
    <>
      <button
        ref={accountRef}
        onClick={() => setLoginPopup(!loginPopup)} 
        class="btn header__profile-button header__profile-button--account"
      >
        <img 
          src={ ProfileImg } 
          alt="profile image" 
        />
      </button>
      {loginPopup && 
        <div class="header__profile-account">
          <div class="header__profile-account-content">
            <Button 
              buttonClass={{
                firstClass: "login",
                secondClass: "header__profile-account-button"
              }}
              title="Sign in"
            />
            <Button 
              buttonClass={{
                firstClass: "login",
                secondClass: "header__profile-account-button"
              }}
              title="Sign up"
            />
          </div>
        </div>
      }
    </>
  )
}

export default Account
