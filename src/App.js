import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './page/login/login';
import { publicRoutes } from './router/index';
import Profile from './page/home/profile/profile';


function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Router>
          {publicRoutes.map((route, index) =>{
            const Page = route.home
            return(
              <Route key={index} path = {route.path} element = {<Page/>}/>)  
          })}
        </Router>
        {/* <Profile/> */}
      </div>
    </ThemeProvider>

  );
}

export default App;
