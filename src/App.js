import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/Topbar'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './pages/UserList/UserList'
import UserPage from './pages/userpage/UserPage'
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
          </Routes>

          <div className='others'></div>
        </div>
      </div>
    </Router>
  )
}

export default App
