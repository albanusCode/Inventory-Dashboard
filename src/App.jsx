import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Navbar from './components/navbar';

function App() {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
