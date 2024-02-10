import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home'
import Inventory from "./pages/Inventory";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={ <Home />} />
          <Route path="inventory" element={<Inventory/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
