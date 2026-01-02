import React from 'react';
 

export default function Guest({ children }) {
    return (
        <div className="text-center full-height">

            <div className="form-signin">
               
                {children}
            </div>
        </div>
    );
}
