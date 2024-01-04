import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const auth=JSON.parse(localStorage.getItem("user"))
  const img = 'http://127.0.0.1:5000/profileImg/'
  return (
    <>
    <div className="footer text-white flex justify-between items-center w-full fixed bottom-0 z-[10] bg-zinc-900 px-10 py-3">
        <Link to="/feed"><i className="text-[1.4rem] ri-home-line"></i></Link>
        <Link to="/search"><i className="text-[1.4rem] ri-search-line"></i></Link>
        <Link to={`/uploadpost/${auth._id}`}><i className="text-[1.4rem] ri-add-box-line"></i></Link>
        <Link to="/">
          <img className="w-6 h-6 bg-zinc-300 rounded-full" src={img+auth.profileImage} alt='img' ></img>
        </Link>
      </div> 
    </>
  )
}
