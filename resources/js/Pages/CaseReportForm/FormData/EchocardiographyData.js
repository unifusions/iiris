

import React, { useEffect, useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";


import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";


export default function EchocardiographyData({ echodicomfiles, echocardiographies, role, createUrl, editUrl, enableActions }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }

     return (

          <Card className="mb-3 rounded-5 shadow-sm">

               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Echocardiography
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {echocardiographies === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }


                      

                    </div>
                    <hr />
                    {echocardiographies !== null ?
                         <>
                              <RenderFieldDatas labelText='Date' value={new Date(echocardiographies.echodate).toLocaleString('en-in', options)} />
                              <RenderFieldDatas labelText='Peak Velocity' value={echocardiographies.peak_velocity} units='mmHg' />
                              <RenderFieldDatas labelText='Velocity Time Integral' value={echocardiographies.velocity_time_integral} units='cm' />
                              <RenderFieldDatas labelText='Peak Gradient' value={echocardiographies.peak_gradient} units='mmHg' />
                              <RenderFieldDatas labelText='Mean Gradient' value={echocardiographies.mean_gradient} units='mmHg' />
                              <RenderFieldDatas labelText='Heart Rate' value={echocardiographies.heart_rate} units='bpm' />
                              <RenderFieldDatas labelText='Stroke Volume' value={echocardiographies.stroke_volume} units='ml' />
                              <RenderFieldDatas labelText='DVI' value={echocardiographies.dvi} units='' />
                              <RenderFieldDatas labelText='Effective Orifice Area (EOA)' value={echocardiographies.eoa} units='cm<sup>2</sup>/m<sup>2</sup>' />
                              <RenderFieldDatas labelText='Acceleration Time' value={echocardiographies.acceleration_time} units='millisec' />
                              <RenderFieldDatas labelText='LVOT VTI' value={echocardiographies.lvot_vti} units='cm' />
                              <RenderFieldDatas labelText='LV Mass' value={echocardiographies.lv_mass} units='g' />
                              <RenderFieldDatas labelText='IVS Diastole' value={echocardiographies.ivs_diastole} units='cm' />
                              <RenderFieldDatas labelText='PW Diastole' value={echocardiographies.pw_diastole} units='cm' />
                              <RenderFieldDatas labelText='LVID-End Systole' value={echocardiographies.lvidend_systole} units='cm' />
                              <RenderFieldDatas labelText='LVID-End Diastole' value={echocardiographies.lvidend_diastole} units='cm' />
                              <RenderFieldDatas labelText='Ejection Fraction' value={echocardiographies.ejection_fraction} units='%' />


                         </> : <span className="fw-normal text-secondary fst-italic">No Echocardiography data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>


          </Card >


     )
}
