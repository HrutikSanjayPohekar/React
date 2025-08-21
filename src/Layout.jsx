import React from 'react'

import Header from './components/Header/Header'
import Footer from  './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default Layout


// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <div>
//       <nav className="p-4 bg-gray-800 text-white flex gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/user/101">User 101</Link>
//       </nav>

//       {/* इथे child route दिसेल */}
//       <Outlet />
//     </div>
//   )
// }

// export default Layout

