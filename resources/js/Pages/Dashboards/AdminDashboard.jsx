import React from "react";
import {
     Card,
     CardAction,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/Components/ui/badge';






const AdminDashboard = (props) => {
     const { dashboardData, facility, adminCards } = props;


     return (
          <>

               <Card className="@container/card">
                    <CardHeader>
                         <CardDescription>Total Enrollments</CardDescription>
                         <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                              {dashboardData?.allcrfcount}
                         </CardTitle>
                         {/* <CardAction>
            <Badge variant="outline">
             
              +12.5%
            </Badge>
          </CardAction> */}
                         <div className="line-clamp-1 flex gap-2 font-medium">
                              Case Report Forms
                         </div>
                    </CardHeader>

               </Card>




               <Card className="@container/card">
                    <CardHeader>
                         <CardDescription>Registered Facilities</CardDescription>
                         <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                              {dashboardData?.facilityCount}
                         </CardTitle>
                         {/* <CardAction>
            <Badge variant="outline">
             
              +12.5%
            </Badge>
          </CardAction> */}
                         <div className="line-clamp-1 flex gap-2 font-medium">
                              Facilities
                         </div>
                    </CardHeader>

               </Card>


               <Card className="@container/card">
                    <CardHeader>
                         <CardDescription>Registered Users</CardDescription>
                         <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                              {dashboardData?.usersCount}
                         </CardTitle>
                         {/* <CardAction>
            <Badge variant="outline">
             
              +12.5%
            </Badge>
          </CardAction> */}
                         <div className="line-clamp-1 flex gap-2 font-medium">
                              Users
                         </div>
                    </CardHeader>

               </Card>

 <Card className="@container/card">
                    <CardHeader>
                         <CardDescription>Raised Queries</CardDescription>
                         <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                              {dashboardData?.tickets}
                         </CardTitle>
                         {/* <CardAction>
            <Badge variant="outline">
             
              +12.5%
            </Badge>
          </CardAction> */}
                         <div className="line-clamp-1 flex gap-2 font-medium">
                              Queries
                         </div>
                    </CardHeader>

               </Card>
          </>
     )
}


export default AdminDashboard;
