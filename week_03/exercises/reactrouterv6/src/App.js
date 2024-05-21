// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact, Resume } from './pages';
import { Navigation } from './components';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      
    </Router>
  );
}

export default App;