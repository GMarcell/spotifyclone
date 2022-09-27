import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TrackControlPage from './components/TrackControl/TrackControlPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/play' element={<TrackControlPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
