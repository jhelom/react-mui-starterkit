import '@testing-library/jest-dom';
import {vi} from 'vitest';
import log from 'loglevel';

log.setLevel('debug');

vi.mock('react-router-dom', async () => {
    const actualReactRouterDom = await vi.importActual('react-router-dom');
    return {
        ...actualReactRouterDom,
        useNavigate: () => vi.fn(), // useNavigate をモック
    };
});

vi.mock('*.css', () => ({}));

vi.mock('axios', async () => {
    const actualAxios = await vi.importActual<typeof import('axios')>('axios');
    return {
        ...actualAxios,
        default: actualAxios.default,
        get: vi.fn(),
        post: vi.fn(),
        create: vi.fn(() => ({
            interceptors: {
                response: {use: vi.fn(), eject: vi.fn()},
                request: {use: vi.fn(), eject: vi.fn()},
            },
            get: vi.fn(),
            post: vi.fn(),
        })),
    };
});
