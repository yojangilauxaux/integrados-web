// src/main.js

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routerApp'; // Asegúrate de que la ruta sea correcta
import './index.css';
import './components/Header.css';

// Crea el enrutador utilizando las rutas que definiste
let router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Pasamos el router a RouterProvider */}
  </StrictMode>
);
