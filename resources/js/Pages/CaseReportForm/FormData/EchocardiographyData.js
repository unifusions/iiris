

import FormButton from "@/Pages/Shared/FormButton";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputFullWidth from "@/Pages/Shared/FormInputFullWidth";
import FormInputNormality from "@/Pages/Shared/FormInputNormality";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import EditReview from "../FormFields/Echocardiography/EditReview";




import FormDataHelper, { RenderCreateButton, RenderFieldEchoDatas, RenderEditButton, RenderDateFieldDatas, RenderUnits, NotAvailable, RenderDateFieldEchoDatas, RenderFieldDatas, RenderFieldEchoReviewDatas } from "./FormDataHelper";
import MarkasReviewed from "./MarkasReviewed";


export default function EchocardiographyData({ echodicomfiles, echocardiographies, role, createUrl, editUrl, enableActions, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }

     const { data, setData, errors, patch, processing, hasErrors, transform } = useForm({
          id: echocardiographies !== null && echocardiographies.id,




     });


     function handlesubmit(e) {
          e.preventDefault();
          return patch(route('submitreview', { echocardiography: echocardiographies }));

     }


     return (
          <>
               <Card className="mb-3 rounded-5 shadow-sm">
                    <Card.Body>
                         <div className='d-flex justify-content-between align-items-center'>
                              <div className='fs-6 fw-bold'>Echocardiography</div>
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

                              {role.reviewer && <div className="d-flex">
                                   {echocardiographies !== null && <>
                                        {!echocardiographies.is_reviewed &&
                                             <><MarkasReviewed echocardiography={echocardiographies} /></>
                                        }

                                   </>}



                              </div>}
                         </div>
                         <hr />


                         {role.reviewer ? <>
                              {echocardiographies !== null && <>
                                   {!echocardiographies.is_reviewed ?
                                        <>
                                             <EditReview echocardiography={echocardiographies} />
                                        </> : <>
                                             <RenderDateFieldDatas labelText='Date of Review' value={echocardiographies.r_echodate} options={options} />
                                             <RenderFieldEchoReviewDatas labelText="Peak Velocity" rvalue={echocardiographies.r_peak_velocity} normality={echocardiographies.peak_velocity_normality} abnormality={echocardiographies.peak_velocity_abnormality} units='m/s' />

                                             <RenderFieldEchoReviewDatas
                                                  labelText=" Velocity Time Integral(Aortic Valve)"
                                                  rvalue={echocardiographies.r_velocity_time_integral}
                                                  normality={echocardiographies.velocity_time_integral_normality}
                                                  abnormality={echocardiographies.velocity_time_integral_abnormality}
                                                  units='cm'
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText="Peak Gradient"

                                                  rvalue={echocardiographies.r_peak_gradient}
                                                  normality={echocardiographies.peak_gradient_normality}
                                                  abnormality={echocardiographies.peak_gradient_abnormality}
                                                  units='mmHg'
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText="Mean Gradient"

                                                  rvalue={echocardiographies.r_mean_gradient}
                                                  normality={echocardiographies.mean_gradient_normality}
                                                  abnormality={echocardiographies.mean_gradient_abnormality}
                                                  units='mmHg'
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='Heart Rate' units='bpm'

                                                  rvalue={echocardiographies.r_heart_rate}
                                                  normality={echocardiographies.heart_rate_normality}
                                                  abnormality={echocardiographies.heart_rate_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='Stroke Volume' units='ml'

                                                  rvalue={echocardiographies.r_stroke_volume}
                                                  normality={echocardiographies.stroke_volume_normality}
                                                  abnormality={echocardiographies.stroke_volume_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='DVI' units=''

                                                  rvalue={echocardiographies.r_dvi}
                                                  normality={echocardiographies.dvi_normality}
                                                  abnormality={echocardiographies.dvi_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='Effective Orifice Area (EOA)' units='cm<sup>2</sup>/m<sup>2</sup>'

                                                  rvalue={echocardiographies.r_eoa}
                                                  normality={echocardiographies.eoa_normality}
                                                  abnormality={echocardiographies.eoa_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='Acceleration Time' units='millisec'

                                                  rvalue={echocardiographies.r_acceleration_time}
                                                  normality={echocardiographies.acceleration_time_normality}
                                                  abnormality={echocardiographies.acceleration_time_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='LVOT VTI' units='cm'

                                                  rvalue={echocardiographies.r_lvot_vti}
                                                  normality={echocardiographies.lvot_vti_normality}
                                                  abnormality={echocardiographies.lvot_vti_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='LV Mass' units='g'

                                                  rvalue={echocardiographies.r_lv_mass}
                                                  normality={echocardiographies.lv_mass_normality}
                                                  abnormality={echocardiographies.lv_mass_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='IVS Diastole' units='cm'

                                                  rvalue={echocardiographies.r_ivs_diastole}
                                                  normality={echocardiographies.ivs_diastole_normality}
                                                  abnormality={echocardiographies.ivs_diastole_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='PW Diastole' units='cm'

                                                  rvalue={echocardiographies.r_pw_diastole}
                                                  normality={echocardiographies.pw_diastole_normality}
                                                  abnormality={echocardiographies.pw_diastole_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='LVID-End Systole' units='cm'

                                                  rvalue={echocardiographies.r_lvidend_systole}
                                                  normality={echocardiographies.lvidend_systole_normality}
                                                  abnormality={echocardiographies.lvidend_systole_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='LVID-End Diastole' units='cm'
                                                  rvalue={echocardiographies.r_lvidend_diastole}
                                                  normality={echocardiographies.lvidend_diastole_normality}
                                                  abnormality={echocardiographies.lvidend_diastole_abnormality}
                                             />

                                             <RenderFieldEchoReviewDatas
                                                  labelText='Ejection Fraction' units='%'

                                                  rvalue={echocardiographies.r_ejection_fraction}
                                                  normality={echocardiographies.ejection_fraction_normality}
                                                  abnormality={echocardiographies.ejection_fraction_abnormality}
                                             />
                                        </>
                                   }

                              </>}
                         </> : <>
                              {echocardiographies !== null ? <>
                                   {role.reviewer && <RenderDateFieldDatas labelText='Date of Review' value={echocardiographies.r_echodate} options={options} />}
                                   {(role.investigator || role.coordinator) && <>
                                        <RenderDateFieldDatas labelText='Date of Investigation' value={echocardiographies.echodate} options={options} />
                                        {/* <RenderFieldDatas labelText="Peak Velocity" value={echocardiographies.peak_velocity} units='m/s' /> */}
                                   </>
                                   }
                                   {role.admin && <RenderDateFieldEchoDatas labelText={'Date of Investigation/Review'} echodate={echocardiographies.echodate} r_echodate={echocardiographies.r_echodate} options={options} />}
                                   <RenderFieldEchoDatas
                                        labelText="Peak Velocity"
                                        value={echocardiographies.peak_velocity}
                                        rvalue={echocardiographies.r_peak_velocity}
                                        normality={echocardiographies.peak_velocity_normality}
                                        abnormality={echocardiographies.peak_velocity_abnormality}
                                        units='m/s' role={role} />

                                   <RenderFieldEchoDatas
                                        labelText=" Velocity Time Integral(Aortic Valve)"
                                        value={echocardiographies.velocity_time_integral}
                                        rvalue={echocardiographies.r_velocity_time_integral}
                                        normality={echocardiographies.velocity_time_integral_normality}
                                        abnormality={echocardiographies.velocity_time_integral_abnormality}
                                        units='cm'
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText="Peak Gradient"
                                        value={echocardiographies.peak_gradient}
                                        rvalue={echocardiographies.r_peak_gradient}
                                        normality={echocardiographies.peak_gradient_normality}
                                        abnormality={echocardiographies.peak_gradient_abnormality}
                                        units='mmHg'
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText="Mean Gradient"
                                        value={echocardiographies.mean_gradient}
                                        rvalue={echocardiographies.r_mean_gradient}
                                        normality={echocardiographies.mean_gradient_normality}
                                        abnormality={echocardiographies.mean_gradient_abnormality}
                                        units='mmHg'
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='Heart Rate' units='bpm'
                                        value={echocardiographies.heart_rate}
                                        rvalue={echocardiographies.r_heart_rate}
                                        normality={echocardiographies.heart_rate_normality}
                                        abnormality={echocardiographies.heart_rate_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='Stroke Volume' units='ml'
                                        value={echocardiographies.stroke_volume}
                                        rvalue={echocardiographies.r_stroke_volume}
                                        normality={echocardiographies.stroke_volume_normality}
                                        abnormality={echocardiographies.stroke_volume_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='DVI' units=''
                                        value={echocardiographies.dvi}
                                        rvalue={echocardiographies.r_dvi}
                                        normality={echocardiographies.dvi_normality}
                                        abnormality={echocardiographies.dvi_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='Effective Orifice Area (EOA)' units='cm<sup>2</sup>/m<sup>2</sup>'
                                        value={echocardiographies.eoa}
                                        rvalue={echocardiographies.r_eoa}
                                        normality={echocardiographies.eoa_normality}
                                        abnormality={echocardiographies.eoa_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='Acceleration Time' units='millisec'
                                        value={echocardiographies.acceleration_time}
                                        rvalue={echocardiographies.r_acceleration_time}
                                        normality={echocardiographies.acceleration_time_normality}
                                        abnormality={echocardiographies.acceleration_time_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='LVOT VTI' units='cm'
                                        value={echocardiographies.lvot_vti}
                                        rvalue={echocardiographies.r_lvot_vti}
                                        normality={echocardiographies.lvot_vti_normality}
                                        abnormality={echocardiographies.lvot_vti_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='LV Mass' units='g'
                                        value={echocardiographies.lv_mass}
                                        rvalue={echocardiographies.r_lv_mass}
                                        normality={echocardiographies.lv_mass_normality}
                                        abnormality={echocardiographies.lv_mass_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='IVS Diastole' units='cm'
                                        value={echocardiographies.ivs_diastole}
                                        rvalue={echocardiographies.r_ivs_diastole}
                                        normality={echocardiographies.ivs_diastole_normality}
                                        abnormality={echocardiographies.ivs_diastole_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='PW Diastole' units='cm'
                                        value={echocardiographies.pw_diastole}
                                        rvalue={echocardiographies.r_pw_diastole}
                                        normality={echocardiographies.pw_diastole_normality}
                                        abnormality={echocardiographies.pw_diastole_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='LVID-End Systole' units='cm'
                                        value={echocardiographies.lvidend_systole}
                                        rvalue={echocardiographies.r_lvidend_systole}
                                        normality={echocardiographies.lvidend_systole_normality}
                                        abnormality={echocardiographies.lvidend_systole_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='LVID-End Diastole' units='cm'
                                        value={echocardiographies.lvidend_diastole}
                                        rvalue={echocardiographies.r_lvidend_diastole}
                                        normality={echocardiographies.lvidend_diastole_normality}
                                        abnormality={echocardiographies.lvidend_diastole_abnormality}
                                        role={role} />

                                   <RenderFieldEchoDatas
                                        labelText='Ejection Fraction' units='%'
                                        value={echocardiographies.ejection_fraction}
                                        rvalue={echocardiographies.r_ejection_fraction}
                                        normality={echocardiographies.ejection_fraction_normality}
                                        abnormality={echocardiographies.ejection_fraction_abnormality}
                                        role={role} />

                              </> : <span className="fw-normal text-secondary fst-italic">No Electrocardiogram data has been recorded. Go ahead and create one.</span>}
                         </>

                         }





                    </Card.Body>
               </Card>


          </>
     )
}
