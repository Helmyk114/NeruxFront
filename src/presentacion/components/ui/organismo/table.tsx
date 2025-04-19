// // components/ui/organismos/tabla/Table.tsx
// import { Table as NextUITable, TableHeader, TableBody, TableCell} from "@heroui/react";

// import TableRow from "../moleculas/tabla/tableRow";
// import TableColumn from "../atomos/tabla/tableColumn";
// import TableRows from "../moleculas/tabla/tableRow";

// interface RowData {
//     key: string;
//     name: string;
//     role: string;
//     status: string;
//   }

// interface TableProps {
//     headers: string[];
//     rows: RowData[];
// }

// const Table: React.FC<TableProps> = ({ headers, rows }) => {
//     return (
//         <NextUITable aria-label="Dynamic Table">
//       <TableHeader>
//         {headers.map((header) => (
//           <TableColumn key={header}>{header}</TableColumn>
//         ))}
//       </TableHeader>
//       <TableBody>
//       <TableRows rows={rows} />
//       </TableBody>
//     </NextUITable>
//     );
//   };

// export default Table;
