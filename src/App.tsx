import { BrowserRouter, Route} from 'react-router-dom'

import { ListStudent } from './pages/ListStudent'
import { ListTeacher } from './pages/ListTeacher'
import { ListClass } from './pages/ListClass'

function App() {
  return (
    <BrowserRouter>
      <Route path='/teacher' component={ListTeacher} />
      <Route path='/student' component={ListStudent} />
      <Route path='/class' component={ListClass} />
    </BrowserRouter>
  );
}

export default App;
