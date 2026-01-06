import { DocumentArrowUpIcon, DocumentCheckIcon, DocumentMinusIcon } from "@heroicons/react/24/outline";
import { iconClasses, statusClasses, statusTitle } from "./CommonConstants";

const ActivityItem = ({ item }) => {
 

    return (
        <div className="activity-item bg-white">
            <div className="d-flex gap-3">
                <div className={`activity-icon ${statusClasses[item.action]}`} >


                    {iconClasses[item.action]}
                </div>
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">{statusTitle[item.action]}</h6>
                        <small className="activity-date">{item.created_at.split(" ")[0]}</small>

                    </div>
                    <p className="text-muted mb-2  ">

                        Form has been <strong>{item.action}</strong><br/>
                        {item.remarks}

                    </p>
                    {/* <div className="d-flex align-items-center">
                                   <div className="activity-user me-3">
                                        <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="User" />
                                   </div>
                                   <span className="text-muted small">IP: 192.168.1.1</span>
                              </div> */}
                </div>
            </div>
        </div>
    )
}


export default function ActivityTimeline({ items }) {

    if (!items) {
        return <div className="activity-timeline">No Recent activities/notifications</div>
    }

    if (items && items.length < 1) {
        return <div className="activity-timeline">No Recent activities/notifications</div>
    }

    return (
        <div className="activity-timeline">

            {items.map((item) => <ActivityItem item={item} />
            )}

        </div>
    )
}