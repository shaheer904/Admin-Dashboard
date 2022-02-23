import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css'
function App() {
  return (
    <div>
     <Topbar />
     <div className='container'>
<Sidebar />
<div className='others'>


Other Pages

</div>

     </div>
    </div>
  );
}

export default App;
