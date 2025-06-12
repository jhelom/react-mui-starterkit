import {createBrowserRouter} from 'react-router';

import Home from './pages/Home';
import App from './App.tsx';

export const router = createBrowserRouter([
    {
        path: BASE_PATH,
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
        ]
    }
]);