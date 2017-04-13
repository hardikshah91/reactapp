import React from 'react';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Main_banner from './components/Main_banner.jsx';
import Footer from './components/Footer.jsx';

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

export default App;
