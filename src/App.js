import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Testimonial from './Pages/Testimonial';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Schedule from './Pages/Schedule';
import Sharedlayout from './Pages/Sharedlayout';
import Error from './Pages/Error';
import './App.css';
import { useState } from 'react';
import ProtectedRoute from './Pages/ProtectedRoute';
import Directed from './Pages/Directed';


function App() {
  const [user, setUser] = useState(null);
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sharedlayout />}>
        <Route index element={<Home />} />
        <Route path='Testimonial' element={<Testimonial />} />
        <Route path='Pricing' element={<Pricing />} />
        <Route path='Login' element={<Login setUser={setUser}></Login>} />
        <Route path='Schedule' element={ 
        <ProtectedRoute user={user}>
          <Schedule user={user} />
        </ProtectedRoute>
        } />
        <Route path='Directed' element={<Directed />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
