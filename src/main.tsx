import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {RouterProvider} from 'react-router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {ja} from 'date-fns/locale';
import log from 'loglevel';
import Zod from 'zod';

import {router} from './app-router.tsx';
import {theme} from './theme.ts';
import {zodJapaneseErrorMap} from './helper/zod-japanese-error-map.ts';

const mode = import.meta.env.MODE;
const level = import.meta.env.VITE_LOG_LEVEL || 'info';
log.setLevel(level);
log.info('version', {
        'mode': mode,
        'branch': GIT_BRANCH,
        'commit': GIT_COMMIT,
        'date': BUILD_DATE
    }
);

Zod.setErrorMap(zodJapaneseErrorMap);

const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0,
                gcTime: 0,
                staleTime: 0,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
            },
            mutations: {
                retry: 0,
            },
        }
    }
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <QueryClientProvider client={queryClient}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
                    <RouterProvider router={router}/>
                </LocalizationProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>
);

