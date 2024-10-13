import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from '../presentacion/pages/PaginaPrueb';
import App from '../App';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Prueba />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;
