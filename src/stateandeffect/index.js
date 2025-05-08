import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import Axixa from './Axixa';
import Test from './Test';
import Returnc from './Returnc';
import List from './List';
import Cd from './Cd';
import X,{Daku as M} from './Effect';
import Myeff from './Myeff';
import Frm from './Frm';
import UserList from './UserList';
const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [
    { product: "Vim bar", price: 59, limit: 3 },
    { product: "Dove", price: 70, limit: 6 },  
    { product: "Lux", price: 40, limit: 16 },
    { product: "Dove", price: 65, limit: 2 },
]
root.render(
  <>
   
    <UserList></UserList>
    {/* <Myeff></Myeff> */}
    {/* <M></M>
    <X></X> */}
    {/* { */}
      {/* // data.map(info => ( */}
        
        {/* <Cd data={data[2]} ></Cd> */}
      {/* )) */}
    {/* } */}
    {/* <List></List> */}
   {/* <Axixa/>
   <Test/>
    <Returnc /> */}
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
