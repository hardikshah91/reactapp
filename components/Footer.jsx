import React from 'react';

class Footer extends React.Component {
   render() {
      return (
         <div>

            <div className="clear-float white footer">
                  <a className="links" href="#">About Us</a>
                  <a className="links" href="#">Terms</a>
                  <a className="links" href="#">Privacy</a>
            </div>

            <div className="clear-float dark-grey footer copyright">
               <p>Copyright&copy; 2017 Finance Mela. All Rights Reserved</p>
            </div>

         </div>
      );
   }
}

export default Footer;