import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from '../presentacion/pages/PaginaPrueb';
import App from '../App';
import Login from '../presentacion/pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;
