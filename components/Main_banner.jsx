import React from 'react';

class Main_banner extends React.Component {
   render() {
      return (
         <div>

            <div className="row cyan">
                  <div className="left">
                     <div className="content">
                        <p> Compare and Find the Card</p>
                        <p className="btm-brdr">That fits Your Needs</p>
                     </div>

                     <ul className="content">
                        <li>Credit Cards from top banks</li>
                        <li>Fast &amp; Paperless Approval</li>
                        <li>Upto 10% Cashback</li>
                        <li>Best Reward Points</li>
                     </ul>
                  </div>

                  <img className="overlap-credit-card" src="img/img_credit card.png" alt="credit card"/>

                  <div className="right">
                  
                     <div className="card">
                        
                        <div className="card-header">
                           <img src="img/BB_logo.png" alt="Bank bazaar Logo"/>
                           <p>Save Thousands of &#8377; upees</p>
                        </div>

                        <div className="card-body">
                           <p className="card-text">Choose from 50+ Credit Cards With exclusive benfits.</p>
                           <button className="btn" value="CHECK ELIGIBILITY">CHECK ELIGIBILITY</button>
                        </div>
                        
                     </div>
                     
                  </div>

               </div>

         </div>
      );
   }
}

export default Main_banner;