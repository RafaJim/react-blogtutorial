import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/create" element={ <Create /> } />
            <Route path="/blogs/:id" element={ <BlogDetails /> } />
            <Route path="*" element={ <PageNotFound /> }></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}