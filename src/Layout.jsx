import React from 'react'
import { Outlet } from "react-router-dom"

import Sidebar from './Components/Sidebar'
import TopBar from './Components/TopBar'

const  Layout = ()=> {
  return (
    <div className="flex min-h-[100vh] font-poppins">
      <Sidebar />
      {/* main container */}
      <main className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1">
          <Outlet/>
        </div>
      </main>
    </div>
  );
}

export default Layout
