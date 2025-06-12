import {execSync} from 'child_process';

import {defineConfig, type UserConfigExport} from 'vite';
import react from '@vitejs/plugin-react';
import {viteStaticCopy} from 'vite-plugin-static-copy';

const gitCommitHash = execSync('git rev-parse --short HEAD').toString().trim();
const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const buildDate = new Date().toISOString();

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/*',
                    dest: 'assets'
                }
            ]
        })
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
    },
    define: {
        GIT_COMMIT: JSON.stringify(gitCommitHash),
        GIT_BRANCH: JSON.stringify(gitBranch),
        BUILD_DATE: JSON.stringify(buildDate),
    },
} as UserConfigExport);
