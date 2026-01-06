import { DocumentArrowUpIcon, DocumentCheckIcon, DocumentMinusIcon, HandThumbDownIcon, HandThumbUpIcon, LockOpenIcon } from "@heroicons/react/24/outline";

export const statusClasses = {
        Approved: "bg-success-soft text-success",
        Submitted: "bg-info-soft text-info",
        Disapproved: "bg-danger-soft text-danger",
        Unlocked: "bg-warning-soft text-warning"
    };

    export const statusTitle = {
        Approved: "Approval",
        Submitted: "Submission",
        Disapproved: "Disapproved",
        Unlocked:"Unlocked"
    }

    export const iconClasses = {
        Approved: <HandThumbUpIcon height={16} />,
        Submitted: <DocumentArrowUpIcon height={16} />,
        Disapproved: <HandThumbDownIcon height={16} />,
        Unlocked : <LockOpenIcon height={16} />

    }

   