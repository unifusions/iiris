import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

 

export default defineConfig({
    optimizeDeps: {
        exclude: [
            '@cornerstonejs/core',
            '@cornerstonejs/tools',
            '@cornerstonejs/dicom-image-loader'
        ]
    },

    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
     
        react(),
    ],

    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                format: 'es',
                inlineDynamicImports: false
            }
        }
    },

    worker: {
        format: 'es',
    },


});
