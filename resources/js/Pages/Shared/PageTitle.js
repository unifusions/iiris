import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function PageTitle({pageTitle, backUrl, createUrl, role}) {

     return (
          
               <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">{pageTitle}</h2>
                    <div>
                    <Link href={backUrl} className="btn btn-secondary me-2" method="get" type="button" as="button">Back</Link>
                    {role.coordinator &&
                    <>
                    {createUrl !==null && <Link href={createUrl} className = "btn btn-primary" type="button" as="button" method="get">Create</Link> }

                    </>
                    }
                    </div>
                    
               </div>
          
     )
}