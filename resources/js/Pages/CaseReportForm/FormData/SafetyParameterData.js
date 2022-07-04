

import React, { useEffect, useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";


import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";


export default function SafetyParameterData({ safetyparameters, role, createUrl, editUrl,enableActions }) {


     return (

          <Card className="mb-3">

               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Safety Parameters
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {safetyparameters === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }

                        
                    </div>
                    <hr />
                    {safetyparameters !== null ?
                         <>
                              <RenderFieldDatas labelText='Structural Value Deterioration' value={safetyparameters.structural_value_deterioration} />
                              <RenderFieldDatas labelText='Valve Thrombosis' value={safetyparameters.valve_thrombosis} />
                              <RenderFieldDatas labelText='All Paravalvular Leak' value={safetyparameters.all_paravalvular_leak} />
                              <RenderFieldDatas labelText='Major Paravalvular Leak' value={safetyparameters.major_paravalvular_leak} />
                              <RenderFieldDatas labelText='Non-structural Valve Deterioration ' value={safetyparameters.non_structural_value_deterioration} />
                              <hr/>
                              <div className="row mb-3">
                                   <div className="col-sm-12">
                                        <span className="fs-6 fw-bold">Clinical Safety Parameters</span>
                                   </div>
                              </div>
                              <RenderFieldDatas labelText='Thromboembolism' value={safetyparameters.thromboembolism} />
                              <RenderFieldDatas labelText='All Bleeding/Hemorrhage' value={safetyparameters.all_bleeding} />
                              <RenderFieldDatas labelText='Major Bleeding/Hemorrhage ' value={safetyparameters.major_bleeding} />
                              <RenderFieldDatas labelText='Endocarditis' value={safetyparameters.endocarditis} />
                              <RenderFieldDatas labelText='All-cause Mortality' value={safetyparameters.all_mortality} />
                              <RenderFieldDatas labelText='Valve-related Mortality ' value={safetyparameters.valve_mortality} />
                              <RenderFieldDatas labelText='Valve-related reoperation' value={safetyparameters.valve_related_operation} />
                              <RenderFieldDatas labelText='Explant' value={safetyparameters.explant} />
                              <RenderFieldDatas labelText='Haemolysis' value={safetyparameters.haemolysis} />
                              <RenderFieldDatas labelText='Sudden Unexplained Death' value={safetyparameters.sudden_unexplained_death} />
                              <RenderFieldDatas labelText='Cardiac Death' value={safetyparameters.cardiac_death} />

                         </> : <span className="fw-normal text-secondary fst-italic">No Echocardiography data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>


          </Card >


     )
}
