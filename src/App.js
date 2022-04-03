
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import NotFound from './components/NotFound/NotFound';
import Video from './components/Videos/Video';

function App() {
  
  return (
    <div>
   <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}> </Route>
     <Route path='/video' element={<Video></Video>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     {/* <Route path='/navbar' element={<Navbar></Navbar>}></Route> */}
     <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>

     <Route path='*' element={<NotFound></NotFound>}></Route>

   </Routes>
   </div>
);
}


export default App;






