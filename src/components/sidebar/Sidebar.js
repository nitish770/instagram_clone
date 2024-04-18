import React from 'react'
import "./sidebar.scss";
import data from "../../data"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2>Suggestions For You</h2>
      {data.map((item)=>(
        <div className='sidebarProfile' key={item.id}>
          <div className='img'>
            <img src={item.profile} alt={item.id}/>
            <div className='name'>
              <h3>{item.name}</h3>
              <span>Follows You</span>
            </div>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Sidebar;