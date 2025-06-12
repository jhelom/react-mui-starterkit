import {createBrowserRouter} from 'react-router';

import {AppPath} from './app-path';
import Home from './pages/Home';
import App from './App.tsx';

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: AppPath.Root,
                element: <Home/>
            },
        ]
    }
]);