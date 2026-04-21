import { RenderCreateButton, RenderEditButton } from "@/Pages/CaseReportForm/FormData/FormDataHelper";
import { usePage } from "@inertiajs/react";
import { Card } from "./ui/card";
 
export default function FormSectionData ({ id,
  title,
  data,
  enableActions,
  createUrl,
  editUrl,
  children,
  emptyText = "No data has been recorded yet."}) {
   

   const { roles } = usePage().props;
const canShowActions =
    !enableActions &&
    roles.coordinator &&
    (createUrl || editUrl);

    return (
    <Card id={id} className="mb-3 shadow-sm scroll-section">
     
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-6 fw-bold">{title}</div>

          {canShowActions && (
            <>
              {!data && createUrl && (
                <RenderCreateButton createUrl={createUrl} className="btn-sm" />
              )}
              {data && editUrl && (
                <RenderEditButton editUrl={editUrl} className="btn-sm" />
              )}
            </>
          )}
        </div>

        <hr />

        {/* Body */}
        {data ? children : (
          <span className="fw-normal text-secondary fst-italic">
            {emptyText}
          </span>
        )}
      
    </Card>
  );

}