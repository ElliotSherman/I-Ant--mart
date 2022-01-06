import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import About from './About';
import Bizcard from './Bizcard';
import Projects from './Projects';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}> // create a navbar on this page with navlinks to the Routes
        <Route path={'main'} element={<Main />} />
        <Route path={'contact'} element={<Bizcard />} />
        <Route path={'projects'} element={<Projects />}>
          <Route path={'signup'} element={<h4>signup</h4>} />
        </Route>
        <Route path={'about'} element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
