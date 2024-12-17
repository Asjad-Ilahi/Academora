import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import Universities from './pages/university/university';
import { SignUpForm } from './pages/signup/signUp';
import { LoginForm } from './pages/login/login';
import Ai from './components/ai/ai';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/universities" element={<Universities />} />
        <Route path='/sign-up' element ={<SignUpForm/>} />
        <Route path='/sign-in' element = {<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
