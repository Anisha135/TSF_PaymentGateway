import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="contact">
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get in touch with us!
        </p>
        <div className='input-areas'>
          <form>
            <p>Name</p><input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Your Name'
            /><br/>
            <p>Email Id</p>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <br/>
            <p>Message</p>
            <textarea className='footer-input' name='message' placeholder='Your Message'/><br/>
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TSF
              <i class="fas fa-hands-helping"/>
            </Link>
          </div>
          <small class='website-rights'>TSF © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Footer;
