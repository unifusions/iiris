import React, { useState } from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";
import { Card } from "@/Components/ui/card";



export default function MedicalHistoryData({ hasMedHis, medicalhistories, role, linkUrl, enableActions }) {
     return (

          <Card className="mb-3 shadow-sm ">


            
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Medical History
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {hasMedHis === null ?
                                                  <div> <span className="text-secondary small">Medical History status is null. Update with Yes/No</span>
                                                       <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                                  </div> : <>
                                                       {hasMedHis ?
                                                            <RenderCreateButton createUrl={linkUrl} className='btn-sm' /> :
                                                            <RenderEditButton editUrl={linkUrl} className='btn-sm' />}
                                                  </>
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div>
                    <hr />
                    {hasMedHis === null ? <span className="fw-normal text-secondary fst-italic">Medical History Data has not been updated. Go ahead and update one.</span> :
                         <>
                              {hasMedHis ? <>
                                   {medicalhistories.length > 0 &&
                                        <>
                                             <div className="fw-bold">
                                                  <div>#</div>
                                                  <div>Diagnosis</div>
                                                  <div>Duration</div>
                                                  <div>On Treatment</div>
                                             </div>
                                             <hr />
                                             {medicalhistories.map((medicalhistory, index) => <div className="mb-2" key={index}>
                                                  <div>{index + 1}</div>
                                                  <div>{medicalhistory.diagnosis}</div>
                                                  <div>{medicalhistory.duration}</div>
                                                  <div>{medicalhistory.on_treatment !== null &&
                                                       <> {medicalhistory.on_treatment === 1 ? 'Yes' : 'No'}
                                                       </>
                                                  }</div>

                                             </div>)}
                                        </>

                                   }
                              </> : 'No previous medical history recorded'}
                         </>

                    }



       
          </Card>
     )
}
