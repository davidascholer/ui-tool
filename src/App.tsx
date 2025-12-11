import { Routes, Route } from 'react-router-dom';
import { BuilderPage } from './pages/BuilderPage';
import PreviewPage from './pages/PreviewPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BuilderPage />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  );
}

export default App;
