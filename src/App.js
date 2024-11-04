import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
