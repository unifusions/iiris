import ActionApprove from "@/Pages/CaseReportForm/FormFields/ActionApprove";
import ActionDisapprove from "@/Pages/CaseReportForm/FormFields/ActionDisapprove";
import ActionsEditable from "@/Pages/CaseReportForm/FormFields/ActionsEditable";
import ApprovalSubmit from "@/Pages/CaseReportForm/FormFields/ApprovalSubmit";
import { toTitleCase } from "@/Pages/CaseReportForm/FormFields/HelperFunctions";
import { Link, usePage } from "@inertiajs/react";

export default function ScreenTitle({
    title, backUrl,
    crf, entity, entityType,

}) {

    const { roles } = usePage().props;
    return (
        <>
            <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                <h4 className="">Case Report Forms \ {crf.subject_id}  {title && `\\ ${title}`}</h4>

                <div className="d-flex gap-2">
                    <Link href={backUrl} className="btn btn-secondary" method="get" type="button" as="button">Back</Link>


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