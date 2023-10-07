/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
 
axios.defaults.baseURL = 'http://z-emeka-project1-api.vercel.app/';
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <div className='container mx-auto'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
      </div>
    </UserContextProvider>
  )
}

export default App
