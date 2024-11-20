import React from "react";
import { Table, TableHeader, TableBody } from "@nextui-org/react";
import PaginationAtom from "../atoms/PaginationAtom";
import TableColumnAtom from "../atoms/TableColumnAtom";
import TableRowMolecule from "../molecules/TableRowMolecule";
import { users } from "../organismo/data";
import TablaColumn from "../atomos/tabla/tablaColumn";
import TablaRow from "../moleculas/tabla/tablaRow";
import Pagina from "../atomos/tabla/paginacion";

const TableOrganism: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return users.slice(start, end);
  }, [page]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <Pagina page={page} total={pages} onChange={(page) => setPage(page)} />
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TablaColumn key="name">NAME</TablaColumn>
        <TablaColumn key="role">ROLE</TablaColumn>
        <TablaColumn key="status">STATUS</TablaColumn>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TablaRow key={item.name} item={item} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrganism;
