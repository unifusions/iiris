 
 
import ActivityTimeline from "@/Components/ActivityTimeline";

export default function Operative({ title, children, activities }) {
    return (

        <div className="grid grid-cols-6 gap-4">
            <div className="col-span-5 space-y-4"> {children}</div>
            <div>
                <div className="fs-6 fw-bold">
                    Notification
                </div>
                <ActivityTimeline items={activities} />
            </div>
        </div>



    )
}