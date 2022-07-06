import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function PageTitle({pageTitle, backUrl}) {

     return (
          
               <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">{pageTitle}</h2>
                    <Link href={backUrl} className="btn btn-primary" method="get" type="button" as="button">Back</Link>
               </div>
          
     )
}