import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";



export default function PhysicalExaminationData({ physicalexamination, role, createUrl, editUrl, enableActions }) {
     return (

          <Card className="mb-3 shadow-sm rounded-5">


               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <div className='fs-6 fw-bold'>
                              Physical Examination
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {physicalexamination === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }

                    </div> <hr />
                    {physicalexamination !== null ?
                         <>

                              <RenderFieldDatas labelText="Height" value={physicalexamination.height} units='cms' />
                              <RenderFieldDatas labelText="Weight" value={physicalexamination.weight} units='kgs' />
                              <RenderFieldDatas labelText="Heart Rate" value={physicalexamination.heart_rate} units='bpm' />
                              <RenderFieldDatas labelText="Systolic BP" value={physicalexamination.systolic_bp} units='mmHg' />
                              <RenderFieldDatas labelText="Diastolic BP" value={physicalexamination.diastolic_bp} units='mmHg' />

                         </> : <span className="fw-normal text-secondary fst-italic">No Physical Examination has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
