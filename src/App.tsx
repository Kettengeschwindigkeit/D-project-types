import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { categories } from './data/data';
import { ICategory } from './models';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  // const [categories, setCategories] = useState<ICategory[]>([])
  // const [loading, setLoading] = useState(false)

  // async function fetchCategories() {
  //   setLoading(true)
  //   const response = await axios.get<ICategory[]>('http://localhost:5000')
  //   setCategories(response.data)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage categories={categories} />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
      {/* {loading && <p className='text-center'>Loading...</p>} */}
      <Footer />
    </>
  )
}

export default App;
