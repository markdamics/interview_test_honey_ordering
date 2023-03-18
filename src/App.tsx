import Login from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import List from './pages/list';
import Basket from './pages/basket';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route index path='login'  /> */}
          <Route path="list" element={<List />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
