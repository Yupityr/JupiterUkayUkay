import {createBrowserRouter} from 'react-router-dom';
import { Products } from '../pages/Products';
import { Signin } from '../pages/auth/Signin';
import { Signup } from '../pages/auth/Signup';
import { Layout } from '../layouts/Layout';
import { Homepage } from '../pages/Homepage';
import ProductPage from '../pages/Productpage';

export const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
        { index: true, element: <Homepage /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <ProductPage /> },
        ]
    },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    {path: "*", element: <div>404 Not Found</div>},
])