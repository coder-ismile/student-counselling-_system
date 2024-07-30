import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Value from "./components/value/Value"
import AllCourse from "./components/Course/AllCourse"
import CourseDetails from "./components/Course/CourseDetails"
import AboutCard from "./components/about/AboutCard"
import Login from './components/signUp_In/Login'
import Register from './components/signUp_In/Register'
const RoutAllfile=()=>{
    return(
        <>
        <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} /> 
          <Route exact path='/register' element={<Register/>} /> 
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/aboutcard' element={<AboutCard/>} />
          <Route exact path='/value' element={<Value/>} />
          <Route exact path='/allcourse' element={<AllCourse/>} />
          <Route exact path='/coursedetails' element={<CourseDetails/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>

      </Router>
        </>
    )

}
export default RoutAllfile