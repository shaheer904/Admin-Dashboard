import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css'
import Home from './pages/Home/Home';
function App() {
  return (
    <div>
     <Topbar />
     <div className='container'>
<Sidebar />



<Home />
<div className='others'>



</div>

     </div>
    </div>
  );
}

export default App;
