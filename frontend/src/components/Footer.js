import React from 'react';

import '../styles/Footer.css'

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
          </div>
        </div>
        <div className="footerleft">
          <div class="copyright">
          Copyright © 2019 Anh Chau
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
// 1. Copyright Info
// 2. Privacy Policy. https://www.freeprivacypolicy.com/free-privacy-policy-generator.php. Need website url first. Might not be needed. 
// 3. Terms of Use
// 4. Contact Information. Top right of the header. Contact form, not just an email link preferably
// 5. Links to other parts of the website.