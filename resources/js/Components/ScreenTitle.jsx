import ActionApprove from "@/Pages/CaseReportForm/FormFields/ActionApprove";
import ActionDisapprove from "@/Pages/CaseReportForm/FormFields/ActionDisapprove";
import ActionsEditable from "@/Pages/CaseReportForm/FormFields/ActionsEditable";
import ApprovalSubmit from "@/Pages/CaseReportForm/FormFields/ApprovalSubmit";
import { toTitleCase } from "@/Pages/CaseReportForm/FormFields/HelperFunctions";
import { Link, usePage } from "@inertiajs/react";
import { LinkButton } from "./ui-ext/LinkButton";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ScreenTitle({
    title, backUrl,
    crf, entity, entityType,

}) {

    const { roles } = usePage().props;
    return (
        <>
            <div className=' flex justify-between items-center mt-3 mb-3'>
               <div>
         <h4 className="text-lg font-semibold">Case Report Forms \ {crf.subject_id}  {title && `\\ ${title}`}</h4>
<p className="text-foreground/60">Manage patient CRFs and clinical data collection

</p>
               </div>
       
                <div className="flex items-center gap-2">
                    <LinkButton variant="outline" href={backUrl}   method="get" type="button" as="button">
                    <ChevronLeftIcon />Back</LinkButton>


                    {entity?.is_submitted === 0 && <ApprovalSubmit
                        role={roles}
                    crf={crf}
                        entity={entity}
                        entityType={entityType} />
                    }

                    {entity?.is_submitted === 1 &&
                        <>
                            <ActionDisapprove crf={crf}
                                entity={entity}
                                entityType={entityType} />
                            <ActionApprove
                                crf={crf}
                                entity={entity}
                                entityType={entityType}
                            />


                        </>
                    }
 
                    <ActionsEditable
                        crf={crf}
                        entity={entity}
                        entityType={entityType}
                    />

                </div>


            </div>

        </>
    )
}