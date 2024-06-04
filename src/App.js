import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SparkView from './views/SparkView';
import NavigationBar from './Components/NavigationBar';
import LoadingPage from './Components/LoadingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/Home" element={<LoadingPage />} />
          <Route path="/Login" element={<LoadingPage />} />
          <Route path="/Spark" element={<SparkView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
