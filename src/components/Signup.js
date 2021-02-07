import React from 'react'

function Signup() {
  return (
    <div className="modal-signup">
    <div className="modal-signup__content">
      <div className="modal-signup__header">
        <h3 className="modal-signup__title">Sign up</h3>
        <div className="modal-signup__close">
          <span></span>
          <span></span>
        </div>
      </div>
      <form className="modal-signup__body">
        <input className="modal-signup__input" type="email" placeholder="Email" />
        <input className="modal-signup__input" type="text" placeholder="Username" required />
        <input className="modal-signup__input" type="password" placeholder="Password" required />
        <input className="btn modal-signup__btn" type="submit" value="Submit" />
      </form>
    </div>
  </div>
  )
}

export default Signup
