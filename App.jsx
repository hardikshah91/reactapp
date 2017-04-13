import React from 'react';

class App extends React.Component {
   render() {
      return (
            <div>
               <Header />
               <Main_banner />
               <Content />
               <Footer />
            </div>   

      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>

            <div className="header">
               <img className="logo" src="img/Finance-Mela_Logo.png" alt="Finance-Mela-Logo"/>
            </div>

         </div>
      );
   }
}

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

class Content extends React.Component {
   render() {
      return (
         <div>

            <div className="wrapper">
               <div className="contain white">
                  <div className="compre-card">
                     <img src="img/img_compare cards.png" alt="compare cards"/>
                     <p>Compare cards</p>
                  </div>

                  <div className="get-card">
                     <img src="img/img_get a card.png" alt="get a card"/>
                     <p>Get a card</p>
                  </div>

                  <div className="user-review">
                     <img src="img/img_user reviews.png" alt="user reviews"/>
                     <p>User reviews</p>
                  </div>
               </div>
            </div>

         </div>
      );
   }
}

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

export default App;
