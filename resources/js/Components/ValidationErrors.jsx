import React from 'react';
import { Alert } from 'react-bootstrap';

export default function ValidationErrors({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <div className="mt-2">
               
                    {Object.keys(errors).map(function (key, index) {
                        return <Alert key={index} variant='danger'>
                            {errors[key]}
                        </Alert>
                           
                    })}
               
            </div>
        )
    );
}
