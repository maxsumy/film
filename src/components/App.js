import React from 'react';
import { CssBaseline } from '@mui/material';
//import {Route, Switch} from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
//  Link,
} from "react-router-dom";
import {Actors, MovieInformation, Movies, NavBar, Profile} from './'

const App = () => {
  return (
    

    <div>
        <CssBaseline/>
        <NavBar/>
        <main>
          <BrowserRouter> 
            <Routes>         
                   
              <Route path="/movie/:id" element={<MovieInformation/>} />     
              <Route path="/actors/:id" element={<Actors/>} />              
              <Route path="/" element={<Movies/>} />
              <Route path="/profile/:id" element={<Profile/>} />

            </Routes>
          </BrowserRouter>
        
        </main>        
    </div>
  )
}

export default App