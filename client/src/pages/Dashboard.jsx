/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {useContext} from 'react';
import { UserContext } from '../../context/userContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {user} = useContext(UserContext)

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }} transition={{ duration : .5 }}
    className='flex flex-col items-center justify-center p-28 space-y-64'
    >
    <div className='flex flex-col items-center space-y-2'>
        <h1 className='text-3xl font-semibold'>Login was successful 🚀</h1>
        {!!user && (<h2 className='text-[#8692A6]'>Welcome <span className='text-slate-300'>{user.name}</span>! 👋</h2>)}
        </div>
        <div  className="w-1/2 py-3 rounded-md bg-blue-600 text-center">
        <Link to={'/'}><button>Log out</button></Link>
        </div>
    </motion.div>
  )
}

export default Dashboard
