import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import Universities from './pages/university/university';
import { SignUpForm } from './pages/signup/signUp';
import { LoginForm } from './pages/login/login';
import Home from './pages/home/home';
import UniversityDetail from './pages/universityDetail/universityDetail';
import Navbar from './components/navbar/navBar';  // Import Navbar
import Footer from './components/footer/footer';  // Corrected import for Footer

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Place Navbar here */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/universities/:name" element={<UniversityDetail />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />  {/* Place Footer here */}
    </BrowserRouter>
  );
}

export default App;
