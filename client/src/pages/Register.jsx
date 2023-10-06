/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from 'axios'
import { toast } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { img1,googleLogo } from "../assets/images"



const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
   
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      // Perform your login logic here
     


  const registerUser = async () => {
    // e.preventDefault();
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register',{
        name, email, password
    })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Registration Successful 🤭✅')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  registerUser()

} else {
  toast.error('Please check the box to proceed.');
}
  };

  const googleAuth = () => {
    window.open(
      `${process.env.BACKEND_URL}/auth/google/callback`,
      '_self'
    )
  }

  return (
    <div className="flex flex-row mx-auto mt-5 md:mt-16 space-x-32 h-[500px] justify-between">
    <div className="w-full md:w-[50%]">
    <div className="mt-5"> 
      <h1 className="text-3xl font-semibold">Create an account 👋</h1>
      <p className="text-sm text-slate-400 mt-2">Kindly fill in your details to create an account!</p>
    </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 mr-4">
        <label className='text-sm pb-2 text-[#8692A6]'>Your fullname*</label>
        <input className="text-slate-500 borde mt-2 border-[#8692A6] bg-[#282A2F] active:border-[#5871EB] duration-300 mb-4 w-full h-10 rounded-md pl-3" type='text' placeholder='enter name....' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        <label className='text-sm pb-2 text-[#8692A6]'>Email address*</label>
        <input className="text-slate-500 border mt-2 border-[#8692A6] bg-[#282A2F] active:border-[#5871EB] duration-300 mb-4 w-full h-10 rounded-md pl-3" type='email' placeholder='enter email....' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label className='text-sm pb-2 text-[#8692A6]'>Create password*</label>
        <input className="text-slate-500 border mt-2 border-[#8692A6] bg-[#282A2F] active:border-[#5871EB] duration-300 mb-4 w-full h-10 rounded-md pl-3" type='password' placeholder='enter password....' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <div className="flex items-center space-x-3">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
          <p className="text-base text-[#696F79]">I agree to <Link to="/T&C's">terms & conditions</Link></p>
          </div>
        <button type='submit' className={!isChecked ? "bg-[#32395c] duration-300 text-slate-500 mt-5 py-2 rounded-md" : "bg-[#5871EB] mt-5 py-2 rounded-md duration-300"}>Submit</button>
      </form>
      <div className="flex flex-col mb-5 w-full justify-between items-center pr-3 space-y-3">
      <div className="flex mt-8 mb-5 w-full justify-between items-center">
        <hr className="w-32 md:w-52"/>
        <p className="text-xs md:text-base">Or</p>
        <hr className="w-32 md:w-52"/>
      </div>
        <button onClick={googleAuth} className="flex py-2 text-sm space-x-2 justify-center items-center rounded-md bg-black w-full">
      <img src={googleLogo} className="mr-4"/>
        Sign in with google
      </button>
      <p>
        New Here? <Link to='/register'>Sign Up</Link>
      </p>
      </div>
    </div>
    <div className="hidden md:flex md:items-center mt-11 md:justify-center md:w-[50%]">
        <img src={img1} className="w-auto" />
    </div>
    </div>
  )
}

export default Register