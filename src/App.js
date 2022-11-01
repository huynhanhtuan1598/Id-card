import React, { useEffect, } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/login/login';
import { publicRoutes } from './router/index';
import Profile from './page/home/profile/profile';
import userApi from './api/userApi';
import axios from 'axios';
import axiosClient from './api/axiosClient';


function App() {


  // fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  // //           .then(json=>console.log(json))
  // useEffect(() => {
  //   // const response = axiosClient.get(`/auth/get_tokens?username=ninh&password=123@Enmasys`)
  //   const fetchUserlist = async () => {
  //     await axios({
  //       method: 'get',
  //       url: `/auth/get_tokens?username=ninh&password=123@Enmasys`,
  //     }).then((data) => {
  //       console.log(data)
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  //   }
  //   fetchUserlist();
  // })

  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Routes>
          {publicRoutes?.map((route, index) => {
            const Page = route.component
            return (
              <Route key={index} path={route.path} element={<Page />} />)
          })}
        </Routes>
      </ThemeProvider>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
