import React from 'react';
import './App.css';

const Header = () => <h1 className="text-3xl font-bold underline">Header</h1>
const MainContent = () => <h1>Main Content</h1>
const Footer = () => <h1>Footer</h1>

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App;
