
import Entry from './pages/Entry';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="wrapper">


      <Router>


        <Routes>
           
           <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
           <Route path="/login" element={<Entry/>}/>


        </Routes>
      



      </Router>
    </div>
  );
}

export default App;
