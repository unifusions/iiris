import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  
 

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
        tailwindcss(),

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
