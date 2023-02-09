import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import JobDetails from './components/JobDetails/JobDetails';
import Jobs from './components/Jobs/Jobs';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/:position' element={<JobDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
