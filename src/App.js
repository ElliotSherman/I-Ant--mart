import './App.css';
// has been modified
import Navbar from './Navbar';
import Footer from './Footer';
import Aside from './Aside';
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className='d-flex justify-content-around bg-secondary bg-opacity-50 bg-gradient border-bottom border-secondary mb-1'><h1 className='text-white'>Elliot Sherman</h1> <h2 className='text-primary align-self-center fw-lighter'><u>Web Dev</u></h2></header>
      <div className="container-fluid">
        <main
          className='d-flex row mx-2'
        >
          <div className='row-2 col-md-2 col-lg-2 navbar-dark bg-secondary bg-gradient rounded-3'>
            <Navbar />
          </div>
          <div style={{ height: '800px' }}
            className=' row-8 col-md-10 col-lg-8'>
            main article
            <Outlet />
          </div>
          <div className='row-2 col col-lg-2 border border-danger'>
            aside content
            <Aside />
          </div>
        </main >
      </div>

      <div className='border border-info position-relative bottom-0 mt-1'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
