import React from 'react';
import CourseDetails from './CourseDetails';

const AllCourseComponent = () => {
  return (
    <div>
       <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<CourseDetails/>} />
       
        </Routes>
    
        <Footer />
      </Router>
    </div>
  );
}

export default AllCourseComponent;
