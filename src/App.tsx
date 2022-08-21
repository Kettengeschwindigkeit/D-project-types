import React from 'react';
import './App.css';
import { MainContent } from './components/MainContent';
import { categories } from './data/data';

const Header = () => {
  return (
    <div className="bg-gray-300">
      <h1>Header</h1>
      <button className="py-2 px-4 border rounded bg-gray-400">Sign In</button>
    </div>
  )
}

const Footer = () => <h1 className="bg-gray-300">Footer</h1>

function App() {
  return (
    <>
      <Header />
      <MainContent categories={categories} />
      <Footer />
    </>
  )
}

export default App;
