
import React from "react";
import { Link } from "@inertiajs/inertia-react";

const BadgeLink = ({routeUrl, status, labelText}) => {
     return (
          <>
               <Link href={routeUrl}
               className={`badge text-decoration-none rounded-pill fw-bold p-2 ` + status}
                    >
                    {labelText}
               </Link>
          </>
     )
}

export default BadgeLink;