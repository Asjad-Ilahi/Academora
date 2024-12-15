import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import { SignUpForm } from './pages/signup/signUp';
import { LoginForm } from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path='/sign-up' element ={<SignUpForm/>} />
        <Route path='/sign-in' element = {<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
