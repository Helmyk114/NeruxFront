import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../presentacion/pages/Login';
import OlvidarContraseña from '../presentacion/pages/OlvidarContraseña';
import NuevaContraseña from '../presentacion/pages/NuevaContraseña';
import RestablecerContraseña from '../presentacion/pages/RestablecerContraseña';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Login />} />
        <Route path="/olvidarContraseña" element={<OlvidarContraseña/>} />
        <Route path="/nuevaContraseña" element={<NuevaContraseña/>} />
        <Route path="/restablecerContraseña" element={<RestablecerContraseña/>} />
      </Routes>
      
    </Router>
  )
}

export default AppRouter;
