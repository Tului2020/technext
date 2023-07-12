import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ProblemOne from './problem1';
import ProblemTwo from './problem2';

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
    <RouterProvider router={router} />
  );
}

export default App;
