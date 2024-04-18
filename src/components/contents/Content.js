import React from 'react'
import "./content.scss";
import Header from '../header/Header';
import Sidebar from "../sidebar/Sidebar";
import Posts from '../posts/Posts';

const Content = () => {
  return (
    <div className='content'>
    
    <div className='left'>
    <Header/>
    <Posts/>
    </div>
    <div className='right'>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Content;