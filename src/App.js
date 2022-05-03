import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <div>
     <NavigationBar/>
     <br/>
     <div>
       <Outlet />
     </div>
   </div>
  );
}

export default App;
