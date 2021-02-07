import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
            <div className="col">
              <div className="footer__item">
                <h3 className="footer__item-title">Funiro.</h3>
                <p className="footer__item-text">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                <p className="footer__item-text">
                  <span>Sawojajar Malang, Indonesia</span>
                </p>
                <p className="footer__item-text">
                  <span>+6289 456 3455</span>
                </p>
                <p className="footer__item-text">www.funiro.com</p>
              </div>
            </div>
            <div className="col">
              <div className="footer__item">
                <h3 className="footer__item-title">Menu</h3>
                <ul className="footer__item-links">
                  {
                    [
                      {title: 'Products', link: 'products'}, 
                      {title: 'Rooms'}, 
                      {title: 'Inspirations'}, 
                      {title: 'About Us', link: 'about'}, 
                      {title: 'Terms & Policy'}, 
                    ].map((elem, index) => {
                      return <Link className="footer__item-link" to={elem.link && `/${elem.link}`}>{ elem.title }</Link>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer__item">
                <h3 className="footer__item-title">Account</h3>
                <ul className="footer__item-links">
                {
                    [
                      {title: 'My Account', link: 'account'}, 
                      {title: 'Checkout', link: 'checkout'}, 
                      {title: 'My Cart', link: 'checkout'}, 
                      {title: 'My catalog', link: 'favourite'} 
                    ].map((elem, index) => {
                      return <Link className="footer__item-link" to={elem.link && `/${elem.link}`}>{ elem.title }</Link>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer__item">
                <h3 className="footer__item-title">Stay Connected</h3>
                <ul className="footer__item-links">
                  <a className="footer__item-link" href="https://www.facebook.com/">Facebook</a>
                  <a className="footer__item-link" href="https://www.instagram.com/">Instagram</a>
                  <a className="footer__item-link" href="https://twitter.com/">Twitter</a>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer__item">
                <h3 className="footer__item-title">Stay Updated</h3>
                <form action="" className="footer__form">
                  <input className="footer__form-email" type="email" placeholder="Enter your email"/>
                  <Button 
                    buttonClass={{
                      secondClass: 'footer__form-button'
                    }}
                    icon={(
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M20.7825 3.21745C20.6813 3.1167 20.5534 3.04695 20.4139 3.01639C20.2744 2.98584 20.1291 2.99574 19.995 3.04495L3.495 9.04495C3.3527 9.09892 3.23019 9.19491 3.14374 9.32016C3.05729 9.44542 3.01099 9.59401 3.01099 9.7462C3.01099 9.89839 3.05729 10.047 3.14374 10.1722C3.23019 10.2975 3.3527 10.3935 3.495 10.4474L9.9375 13.0199L14.6925 8.24995L15.75 9.30745L10.9725 14.0849L13.5525 20.5275C13.6081 20.667 13.7043 20.7866 13.8286 20.8709C13.953 20.9551 14.0998 21.0001 14.25 20.9999C14.4016 20.9968 14.5486 20.9479 14.6718 20.8595C14.795 20.7711 14.8885 20.6475 14.94 20.5049L20.94 4.00495C20.9911 3.87226 21.0034 3.72777 20.9755 3.58834C20.9477 3.44891 20.8807 3.32028 20.7825 3.21745Z" 
                          fill="white"
                        />
                      </svg>
                    )}
                  />
                </form>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
