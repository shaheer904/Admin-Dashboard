import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/Topbar'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './pages/UserList/UserList'
import UserPage from './pages/userpage/UserPage'
import NewUser from './pages/newuser/NewUser'
import ProductList from './pages/productlist/ProductList'
import Product from './pages/product/Product'
function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/users' element={<UserList />}></Route>
            <Route exact path='/user/:id' element={<UserPage />}></Route>
            <Route exact path='/newuser' element={<NewUser />}></Route>
            <Route exact path='/products' element={<ProductList />}></Route>
            <Route exact path='/products/:id' element={<Product />}></Route>
            <Route exact path='/newproduct' element={<ProductList />}></Route>
         
          </Routes>

          <div className='others'></div>
        </div>
      </div>
    </Router>
  )
}

export default App
