import React, { useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Search() {
    const auth=JSON.parse(localStorage.getItem('user'))
    const [search, setSearch] = useState([])
    const [profile, setProfile] = useState([])
    const [searchfeed, setsearchfeed] = useState(true)
    const [profilefeed, setprofilefeed] = useState(false)
    const img = 'http://127.0.0.1:5000/profileImg/'
    const handleSearch = (e) => {
        if (e.target.value) {
            axios.get(`http://127.0.0.1:5000/user/search/${e.target.value}`).then((res, err) => {
                setSearch(res.data.result)
            })
        } else {
            setSearch([])
        }
    }

    const handleSearchprofile = (id) => {
        axios.get(`http://127.0.0.1:5000/user/profilePost/${id}`).then((res, err) => {
            setProfile(res.data.result)
            setsearchfeed(false)
            setprofilefeed(true)
        })
    }

    return (
        <>
            {searchfeed && <div className="w-full min-h-screen bg-zinc-900 px-3 py-4">
                <div
                    className="border-2 border-zinc-800 flex items-center justify-between px-2 py-1 rounded-md">
                    <i className="text-white ri-search-line"></i>
                    <input onInput={(e) => handleSearch(e)} id="inputusername" className="ml-1 w-full bg-zinc-900 outline-none text-zinc-400" type="text" placeholder="search username" />
                </div>
                <div className="users">
                    {search.map((user,index) => {
                        return <div key={index} onClick={() => handleSearchprofile(user._id)} className="outline-none">
                            <div className="text-white flex items-center gap-2 mt-3">
                                <div className="image w-[11vw] h-[11vw] rounded-full overflow-hidden">
                                    <img src={img + user.profileImage} alt="img" />
                                </div>
                                <div className="text">
                                    <h3>{user.username}</h3>
                                    <h4 className="text-xs opacity-30 leading-none">{user.name} </h4>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>}
            {profilefeed && <div className="w-full min-h-screen bg-zinc-900 text-white py-4">
                <div className="nav flex justify-between items-center px-4">
                    <h3 className="text-lg">{profile.username}</h3>
                    <div className="icons flex gap-5">
                        <Link to={`/uploadpost/${auth._id}`}><i className="text-[1.4rem] ri-add-box-line"></i></Link>
                    </div>
                </div>
                <div className="flex justify-between items-center pl-6 pr-[12vw] mt-7">
                    <div className="w-[19vw] h-[19vw] bg-sky-100 rounded-full">
                        <img className="w-[19vw] h-[19vw] bg-sky-100 rounded-full" src={img + profile.profileImage} alt="img" />
                    </div>
                    <div className="stats flex gap-3 items-center justify-between">
                        <div className="flex flex-col items-center justify-center">
                            <h3>{profile.post.length}</h3>
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
                    <h3 className="text-lg mb-1">{profile.name}</h3>
                    {profile.bio && <p className="text-xs tracking-tight opacity-50">{profile.bio}</p>}
                    {!profile.bio && <p className="text-xs tracking-tight opacity-50">Bio</p>}
                </div>
                <div className="posts w-full flex gap-1 py-2 mt-5 flex-wrap">
                    {profile.post.map((post,index) => {
                        return <div key={index} className="post w-[32.5%] h-auto bg-sky-100">
                            <img className="w-full h-full object-cover" src={img + post.postImage} alt="img" />
                        </div>
                    })}
                </div>
            </div>}
            <Footer />
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.2/axios.min.js"></script> */}
        </>
    )
}
