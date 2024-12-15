import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import { SignUpForm } from './pages/signup/signUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path='/sign-up' element ={<SignUpForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
