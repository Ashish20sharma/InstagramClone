import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'

export default function Uploadpost() {
    const params = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [error, setError] = useState(false)
    const handlePost = () => {
        const formData = new FormData();
        formData.append("caption", post.caption)
        formData.append("postImg", post.postImage)
        try{
            axios.post(`http://127.0.0.1:5000/post/upload/${params.id}`, formData, { header: { "Content-Type": "multipart/form-data" } }).then((res, err) => {
                if (res.status === 200) {
                    navigate('/')
                } else {
                    setError(true)
                }
            })
        }catch{
            setError(true)
        }
    }
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white py-3">
                <div className="flex justify-between items-center px-3">
                    <Link className="text-sm text-blue-500" to="/"><i className="ri-arrow-left-s-line"></i> profile</Link>
                    <h2 className="leading-none text-sm">Upload Post</h2>
                    <Link className="text-sm" to="/feed"><i className="ri-home-line"></i> home</Link>
                </div>
                <div className="flex flex-col items-center gap-2 mt-20">
                    <div className="image w-[25vw] h-[25vw] rounded-full border-2 border-zinc-800 flex items-center justify-center">
                        <i className="text-5xl font-light ri-image-line"></i>
                    </div>
                    <button id="selectpic" className="text-blue-500 capitalize">select picture</button>
                </div>
                <form id="uploadform" onSubmit={(e) => e.preventDefault()} className="w-full px-6 py-3 mt-8">
                    <input onInput={(e) => setPost({ ...post, postImage: e.target.files[0] })} type="file" name="image" />
                    <textarea onInput={(e) => setPost({ ...post, caption: e.target.value })} className="px-2 py-1 w-full bg-zinc-900 border-2 h-20 border-zinc-800 resize-none rounded-md outline-none" placeholder="Write a caption..." name="caption"></textarea>
                    <input onClick={() => handlePost()} className="w-full px-2 py-2 bg-blue-500 rounded-md" type="submit" value="Post" />
                </form>
                {error && <h5 style={{ color: "red" }}>Please upload data</h5>}
            </div>
            <Footer />
        </>
    )
}
