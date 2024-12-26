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
import ChatBot from './components/ai/ai';
import ScrollToTop from './components/scrollToTop'; // import ScrollToTop
import Society from './pages/society/society';  // import Society page
import StudCircle from './pages/studyCircle/studyCircle';
import EmailVerificationPage from './pages/emailVerification/emailVerification';

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = ['/sign-up', '/sign-in', "/emailVerification"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/universities/:name" element={<UniversityDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/society" element={<Society />} />
        <Route path="/emailVerification" element={<EmailVerificationPage />} />
        <Route path="/study-circles" element={<StudCircle />} />
      </Routes>

      {!hideNavAndFooter && <ChatBot />}
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
