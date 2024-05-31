import React, { useEffect, useState } from 'react'
import logo from '../../Assets/logo.png'

function Sidebar() {
  
    const [sidebarOpen, SetsidebarOpen]= useState(false);
    const opensidebar=()=>{
        SetsidebarOpen(true)
    }
    const closesidebar=()=>{
        SetsidebarOpen(false)
    }
    useEffect(()=>{
        const handleOutsideClick=(e)=>{
            if(sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('open-btn')){
                closesidebar()
            }
        }
        document.addEventListener('click' , handleOutsideClick)
        return()=>{
            document.removeEventListener('click' , handleOutsideClick)
        }
    },[sidebarOpen])
    const user=1;
    return (
    <>
    <div className='App2 -mt-2 overflow-hidden'>
    <img src={logo} alt=''/>      
    </div>
    <div className={`sidebar ${sidebarOpen ? 'open':""}`}>
    <span className='cursor-pointer close-btn' onClick={closesidebar}>
        &times;
    </span>

    </div>
    </>
  )
}

export default Sidebar
