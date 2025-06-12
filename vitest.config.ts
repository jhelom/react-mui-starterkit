import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['src/**/*.test.{ts,tsx}'],
        setupFiles: ['./test.setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            reportsDirectory: 'test-results/coverage',
            all: true,
            exclude: [
                '**/*.js',
                '**/*.d.ts',
                '**/*.test.{ts,tsx}',
                '**/*.config.{ts,tsx,js}',
                'test.setup.ts',
                'src/api/generated/**',
            ],
        },
        server: {
            deps: {
                inline: ['@mui/x-data-grid']
            }
        },
    }
});
