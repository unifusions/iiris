import { CardContent } from "@/Components/ui/card";
import PhysicalActivityTable from "./physical-activity-table";

export default function PhysicalActivityData({ crf, entity, entityType, physicalactivites }) {
    return (
        <CardContent >
            {entity.physical_activity ?
                <PhysicalActivityTable deletable={false} physicalactivities={physicalactivites} /> :
                <div className="flex flex-col  items-start gap-2 text-foreground/70">

                    <span className="text-sm">No physical activity</span>
                </div>
            }


        </CardContent>
    )
}