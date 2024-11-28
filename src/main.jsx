import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routerApp';
import './index.css';
import './components/Header.css';

// Crea el enrutador utilizando las rutas definidas
const router = createBrowserRouter(routes);

// Renderiza la aplicación dentro del elemento raíz
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
