

import React, { useEffect, useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";


import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderFieldBoolDatas } from "./FormDataHelper";


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
                              <RenderFieldBoolDatas labelText='Structural valve deterioration' boolValue={safetyparameters.has_structural_value_deterioration} value={safetyparameters.structural_value_deterioration} />
                              <RenderFieldBoolDatas labelText='Valve Thrombosis' boolValue={safetyparameters.has_valve_thrombosis} value={safetyparameters.valve_thrombosis} />
                              <RenderFieldBoolDatas labelText='All Paravalvular Leak' boolValue={safetyparameters.has_all_paravalvular_leak} value={safetyparameters.all_paravalvular_leak} />
                              <RenderFieldBoolDatas labelText='Major Paravalvular Leak' boolValue={safetyparameters.has_major_paravalvular_leak} value={safetyparameters.major_paravalvular_leak} />
                              <RenderFieldBoolDatas labelText='Non-structural Valve Deterioration ' boolValue={safetyparameters.has_non_structural_value_deterioration} value={safetyparameters.non_structural_value_deterioration} />
                              <hr/>
                              <div className="row mb-3">
                                   <div className="col-sm-12">
                                        <span className="fs-6 fw-bold">Clinical Safety Parameters</span>
                                   </div>
                              </div>
                              <RenderFieldBoolDatas labelText='Thromboembolism' boolValue={safetyparameters.has_thromboembolism} value={safetyparameters.thromboembolism} />
                              <RenderFieldBoolDatas labelText='All Bleeding/Hemorrhage' boolValue={safetyparameters.has_all_bleeding} value={safetyparameters.all_bleeding} />
                              <RenderFieldBoolDatas labelText='Major Bleeding/Hemorrhage ' boolValue={safetyparameters.has_major_bleeding}  value={safetyparameters.major_bleeding} />
                              <RenderFieldBoolDatas labelText='Endocarditis' boolValue={safetyparameters.has_endocarditis} value={safetyparameters.endocarditis} />
                              <RenderFieldBoolDatas labelText='All-cause Mortality' boolValue={safetyparameters.has_all_mortality}  value={safetyparameters.all_mortality} />
                              <RenderFieldBoolDatas labelText='Valve-related Mortality ' boolValue={safetyparameters.has_valve_mortality} value={safetyparameters.valve_mortality} />
                              <RenderFieldBoolDatas labelText='Valve-related reoperation' boolValue={safetyparameters.has_valve_related_operation}  value={safetyparameters.valve_related_operation} />
                              <RenderFieldBoolDatas labelText='Explant' boolValue={safetyparameters.has_explant} value={safetyparameters.explant} />
                              <RenderFieldBoolDatas labelText='Haemolysis' boolValue={safetyparameters.has_haemolysis} value={safetyparameters.haemolysis} />
                              <RenderFieldBoolDatas labelText='Sudden Unexplained Death' boolValue={safetyparameters.has_sudden_unexplained_death} value={safetyparameters.sudden_unexplained_death} />
                              <RenderFieldBoolDatas labelText='Cardiac Death' boolValue={safetyparameters.has_cardiac_death} value={safetyparameters.cardiac_death} />

                         </> : <span className="fw-normal text-secondary fst-italic">No safety parameters data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>


          </Card >


     )
}
