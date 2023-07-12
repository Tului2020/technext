import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ProblemOne from './problem1';
import ProblemTwo from './problem2';
import { Button, Grid } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/problem-one' replace />
  },
  {
    path: '/problem-one',
    element: <ProblemOne />,
  },
  {
    path: '/problem-two',
    element: <ProblemTwo />,
  },
]);

const App = () => {
  return (
    <Grid style={{ width: '100vw' }}>
      <div style={{ width: '100%', height: '50px', borderBottom: '1px solid grey' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <Button
            onClick={() => {
              window.location.pathname = '/problem-one'
            }}
          >
            Problem 1
          </Button>
          <Button
            onClick={() => {
              window.location.pathname = '/problem-two'
            }}
          >
            Problem 2
          </Button>
        </div>
      </div>
      <RouterProvider router={router} />
    </Grid>
  );
}

export default App;