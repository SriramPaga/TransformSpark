import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SparkView from './views/SparkView';
import NavigationBar from './Components/NavigationBar';
import LoadingPage from './Components/LoadingPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
// change hasRouter before hosting on main domain, hashrouter being used for Github pages
// color refernce
// https://coolors.co/f42845-f37a3e-eea53c-f18f3f-ebc038
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SparkView />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/Home" element={<LoadingPage />} />
          <Route path="/Login" element={<LoadingPage />} />
          <Route path="/Spark" element={<SparkView />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
