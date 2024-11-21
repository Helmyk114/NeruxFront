
import ErrorBoundary from '../../utils/errorBoundary';
import Background from '../components/ui/atomos/paginaPrincipal/background';
import Table from '../components/ui/organismo/table';

const headers = ["NAME", "ROLE", "STATUS"];
const rows = [
  { key: "1", name: "Tony Reichert", role: "CEO", status: "Active" },
  { key: "2", name: "Zoey Lang", role: "Technical Lead", status: "Paused" },
  { key: "3", name: "Jane Fisher", role: "Senior Developer", status: "Active" },
  { key: "4", name: "William Howard", role: "Community Manager", status: "Vacation" },
];
const Clientes: React.FC = () => {
 
    return(
      <ErrorBoundary>
     <Background
        className=""
        color="pink">
        <Table headers={headers} rows={rows} />
        </Background>
      </ErrorBoundary>
    );
};

export default Clientes;