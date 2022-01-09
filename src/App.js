import './App.css';
// has been modified
import Navbar from './Navbar';
import Footer from './Footer';
import Aside from './Aside';
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className=''>this is a header</header>
      <div className="container-fluid">
        <main
          className='d-flex row col-md border border-warning'
        >
          <div className='row-2 col-md-2 col-lg-2 navbar-dark bg-secondary bg-gradient rounded-3'>
            <Navbar />
          </div>
          <div style={{ height: '800px' }}
            className=' row-8 col-md-10 col-lg-8 border border-danger'>
            main article
            <Outlet />
          </div>
          <div className='row-2 col col-lg-2 border border-danger'>
            aside content
            <Aside />
          </div>
        </main >
      </div>

      <div className='border border-info position-relative bottom-0'>
        footer
        <Footer />
      </div>
    </div>
  );
}

export default App;
