import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { Translation } from './pages/Translation'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<ProductListing/>} />
          <Route path='/translation' element={<Translation/>}/>
        </Routes>

      </div>

    </Router>

  )
}

export default App;
