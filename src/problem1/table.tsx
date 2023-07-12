import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

enum Item {
  'id' = 'id',
  'phase' = 'phase',
  'date' = 'date',
  'text' = 'text',
}

const items = Object.keys(Item) as Item[];

type Data = {
  [key in Item]: string;
}

interface Props {
  data: Data[];
}

export default function ResultTable({ data }: Props) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setCount(10);
  }, [data]);

  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {items.map((colName) => (
                <TableCell
                  style={{ padding: '0px 50px' }}
                  key={colName}
                >
                  {Item[colName]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, count).map((_data, idx) => (
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
                    {_data[colName]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {count < data.length && (
        <Button
          onClick={() => setCount(_count => _count + 10)}
        >
          Load More
        </Button>
      )}
      {data.length === 0 && (
        <div>No Info</div>
      )}
    </>
  );
}