import React from 'react'
import "./posts.scss";
import data from "../../data";
import Post from '../post/Post';
const Posts = () => {
  return (
    <div className='posts'>
      {data.map((item)=>(
        <Post item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Posts;