import React from 'react'

import { Button } from './index';

function Singin() {
  return (
    <div className="modal-login">
    <div className="modal-login__content">
      <div className="modal-login__header">
        <h3 className="modal-login__title">Sign in</h3>
        <div className="modal-login__close">
          <span></span>
          <span></span>
        </div>
      </div>
      <form className="modal-login__body">
        <input className="modal-login__input" type="text" placeholder="Username" required />
        <input className="modal-login__input" type="password" placeholder="Password" required />
        <input className="btn modal-login__btn" type="submit" value="Submit" />
        <input className="btn modal-login__btn" type="submit" value="Sign up" />
      </form>
    </div>
  </div>
  )
}

export default Singin
