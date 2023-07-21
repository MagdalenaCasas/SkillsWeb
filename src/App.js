import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route,} from 'react-router-dom';
import {
  Home,Academy,Courses,Exam,Contact
} from './pages/index';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academy />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/examenes" element={<Exam/>} />
        <Route path="/contacto" element={<Contact/>} />
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
