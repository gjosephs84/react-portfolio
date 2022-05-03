import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import the routes
import Home from './routes/home';
import Projects from './routes/projects';
import Connect from './routes/connect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Browser Router defines the router */}
    <BrowserRouter>
      {/* And here are the routes */}
      <Routes>
        {/* The route path "/", which calls <App /> and contains the navbar, has nested routes for the other elements in the spa */}
        <Route path="/" element={<App />}>
          {/* And here are the nested elements */}
          <Route index element={<Home />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="connect" element={<Connect />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
