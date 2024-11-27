
import ErrorBoundary from '../../utils/errorBoundary';
import Background from '../components/ui/atomos/paginaPrincipal/background';
import Tablas from '../components/ui/organismo/tablas/tablaClientes';
import Table from '../components/ui/organismo/table';


const Clientes: React.FC = () => {
 
    return(
      <ErrorBoundary>
     <Background
        className=""
        color="pink">
        <Tablas/>
        </Background>
      </ErrorBoundary>
    );
};

export default Clientes;