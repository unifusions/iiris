
import React from "react";
import { Link } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";

const BadgeLink = ({routeUrl, status, labelText}) => {
     return (
          <Badge  variant={status}>
               <Link href={routeUrl}
                
                    >
                    {labelText}  
                    
               </Link>
          </Badge>
     )
}

export default BadgeLink;