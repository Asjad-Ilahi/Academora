import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import Universities from './pages/university/university';
import { SignUpForm } from './pages/signup/signUp';
import { LoginForm } from './pages/login/login';
import Home from './pages/home/home';
import UniversityDetail from './pages/universityDetail/universityDetail';
import Explore from './pages/explore/explore';
import Navbar from './components/navbar/navBar';
import Footer from './components/footer/footer';

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = ['/sign-up', '/sign-in'].includes(location.pathname);

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/universities/:name" element={<UniversityDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
