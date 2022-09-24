import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Components/Main';
import Footer from './Components/Footer'

function App(){
  return(
   <div className='outer--frame'>
    <Main />
    <Footer />
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
