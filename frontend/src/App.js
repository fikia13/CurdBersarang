import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CourseList from './components/CourseList.js';
import AddCourse from './components/AddCourse.js';
import EditCourse from './components/EditCourse.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseList/>}/>
        <Route path='/add' element={<AddCourse/>}/>
        <Route path='/edit/:id' element={<EditCourse/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
