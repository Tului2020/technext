import { useState } from 'react';
import './App.css';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import ResultTable from './table';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('laser');

  const handleQuery = () => {
    if (searchPhrase) {
      setLoading(true);
      fetch('https://testtechnext1-pearl118.b4a.run/search/api/query/?query=' + searchPhrase)
        .then(res => res.json())
        .then((res: any) => setData(res))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }

  return (
    <Grid container className='App' spacing={3}>
      <Grid xs={12} item style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <TextField
          placeholder='Search Here...'
          size='small'
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          style={{ marginRight: '15px' }}
          onKeyDown={(e) => (e.key === 'Enter' && handleQuery())}
        />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {loading ?
            <CircularProgress
              size={25}
            /> :
            <Button
              onClick={handleQuery}
              disabled={loading}
            >
              Search
            </Button>
          }
        </div>
      </Grid>

      <Grid xs={12} item>
        <ResultTable
          data={data}
        />
      </Grid>

    </Grid>
  );
}

export default App;
