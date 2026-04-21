import React from 'react';
import { Alert } from './ui/alert';
 

export default function ValidationErrors({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <div className="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
               
                    {Object.keys(errors).map(function (key, index) {
                        return <div key={index} variant='danger'>
                            {errors[key]}
                        </div>
                           
                    })}
               
            </div>
        )
    );
}
