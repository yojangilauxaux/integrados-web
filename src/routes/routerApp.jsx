import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ErrorNotFound from '../pages/ErrorNotFound';
import About from '../pages/About';
import ChooseUs from '../pages/ChooseUs';
import Clients from '../pages/Clients';
import Contact from '../pages/Contact';
import Galery from '../pages/Galery';
import Services from '../pages/Services';
import { Navigate } from 'react-router-dom'; 

export let routes = [
    {
        path: '/', 
        element: <Navigate to="/login" replace />, 
    },
    {
        path: '/login',  
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/home',
        element: <Home />,
        errorElement: <ErrorNotFound />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/choose-us',
        element: <ChooseUs />,
    },
    {
        path: '/galery',
        element: <Galery />,
    },
    {
        path: '/clients',
        element: <Clients />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
];
