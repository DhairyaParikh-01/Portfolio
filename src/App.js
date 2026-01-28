import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;