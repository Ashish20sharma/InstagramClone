import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Feed() {
    const navigate=useNavigate()
    const auth=JSON.parse(localStorage.getItem("user"))
    const [allPosts, setallposts] = useState([])
    const [like, setLike] = useState([])
    const img = 'http://127.0.0.1:5000/profileImg/'
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/post/allposts').then((res, err) => {
            setallposts(res.data.result.reverse())
        })
    }, [like])

    const handleLikes=(user,post)=>{
        axios.get(`http://127.0.0.1:5000/post/like/post/${user}/${post}`).then((res,err)=>{
            if(res.status===200){
                navigate("/feed")
                setLike(res.data.result.likes)
            }
        })
    }

    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white py-4">
                <div className="w-full px-4 flex items-center justify-between">
                    <img className="w-1/4" src="/images/logo.png" alt="" />
                    <div className="icons -mt-2 flex gap-5 items-center">
                        <i className="text-[1.4rem] ri-heart-3-line"></i>
                        <i className="text-[1.4rem] ri-messenger-line"></i>
                    </div>
                </div>
                <div className="story px-1 flex gap-3 overflow-auto  mt-3" style={{webkitscrollbar:"none"}} >
                    <div className="circle flex-shrink-0">
                        <div
                            className="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
                            <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="circle flex-shrink-0">
                        <div
                            className="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
                        >
                            <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="circle flex-shrink-0">
                        <div
                            className="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
                        >
                            <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="circle flex-shrink-0">
                        <div
                            className="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
                        >
                            <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="circle flex-shrink-0">
                        <div
                            className="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
                        >
                            <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="circle flex-shrink-0">
                        <div
                            className="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
                        >
                            <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts mb-20">
                    {allPosts.map((post, index) => {
                        return <div key={index} className="post mt-8 w-full min-h-[50vh]">
                            <div className="title px-4 flex items-center gap-2">
                                <div className="w-[8vw] h-[8vw] bg-sky-100 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src={img + post.user.profileImage} alt="img" />
                                </div>
                                <h4 className="text-sm">{post.user.username}</h4>
                                <h6 className="text-xs opacity-30">1d</h6>
                            </div>
                            <div className="w-full h-full mt-4 bg-sky-100">
                                <img className="w-full h-full object-cover" src={img + post.postImage} alt="img" />
                            </div>
                            <div
                                className="options w-full px-4 flex justify-between items-center text-[1.4rem]"
                            >
                                <div className="flex gap-3 mt-2">
                                    <div onClick={()=>handleLikes(auth._id,post._id)}>
                                        {post.likes.length > 0 && <i className="ri-heart-3-fill text-red-600"></i>}
                                        {post.likes.length === 0 && <i className="ri-heart-3-line"></i>}
                                    </div>
                                    <i className="ri-chat-3-line"></i>
                                    <i className="ri-share-circle-line"></i>
                                </div>
                                <i className="ri-bookmark-line"></i>
                            </div>
                            <h3 className="px-4 mt-0 text-sm leading-none tracking-tight">{post.likes.length}</h3>
                            <h2 className="text-white font-light text-sm mt-1">
                                <span className="font-semibold pl-4 pr-2">{post.user.username}</span>{post.caption}
                            </h2>
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
