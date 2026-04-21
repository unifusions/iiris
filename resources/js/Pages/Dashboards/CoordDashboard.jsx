import {
     Card,
     CardAction,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
export default function CoordinatorDashboard({ dashboardData, facility }) {
const dashDatas = [
        {
            id: 1,
             
            count: dashboardData.allcrfcount,
            title: "Case Report Forms",
            subTitle: "Overall Enrollments"
        },
           {
            id: 2,
           
            count: dashboardData.crfcount,
            subTitle: "Case Report Forms",
            title: `from ${facility}`
            
        },

        {
            id: 3,
         
            count: dashboardData.scheduledVisitCount,
            title: "Scheduled Visits",
            subTitle: "Overall Scheduled Visits"
             
        },

        {
            id: 4,   
            count: dashboardData.unscheduledVisitCount,
             title: "Uncheduled Visits",
              subTitle: "Overall Uncheduled Visits"
           
        },
    ];
    return (
        <>
       { dashDatas.map((dashData) => <Card key={dashData.id} className="@container/card">
            <CardHeader>
                 <CardDescription>{dashData.subTitle}</CardDescription>
                 <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      {dashData.count}
                 </CardTitle>
                 {/* <CardAction>
    <Badge variant="outline">
     
      +12.5%
    </Badge>
  </CardAction> */}
                 <div className="line-clamp-1 flex gap-2 font-medium">
                      {dashData.title}
                 </div>
            </CardHeader>

       </Card>)}        
        </>
    )
}