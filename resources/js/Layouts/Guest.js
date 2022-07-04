import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import BrandLogo from './BrandLogo';

export default function Guest({ children }) {
    return (
        <div className="text-center full-height">

            <div className="form-signin">
               
                {children}
            </div>
        </div>
    );
}
