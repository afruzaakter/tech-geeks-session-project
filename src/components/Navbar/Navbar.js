import React from "react";
import { NavLink, useLocation, } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

// import { useLocation } from "react-router-dom";


const Navbar = () => {
  const {pathname} = useLocation();
  console.log(pathname);

  return (

 <nav style={pathname.includes('blog') ? {display: 'none'} : {display: 'flex'}}>
     <div className="logo-container">
         <img src={Logo} alt="" />
     </div>
     <div className="link-container">
   <NavLink className={({ isActive }) => (isActive ? "active-link": "link")} to='/'>Home
   </NavLink>
   <NavLink className={({ isActive }) => (isActive ? "active-link": "link")} to='/video'>Video
   </NavLink>
   <NavLink className={({ isActive }) => (isActive ? "active-link": "link")} to='/login'>Login
   </NavLink>
     </div>
 </nav>



    //new system

    // <nav
    //   style={
    //     pathname.includes("blog") ? { display: "none" } : { display: "flex" }
    //   }
    // >
    //   <div className='logo-container'>
    //     <img src={Logo} alt='' />
    //   </div>
    //   <div className='link-container'>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? "active-link" : "link")}
    //       to='/'
    //     >
    //       Home
    //     </NavLink>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? "active-link" : "link")}
    //       to='/videos'
    //     >
    //       Videos
    //     </NavLink>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? "active-link" : "link")}
    //       to='/login'
    //     >
    //       Login
    //     </NavLink>
    //   </div>
    // </nav>
  );
};

export default Navbar;