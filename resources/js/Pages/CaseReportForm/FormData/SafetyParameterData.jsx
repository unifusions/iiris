

import React, { useEffect, useState } from "react";



import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderFieldBoolDatas, RenderFieldSafetyParameterData } from "./FormDataHelper";
import { Card, CardContent } from "@/Components/ui/card";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { ShieldPlus } from "lucide-react";
import SectionNoData from "@/Components/ui-ext/SectionNoData";

const SECTION_TITLE = "Safety Parameters";
export default function SafetyParameterData({ safetyparameters, role, createUrl, editUrl, enableActions }) {


     return (

          <Card  >
               <SectionTitle title={SECTION_TITLE}
                    icon={ShieldPlus}
                    enableActions={enableActions}
                    coordinator={role.coordinator}
                    data={safetyparameters}
                    createUrl={createUrl}
                    editUrl={editUrl}
               />

               <CardContent>
                    {safetyparameters !== null ?
                         <>
                              <RenderFieldSafetyParameterData labelText='Structural valve deterioration' boolValue={safetyparameters.has_structural_value_deterioration} value={safetyparameters.structural_value_deterioration} dateValue={safetyparameters.date_structural_value_deterioration} />
                              <RenderFieldSafetyParameterData labelText='Valve Thrombosis' boolValue={safetyparameters.has_valve_thrombosis} value={safetyparameters.valve_thrombosis} dateValue={safetyparameters.date_valve_thrombosis} />
                              <RenderFieldSafetyParameterData labelText='All Paravalvular Leak' boolValue={safetyparameters.has_all_paravalvular_leak} value={safetyparameters.all_paravalvular_leak} dateValue={safetyparameters.date_all_paravalvular_leak} />
                              <RenderFieldSafetyParameterData labelText='Major Paravalvular Leak' boolValue={safetyparameters.has_major_paravalvular_leak} value={safetyparameters.major_paravalvular_leak} dateValue={safetyparameters.date_major_paravalvular_leak} />
                              <RenderFieldSafetyParameterData labelText='Non-structural Valve Deterioration ' boolValue={safetyparameters.has_non_structural_value_deterioration} value={safetyparameters.non_structural_value_deterioration} dateValue={safetyparameters.date_non_structural_value_deterioration} />
                              <hr />
                              <div className="row mb-3">
                                   <div className="col-sm-12">
                                        <span className="fs-6 fw-bold">Clinical Safety Parameters</span>
                                   </div>
                              </div>
                              <RenderFieldSafetyParameterData labelText='Thromboembolism' boolValue={safetyparameters.has_thromboembolism} value={safetyparameters.thromboembolism} dateValue={safetyparameters.date_thromboembolism} />
                              <RenderFieldSafetyParameterData labelText='All Bleeding/Hemorrhage' boolValue={safetyparameters.has_all_bleeding} value={safetyparameters.all_bleeding} dateValue={safetyparameters.date_all_bleeding} />
                              <RenderFieldSafetyParameterData labelText='Major Bleeding/Hemorrhage ' boolValue={safetyparameters.has_major_bleeding} value={safetyparameters.major_bleeding} dateValue={safetyparameters.date_major_bleeding} />
                              <RenderFieldSafetyParameterData labelText='Endocarditis' boolValue={safetyparameters.has_endocarditis} value={safetyparameters.endocarditis} dateValue={safetyparameters.date_endocarditis} />
                              <RenderFieldSafetyParameterData labelText='All-cause Mortality' boolValue={safetyparameters.has_all_mortality} value={safetyparameters.all_mortality} dateValue={safetyparameters.date_all_mortality} />
                              <RenderFieldSafetyParameterData labelText='Valve-related Mortality ' boolValue={safetyparameters.has_valve_mortality} value={safetyparameters.valve_mortality} dateValue={safetyparameters.date_valve_mortality} />
                              <RenderFieldSafetyParameterData labelText='Valve-related reoperation' boolValue={safetyparameters.has_valve_related_operation} value={safetyparameters.valve_related_operation} dateValue={safetyparameters.date_valve_related_operation} />
                              <RenderFieldSafetyParameterData labelText='Explant' boolValue={safetyparameters.has_explant} value={safetyparameters.explant} dateValue={safetyparameters.date_explant} />
                              <RenderFieldSafetyParameterData labelText='Haemolysis' boolValue={safetyparameters.has_haemolysis} value={safetyparameters.haemolysis} dateValue={safetyparameters.date_haemolysis} />
                              <RenderFieldSafetyParameterData labelText='Sudden Unexplained Death' boolValue={safetyparameters.has_sudden_unexplained_death} value={safetyparameters.sudden_unexplained_death} dateValue={safetyparameters.date_sudden_unexplained_death} />
                              <RenderFieldSafetyParameterData labelText='Cardiac Death' boolValue={safetyparameters.has_cardiac_death} value={safetyparameters.cardiac_death} dateValue={safetyparameters.date_cardiac_death} />

                         </> : <SectionNoData title={SECTION_TITLE} />}




               </CardContent>




          </Card >


     )
}
