import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header'
import Footer from './components/footer'
import List from './list/lists';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <Header />
    <div className='app-body'>
      <List /> 
    </div>
    <Footer />
  </div>,
);


