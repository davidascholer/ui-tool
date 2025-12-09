import { Routes, Route } from 'react-router-dom';
import { BuilderPage } from './pages/BuilderPage';
import Test from './pages/Test';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BuilderPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
