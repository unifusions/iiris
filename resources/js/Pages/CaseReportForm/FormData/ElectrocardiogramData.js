import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderFieldBoolDatas } from "./FormDataHelper";



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

                              <RenderFieldDatas labelText='Date of Investigation' value={electrocardiograms.ecg_date !== null ? new Date(electrocardiograms.ecg_date).toLocaleString('en-in', options) : null} />
                              <RenderFieldDatas labelText='Rhythm' value={electrocardiograms.rhythm}/>
                              {electrocardiograms.rhythm === "Others" &&
                                   <RenderFieldDatas labelText='' value={electrocardiograms.rhythm_others} />

                              }
                              
                              <RenderFieldDatas labelText='Rate' value={electrocardiograms.rate} units = 'bpm'/>
                              <RenderFieldBoolDatas labelText='LVH' boolValue={electrocardiograms.lvh} />
                              <RenderFieldBoolDatas labelText='LV Strain' boolValue={electrocardiograms.lvs} />
                              <RenderFieldDatas labelText='PR Interval' value={electrocardiograms.printerval} units = 'ms'/>
                              <RenderFieldDatas labelText='QRS Duration' value={electrocardiograms.qrsduration} units = 'ms'/>


                         </> : <span className="fw-normal text-secondary fst-italic">No Electrocardiogram data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
