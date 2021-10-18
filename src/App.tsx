import { BrowserRouter, Route} from 'react-router-dom'

import { ListStudent } from './pages/ListStudents'
import { ListTeacher } from './pages/ListTeacher'

function App() {
  return (
    <BrowserRouter>
      <Route path='/teacher' component={ListTeacher} />
      <Route path='/student' component={ListStudent} />
    </BrowserRouter>
  );
}

export default App;
