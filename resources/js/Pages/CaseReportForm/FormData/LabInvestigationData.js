import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";



export default function LabInvestigationData({ labinvestigations, role, createUrl, editUrl, enableActions }) {

     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }
     return (

          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Lab Investigation
                         </div>

                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {labinvestigations === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div>
                    <hr />
                    {labinvestigations !== null ?
                         <>
                              <div className='fs-6  mb-3'>Blood test</div>
                              <RenderFieldDatas labelText='Date of Investigation' value={labinvestigations.li_date !== null ? new Date(labinvestigations.li_date).toLocaleString('en-in', options) : null} />
                              <RenderFieldDatas labelText='Red Blood Cell (RBC)' value={labinvestigations.rbc} units='cells/cu.mm' />
                              <RenderFieldDatas labelText='White Blood Cell (WBC)' value={labinvestigations.wbc} units='cells/cu.mm' />
                              <RenderFieldDatas labelText='Hemoglobin' value={labinvestigations.hemoglobin} units='g/dl' />
                              <RenderFieldDatas labelText='Hematocrit' value={labinvestigations.hematocrit} units='%' />
                              <RenderFieldDatas labelText='Platelet Count' value={labinvestigations.platelet} units='cells/cu.mm' />
                              <RenderFieldDatas labelText='Blood Urea' value={labinvestigations.blood_urea} units='mg/dl' />
                              <RenderFieldDatas labelText='Serum Creatinine' value={labinvestigations.serum_creatinine} units='mg/dl' />
                              <RenderFieldDatas labelText='Alanine Transaminase (ALT)' value={labinvestigations.alt} units='u/l' />
                              <RenderFieldDatas labelText='Aspartate Transaminase (AST)' value={labinvestigations.ast} units='u/l' />
                              <RenderFieldDatas labelText='Alkaline Phosphatase (ALP)' value={labinvestigations.alp} units='u/l' />
                              <RenderFieldDatas labelText='Albumin' value={labinvestigations.albumin} units='gm/dl' />
                              <RenderFieldDatas labelText='Total Protein' value={labinvestigations.total_protein} units='gm/dl' />
                              <RenderFieldDatas labelText='Bilirubin' value={labinvestigations.bilirubin} units='mg/dl' />
                              <RenderFieldDatas labelText='Prothrombin Time(PT) INR' value={labinvestigations.pt_inr} units='seconds' />



                         </> : <span className="fw-normal text-secondary fst-italic">No Lab Investigation data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
