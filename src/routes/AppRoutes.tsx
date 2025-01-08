import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../presentacion/pages/Login';
import { OlvidarContraseña } from '../presentacion/pages/OlvidarContraseña';
import { NuevaContraseña } from '../presentacion/pages/NuevaContraseña';
import { RestablecerContraseña } from '../presentacion/pages/RestablecerContraseña';
import Clientes from '../presentacion/pages/Clientes';

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Login />} />
        <Route path="/olvidarContraseña" element={<OlvidarContraseña/>} />
        <Route path="/nuevaContraseña" element={<NuevaContraseña/>} />
        <Route path="/restablecerContraseña" element={<RestablecerContraseña/>} />
        <Route path="/clientes" element={<Clientes/>} />
      </Routes>
    </Router>
  );
}
