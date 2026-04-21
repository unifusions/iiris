import { DocumentArrowUpIcon, DocumentCheckIcon, DocumentMinusIcon, LockOpenIcon } from "@heroicons/react/24/outline";
 
import { iconClasses, statusClasses, statusTitle } from "./CommonConstants";
import { Card } from "./ui/card";


const CommentItem = ({ item }) => {
 

    return (
        <div class="d-flex text-muted pt-3 align-items-center">

            <div
                className={`bd-placeholder-img flex-shrink-0 p-2 me-2 rounded ${statusClasses[item.action]}`}
            >
                {iconClasses[item.action]}
            </div>


            <p class="  mb-0 small lh-sm  ">
                <strong class="d-block">{statusTitle[item.action]}</strong>
                Form has been <strong>{item.action}</strong>
                {item.remarks}
            </p>
        </div>
    )
}

export default function ActivityComments({ title, items }) {

    if (!items)
        return null;

    if (items && items.length < 1) {
        return null;
    }
    return (

        <Card>

          

                <h6 class="border-bottom pb-2 mb-0">{title}</h6>


                {items.map((item) => <CommentItem item={item} />
                )}




          

        </Card>

    )
}