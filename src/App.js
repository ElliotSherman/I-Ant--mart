import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Aside from './Aside';
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className=''>this is a header</header>
      <main
        style={{ height: '800px' }}
        className='d-flex col border border-warning border-3'>
        <div className='col-2 border border-danger border-5'>
          side navbar
          {/* <Navbar /> */}
        </div>
        <div className='col-8 border border-danger border-5'>
          main article
          {/* <Outlet /> */}
        </div>
        <div className='col-2 border border-danger border-5'>
          aside content
          {/* <Aside /> */}
        </div>
      </main >
      <div className='border border-info position-relative bottom-0'>
        footer
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;