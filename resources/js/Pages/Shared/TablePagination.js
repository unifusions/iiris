import React from "react";
import { Link } from "@inertiajs/inertia-react";


export default function TablePagination({ links = [] }) {
     // dont render, if there's only 1 page (previous, 1, next)

     if (links.length === 3) return null;
     return (
          <nav>
               <ul className="pagination">
                    {links.map(({ active, label, url }, index) => {

                         return url === null ? (
                              // <PageInactive keyIndex={index} label={label} />
                              <li key={index} className="page-item disabled" >
                                   <span className="page-link" dangerouslySetInnerHTML={{ __html: label }}></span>
                              </li>
                         ) : (

                              // <PageLink keyIndex={index} label={label} active={active} url={url} />
                              <li className={`page-item ${active ? 'active' : ''}`} key={index} >
                                   <Link className="page-link" href={url}>
                                        <span dangerouslySetInnerHTML={{ __html: label }}></span>
                                   </Link>
                              </li>


                         );
                    })}
               </ul>
          </nav>
     );
};
