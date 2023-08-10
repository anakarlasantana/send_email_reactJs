import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import AppRoutes from './routes/routes';


function App() {
  return (
    <BrowserRouter>
      <div className="layout-page" >
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

