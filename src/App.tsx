import { BrowserRouter, Route} from 'react-router-dom'

import { CreateStudent } from './pages/createStudent'
import { CreateTeacher } from './pages/createTeacher'

function App() {
  return (
    <BrowserRouter>
      <Route path='/teacher' component={CreateTeacher} />
      <Route path='/student' component={CreateStudent} />
    </BrowserRouter>
  );
}

export default App;
