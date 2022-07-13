import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";



export default function ElectrocardiogramData({ electrocardiograms, role, createUrl, editUrl, enableActions }) {
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
                              Electrocardiogram
                         </div>

                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {electrocardiograms === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }

                    </div>
                    <hr />
                    {electrocardiograms !== null ?
                         <>

                              <RenderFieldDatas labelText='Date of Investigation' value={new Date(electrocardiograms.ecg_date).toLocaleString('en-in', options)} />
                              <RenderFieldDatas labelText='Rhythm' value={electrocardiograms.rhythm} />
                              {electrocardiograms.rhythm === "Others" &&
                                   <RenderFieldDatas labelText='' value={electrocardiograms.rhythm_others} />

                              }
                              <RenderFieldDatas labelText='Rate' value={electrocardiograms.rate} />
                              <RenderFieldDatas labelText='LVH' value={electrocardiograms.lvh ? 'Yes' : 'No'} />
                              <RenderFieldDatas labelText='LV Strain' value={electrocardiograms.lvs ? 'Yes' : 'No'} />
                              <RenderFieldDatas labelText='PR Interval' value={electrocardiograms.printerval} />
                              <RenderFieldDatas labelText='QRS Duration' value={electrocardiograms.qrsduration} />


                         </> : <span className="fw-normal text-secondary fst-italic">No Electrocardiogram data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
