
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/myRoutes/Home';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import { Masters } from './components/myRoutes/Masters';
import { Blaster } from './components/myRoutes/Blaster';
import { Faster } from './components/myRoutes/Faster';
import Todos  from './async/Todos';
import UserInfo from './components/UserInfo';
 import Persons from './components/Persons';
import News from './newsComponents/News';
import UseReducers from './components/Hooks/UseReducers';
 import { RefDemo } from './components/Hooks/RefDemo';
import ScrollinguseRef from './components/Hooks/ScrollinguseRef';
import UseMemoExample from './components/Hooks/UseMemoExample';   
import MyNavbar from './components/myRoutes/MyNavbar';
import ContextAPI from './contextApi/ContextAPI';
import CustomHookExample from './components/Hooks/CustomHookExample';
   
  const App = () => {
    return (
        <>
        <div className='App'>
              <BrowserRouter>
                <MyNavbar /><br />
                <Routes>
                    <Route path="/home" element={<Home />} >
                        <Route index element={<Masters />} />
                        <Route path='blaster' element={<Blaster />} />
                        <Route path='faster' element={<Faster />} />
                    </Route>
                    <Route path="person" element={<Persons />} />
                    <Route path="/contextapi" element={<ContextAPI />} />
                    <Route path="userinfo" element={<UserInfo />} />
                    <Route path="reducers" element={<UseReducers />} />
                    <Route path="refdemo" element={<RefDemo />} />
                    <Route path="scrolltopbottom" element={<ScrollinguseRef />} />
                    <Route path="usememo" element={<UseMemoExample />} />
                    <Route path="customehook" element={<CustomHookExample />} />

                    <Route path="news" element={<News />} />
                    <Route path='todos' element={<Todos />} />
                    <Route path='shopping' element={<Todos />} />

                </Routes>
            </BrowserRouter>
         </div>
        </>
    );
};

export default App;
