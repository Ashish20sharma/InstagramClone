import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'

export default function Profile() {
    const [profilePost, setProfilepost] = useState([])
    const img = 'http://127.0.0.1:5000/profileImg/'
    const navigate = useNavigate()
    const auth = JSON.parse(localStorage.getItem('Instauser'))
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    };

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/user/profilePost/${auth._id}`).then((res, err) => {
            setProfilepost(res.data.result.post)
        })
    }, [auth._id])
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white py-4">
                <div className="nav flex justify-between items-center px-4">
                    <h3 className="text-lg">{auth.username}</h3>
                    <div className="icons flex gap-5">
                        <Link to={`/uploadpost/${auth._id}`}><i className="text-[1.4rem] ri-add-box-line"></i></Link>
                        <button onClick={() => handleLogout()} className="w-full bg-blue-500 px-2 py-1 rounded-md ">Logout</button>
                    </div>
                </div>
                <div className="flex justify-between items-center pl-6 pr-[12vw] mt-7">
                    <div className="w-[19vw] h-[19vw] bg-sky-100 rounded-full">
                        <img className="w-[19vw] h-[19vw] bg-sky-100 rounded-full" src={img + auth.profileImage} alt="img" />
                    </div>
                    <div className="stats flex gap-3 items-center justify-between">
                        <div className="flex flex-col items-center justify-center">
                            <h3>{profilePost.length}</h3>
                            <h4>Posts</h4>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>500M</h3>
                            <h4>Followers</h4>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>0</h3>
                            <h4>Following</h4>
                        </div>
                    </div>
                </div>
                <div className="dets px-6 mt-3">
                    <h3 className="text-lg mb-1">{auth.name}</h3>
                    {auth.bio && <p className="text-xs tracking-tight opacity-50">{auth.bio}</p>}
                    {!auth.bio && <p className="text-xs tracking-tight opacity-50">Bio</p>}
                </div>
                <div className="px-6 mt-3">
                    <Link className="px-3 py-2 bg-zinc-800 text-xs rounded-md" to={`/edit/${auth._id}`}>Edit Profile</Link>
                </div>
                <div className="posts w-full flex gap-1 py-2 mt-5 flex-wrap">
                    {profilePost.map((post,index) => {
                        return <div key={index} className="post w-[32.5%] h-auto bg-sky-100">
                            <img className="w-full h-full object-cover" src={img + post.postImage} alt="img" />
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
