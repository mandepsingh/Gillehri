import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form'
import Auth from './components/Auth/Auth';

import { useState } from 'react';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const [currentId, setCurrentId] = useState(0);
  

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar setCurrentId= {setCurrentId}/>
        <Routes>
          <Route path="/" exact element={<Navigate replace to="/posts" />} />
          <Route path="/upload" exact element={<Form currentId={currentId} setCurrentId={setCurrentId}/>} />
          <Route path="/posts" exact element={<Home setCurrentId={setCurrentId}/>} />
          <Route path="/posts/search" exact element={<Home/>} />
          <Route path="/posts/:id" exact element={<PostDetails/>} />
          <Route path="/auth" exact element={(!user ? <Auth /> : <Navigate to="/posts" />)} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;