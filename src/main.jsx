<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import './index.css'
// import Layout from './Layout.jsx'   // 🔹 हे import करावं लागेल
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Layout />,
// //     children: [
// //       {
// //         path: "",
// //         element: <Home />
// //       },
// //       {
// //         path: "about",
// //         element: <About />
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact />
// //       },
// //       // {
// //       //   path: "user/:userid",
// //       //   element:<User/>
// //       // }
// //       <Router path='user/:userid' element={<Contact/>} />
// //     ]
// //   }
// // ])


//  const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Router path='/' element={<Layout/>} >
//     <Router path='' element={<Home/>} />
//     <Router path='about' element={<About/>} />
//     <Router path='user/:userid' element={<Contact/>} />
//    </Router>

//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
// import './index.css'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'  


// function Github() {
//   return <h1 className="p-4 text-2xl">Github Page</h1>
// }


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>} >
//       <Route index element={<Home/>} /> {/* path="" साठी */}
//       <Route path='about' element={<About/>} />
//       <Route path='contact' element={<Contact/>} />
//       <Route path='user/:userid' element={<User/>} />
//       <Route 
//         loader={ () =>{
          
//         }} path='github' element={<Github/>} /> 
//       </Router>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />         {/* path="/" */}
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      {/* <Route path='github' element={<Github/>} />    */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
>>>>>>> d21db164251283cbf9a12ded290353257fbebeb9
