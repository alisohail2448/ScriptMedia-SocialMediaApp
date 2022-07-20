import React, { useEffect } from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from '../../Actions/PostAction';


const Posts = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const { posts, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);



  return (
    <div className="Posts">
        {
        loading ? "Fetching Posts..." : posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts