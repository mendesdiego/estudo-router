import './App.css'

// 1 - Config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          {/*2 - Links com react router */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - Rota dinamica */}
            <Route path='/products/:id' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
