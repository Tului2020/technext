import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { TablePagination } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

type Item = 'id' | 'phase' | 'date' | 'text';

interface QueryResult {
  id: number;
  text: string;
  date: Date;
  phase: string;
}

const items: Item[] = ['id', 'phase', 'date', 'text'];
const filterable: Item[] = ['id', 'phase', 'date'];
interface Props {
  data: QueryResult[];
}

type Filter = {
  filterName: Item | undefined;
  state: boolean;
}

export default function ResultTable({ data }: Props) {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<Filter>({ filterName: undefined, state: true });
  const [rows, setRows] = useState(10);

  const orderedList: QueryResult[] = data.sort((a, b) => {
    if (order.filterName === 'id') {
      return order.state ? (a.id - b.id) : (b.id - a.id);
    } else if (order.filterName === 'phase') {
      return order.state ? (a.phase.localeCompare(b.phase)) : (b.phase.localeCompare(a.phase));
    } else if (order.filterName === 'date') {
      return order.state ? (new Date(a.date).getTime() - new Date(b.date).getTime()) : (new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return 0;
  });

  return (
    <>
      {/* Table Content */}
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {items.map((colName) => (
                <TableCell
                  style={{ padding: '0px 50px' }}
                  key={colName}
                >
                  <div style={{ display: 'flex' }}>
                    <div
                      onClick={() => setOrder((_order) => ({ state: _order.filterName === colName ? !_order.state : true, filterName: colName }))}
                    >
                      {filterable.includes(colName) && (
                        (order.filterName === colName) ? (
                          order.state ? (
                            <ArrowDropUpIcon
                              style={{ color: '#848cff' }}
                            />
                          ) : (
                            <ArrowDropDownIcon
                              style={{ color: '#848cff' }}
                            />
                          )
                        ) : (
                          <ArrowDropDownIcon
                            style={{ color: 'grey' }}
                          />
                        )
                      )}
                    </div>
                    {colName}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedList.slice(page * rows, (page + 1) * rows).map((_data, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {items.map((colName, idx) => (
                  <TableCell
                    component={idx > 0 ? 'th' : undefined}
                    scope={idx > 0 ? 'row' : undefined}
                    key={_data.id + colName}
                  >
                    {(_data as any)[colName]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Text and Button */}
      <TablePagination
        component='div'
        count={data.length}
        page={page}
        onPageChange={(e, _page) => setPage(_page)}
        rowsPerPage={rows}
        onRowsPerPageChange={(e) => setRows(+e.target.value)}
      />
      {data.length === 0 && (
        <div>No Info</div>
      )}
    </>
  );
}