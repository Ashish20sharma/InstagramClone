import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'

export default function Edit() {
    const auth=JSON.parse(localStorage.getItem('user'))
    const params=useParams()
    const navigate=useNavigate()
    const [editData,seteditData]=useState([])
    const [error,setError]=useState(false)
    const img="http://127.0.0.1:5000/profileImg/"
    const handleEditData=()=>{
        const formData = new FormData();
        formData.append("name", editData.name)
        formData.append("username",editData.username)
        formData.append("image",editData.profileImage)
        formData.append("bio",editData.bio)
        axios.post(`http://127.0.0.1:5000/user/edit/${params.id}`,formData,{ headers: { "Content-Type": "multipart/form-data" } }).then((res,err)=>{
                    if(res.status===200){
                        localStorage.clear()
                        localStorage.setItem('user',JSON.stringify(res.data.result))
                        navigate('/')
                    }else{
                      setError(true)
                    }
        })
    }
    
  return (
    <>
  <div className="w-full min-h-screen bg-zinc-900 text-white py-4">
    <div className="flex justify-between items-center px-4">
      <Link className="text-sm text-blue-500" to="/"><i className="ri-arrow-left-s-line"></i> profile</Link>
      <h2 className="leading-none text-sm">Edit Profile</h2>
      <Link className="text-sm" to="/feed"><i className="ri-home-line"></i> home</Link>
    </div>
    <div className="flex flex-col items-center gap-2 mt-20">
      <div className="image w-20 h-20 bg-sky-100 rounded-full"><img className="image w-20 h-20 bg-sky-100 rounded-full" src={img+auth.profileImage} alt="img" /></div>
    </div>
    <div className="gap-5 px-4 mt-10">
      <h3 className="text-lg leading-none">Edit Account Details</h3>
      <hr className="opacity-30 my-3"/>
      <form className="w-full" onSubmit={(e)=>e.preventDefault()}>
        <input onInput={(e)=>seteditData({...editData,profileImage:e.target.files[0]})} id="imageinput"  type="file" name="image"/>
        <input onChange={(e)=>seteditData({...editData,username:e.target.value})} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder={auth.username} name="username" />
        <input onInput={(e)=>seteditData({...editData,name:e.target.value})} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder={auth.name} name="name"  />
        <textarea onInput={(e)=>seteditData({...editData,bio:e.target.value})} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900 resize-none" placeholder={auth.bio} name="bio"></textarea>
        <input onClick={()=>handleEditData()} className="w-full bg-blue-500 px-3 py-3 rounded-md mt-2" type="submit" value="Update Details"/>
      </form>
    </div>
    {error&&<h5 style={{color:"red"}}>Please fill data.</h5>}
  </div>
  <Footer/>
    </>
  )
}
