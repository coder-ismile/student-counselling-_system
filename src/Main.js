import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
      <>
          
        <Router>
        
          <Routes>
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/aboutcard' element={<AboutCard/>} />
            <Route exact path='/value' element={<Value/>} />
            <Route exact path='/allcourse' element={<AllCourse/>} />
            <Route exact path='/coursedetails' element={<CourseDetails/>} />
            {/* <Route exact path='/courses' element={<CourseHome/>} />
            <Route exact path='/team' element={<Team/>} />
            <Route exact path='/pricing' element={<Pricing/>} />
            <Route exact path='/journal' element={<Blog/>} /> */}
            <Route exact path='/contact' element={<Contact/>} />
          </Routes>
      
          <Footer />
        </Router>
        {/* <AllCourse/> */}
        
      </>
    )
  }
   export default Main 