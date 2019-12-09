import React from 'react';

import '../styles/Footer.css';
import Logo from '../img/simmons-bktagline-2.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footerBG">
        <div className="footerright">
          <div id="ftr-contact">
            Anh D. Chau, Ph.D.
            <br></br>
                        334-208-8342
            <br></br>
            <a href="mailto:achau@ufl.edu">achau@ufl.edu</a>
            <br></br>
            457 Weil Hall
          </div>
        </div>
        <div className="footerleft">
          <div class="copyright">
          Copyright © 2019 Anh Chau
          </div>
          <img src={Logo} width="222" height="40"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
