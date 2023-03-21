import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News />} >  </Route>
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}
