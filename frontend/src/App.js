import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CourseList from './components/courses/CourseList.js';
import AddCourse from './components/courses/AddCourse.js';
import EditCourse from './components/courses/EditCourse.js';

import TopicList from './components/topics/TopicList.js';
import AddTopic from './components/topics/AddTopic.js';
import EditTopic from './components/topics/EditTopic.js';

import ListQuis from './components/quis/ListQuis.js';
import AddQuis from './components/quis/AddQuis.js';
import EditQuis from './components/quis/EditQuis.js';

import ListQues from './components/questions/ListQues.js';
import AddQues from './components/questions/AddQues.js';
import EditQues from './components/questions/EditQues.js';

import ListChoice from './components/choices/ListChoice.js';
import AddChoice from './components/choices/AddChoice.js';
import EditChoice from './components/choices/EditChoice.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseList/>}/>
        <Route path='/add' element={<AddCourse/>}/>
        <Route path='/edit/:id' element={<EditCourse/>}/>

        <Route path='/:id' element={<TopicList/>}/>
        <Route path='/:id/add' element={<AddTopic/>}/>
        <Route path='/:id/edit/:idtopic' element={<EditTopic/>}/>

        <Route path='/:id/v/:idtopic' element={<ListQuis/>}/>
        <Route path='/:id/v/:idtopic/add' element={<AddQuis/>}/>
        <Route path='/:id/v/:idtopic/edit/:idquis' element={<EditQuis/>}/>

        <Route path='/:id/v/:idtopic/v/:idquis' element={<ListQues/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/add' element={<AddQues/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/edit/:idques' element={<EditQues/>}/>

        <Route path='/:id/v/:idtopic/v/:idquis/v/:idques' element={<ListChoice/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/v/:idques/add' element={<AddChoice/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/v/:idques/edit/:idch' element={<EditChoice/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
