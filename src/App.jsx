import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import Universities from './pages/university/university';
import { SignUpForm } from './pages/signup/signUp';
import { LoginForm } from './pages/login/login';
import Home from './pages/home/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/universities" element={<Universities />} />
        <Route path='/sign-up' element ={<SignUpForm/>} />
        <Route path='/sign-in' element = {<LoginForm/>} />
        <Route path='/about-us' element = {<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
