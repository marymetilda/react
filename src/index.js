import React from 'react';
import ReactDOM from 'react-dom';
import Listitem from './list/listItem';
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.render(
  <div className='app'>
    <Header />
    <div className='app-body'>
      <div className='app-list'>
      <Listitem />
      <Listitem />
        <Listitem />
        <Listitem />
      </div>
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
);


