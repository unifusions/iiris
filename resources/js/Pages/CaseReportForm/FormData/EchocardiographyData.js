

import FormButton from "@/Pages/Shared/FormButton";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputFullWidth from "@/Pages/Shared/FormInputFullWidth";
import FormInputNormality from "@/Pages/Shared/FormInputNormality";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";




import FormDataHelper, { RenderCreateButton, RenderFieldEchoDatas, RenderEditButton, RenderDateFieldDatas, RenderUnits } from "./FormDataHelper";
import MarkasReviewed from "./MarkasReviewed";


export default function EchocardiographyData({ echodicomfiles, echocardiographies, role, createUrl, editUrl, enableActions, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }

     const { data, setData, errors, patch, processing, hasErrors, transform } = useForm({
          id: echocardiographies !== null && echocardiographies.id,


          peak_velocity_normality: '',
          velocity_time_integral_normality: '',
          peak_gradient_normality: '',
          mean_gradient_normality: '',
          heart_rate_normality: '',
          stroke_volume_normality: '',
          dvi_normality: '',
          eoa_normality: '',
          acceleration_time_normality: '',
          lvot_vti_normality: '',
          lv_mass_normality: '',
          ivs_diastole_normality: '',
          pw_diastole_normality: '',
          lvidend_systole_normality: '',
          lvidend_diastole_normality: '',
          ejection_fraction_normality: '',

          peak_velocity_abnormality: '',
          velocity_time_integral_abnormality: '',
          peak_gradient_abnormality: '',
          mean_gradient_abnormality: '',
          heart_rate_abnormality: '',
          stroke_volume_abnormality: '',
          dvi_abnormality: '',
          eoa_abnormality: '',
          acceleration_time_abnormality: '',
          lvot_vti_abnormality: '',
          lv_mass_abnormality: '',
          ivs_diastole_abnormality: '',
          pw_diastole_abnormality: '',
          lvidend_systole_abnormality: '',
          lvidend_diastole_abnormality: '',
          ejection_fraction_abnormality: '',


     });

     const normalityOptions = [
          { labelText: 'Normal', value: '1' },
          { labelText: 'Abnormal', value: '0' }
     ];

     function handlesubmit(e) {
          e.preventDefault();
          return patch(route('submitreview', { echocardiography: echocardiographies }));

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

                         {role.reviewer && <div className="d-flex">
                              {echocardiographies !== null && <>
                                   {!echocardiographies.is_reviewed &&
                                        <>
                                             <form onSubmit={handlesubmit}>
                                                  <FormButton processing={processing} labelText='Submit Review' type="submit" mode="outline-primary btn-sm me-2 " />
                                             </form>


                                             <MarkasReviewed echocardiography={echocardiographies} />
                                        </>
                                   }

                              </>}



                         </div>}
                    </div>
                    <hr />

                    {echocardiographies !== null ?
                         <>
                              <div className='fs-6  mb-3'>Effectiveness</div>

                              <RenderDateFieldDatas labelText='Date of Investigation' value={echocardiographies.echodate} options={options} />
                             {echocardiographies !== null && <>
                              {!echocardiographies.is_reviewed ? <>
                                   <FormInputNormality
                                        labelText="Peak Velocity"
                                        echoValue={echocardiographies.peak_velocity}

                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="peak_velocity_normality"
                                        handleRadioChange={e => setData('peak_velocity_normality', e.target.value)}
                                        handleTextChange={e => setData('peak_velocity_abnormality', e.target.value)}
                                        selectedValue={data.peak_velocity_normality !== null && data.peak_velocity_normality}
                                        value={data.peak_velocity_abnormality}
                                        units='m/s'
                                   />




                                   <FormInputNormality
                                        labelText=" Velocity Time Integral(Aortic Valve)"
                                        echoValue={echocardiographies.velocity_time_integral} units='cm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="velocity_time_integral_normality"
                                        handleRadioChange={e => setData('velocity_time_integral_normality', e.target.value)}
                                        handleTextChange={e => setData('velocity_time_integral_abnormality', e.target.value)}
                                        selectedValue={data.velocity_time_integral_normality !== null && data.velocity_time_integral_normality}
                                        value={data.velocity_time_integral_abnormality}
                                   />


                                   <FormInputNormality
                                        labelText="Peak Gradient"
                                        echoValue={echocardiographies.peak_gradient} units='mmHg'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="peak_gradient_normality"
                                        handleRadioChange={e => setData('peak_gradient_normality', e.target.value)}
                                        handleTextChange={e => setData('peak_gradient_abnormality', e.target.value)}
                                        selectedValue={data.peak_gradient_normality !== null && data.peak_gradient_normality}
                                        value={data.peak_gradient_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText="Mean Gradient"
                                        echoValue={echocardiographies.mean_gradient} units='mmHg'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="mean_gradient_normality"
                                        handleRadioChange={e => setData('mean_gradient_normality', e.target.value)}
                                        selectedValue={data.mean_gradient_normality !== null && data.mean_gradient_normality}

                                        handleTextChange={e => setData('mean_gradient_abnormality', e.target.value)}
                                        value={data.mean_gradient_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='Heart Rate' echoValue={echocardiographies.heart_rate} units='bpm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="heart_rate_normality"
                                        handleRadioChange={e => setData('heart_rate_normality', e.target.value)}
                                        selectedValue={data.heart_rate_normality !== null && data.heart_rate_normality}

                                        handleTextChange={e => setData('heart_rate_abnormality', e.target.value)}
                                        value={data.heart_rate_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='Stroke Volume' echoValue={echocardiographies.stroke_volume} units='ml'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="stroke_volume_normality"
                                        handleRadioChange={e => setData('stroke_volume_normality', e.target.value)}
                                        selectedValue={data.stroke_volume_normality !== null && data.stroke_volume_normality}

                                        handleTextChange={e => setData('stroke_volume_abnormality', e.target.value)}
                                        value={data.stroke_volume_abnormality}
                                   />


                                   <FormInputNormality
                                        labelText='DVI' echoValue={echocardiographies.dvi} units=''
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="dvi_normality"
                                        handleRadioChange={e => setData('dvi_normality', e.target.value)}
                                        selectedValue={data.dvi_normality !== null && data.dvi_normality}

                                        handleTextChange={e => setData('dvi_abnormality', e.target.value)}
                                        value={data.dvi_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='Effective Orifice Area (EOA)' echoValue={echocardiographies.eoa} units='cm<sup>2</sup>/m<sup>2</sup>'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="eoa_normality"
                                        handleRadioChange={e => setData('eoa_normality', e.target.value)}
                                        selectedValue={data.eoa_normality !== null && data.eoa_normality}

                                        handleTextChange={e => setData('eoa_abnormality', e.target.value)}
                                        value={data.eoa_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='Acceleration Time' echoValue={echocardiographies.acceleration_time} units='millisec'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="acceleration_time_normality"
                                        handleRadioChange={e => setData('acceleration_time_normality', e.target.value)}
                                        selectedValue={data.acceleration_time_normality !== null && data.acceleration_time_normality}

                                        handleTextChange={e => setData('acceleration_time_abnormality', e.target.value)}
                                        value={data.acceleration_time_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='LVOT VTI' echoValue={echocardiographies.lvot_vti} units='cm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="lvot_vti_normality"
                                        handleRadioChange={e => setData('lvot_vti_normality', e.target.value)}
                                        selectedValue={data.lvot_vti_normality !== null && data.lvot_vti_normality}

                                        handleTextChange={e => setData('lvot_vti_abnormality', e.target.value)}
                                        value={data.lvot_vti_abnormality}
                                   />


                                   <FormInputNormality
                                        labelText='LV Mass' echoValue={echocardiographies.lv_mass} units='g'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="lv_mass_normality"
                                        handleRadioChange={e => setData('lv_mass_normality', e.target.value)}
                                        selectedValue={data.lv_mass_normality !== null && data.lv_mass_normality}

                                        handleTextChange={e => setData('lv_mass_abnormality', e.target.value)}
                                        value={data.lv_mass_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='IVS Diastole' echoValue={echocardiographies.ivs_diastole} units='cm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="ivs_diastole_normality"
                                        handleRadioChange={e => setData('ivs_diastole_normality', e.target.value)}
                                        selectedValue={data.ivs_diastole_normality !== null && data.ivs_diastole_normality}

                                        handleTextChange={e => setData('ivs_diastole_abnormality', e.target.value)}
                                        value={data.ivs_diastole_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='PW Diastole' echoValue={echocardiographies.pw_diastole} units='cm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="pw_diastole_normality"
                                        handleRadioChange={e => setData('pw_diastole_normality', e.target.value)}
                                        selectedValue={data.pw_diastole_normality !== null && data.pw_diastole_normality}

                                        handleTextChange={e => setData('pw_diastole_abnormality', e.target.value)}
                                        value={data.pw_diastole_abnormality}
                                   />



                                   <FormInputNormality
                                        labelText='LVID-End Systole' echoValue={echocardiographies.lvidend_systole} units='cm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="lvidend_systole_normality"
                                        handleRadioChange={e => setData('lvidend_systole_normality', e.target.value)}
                                        selectedValue={data.lvidend_systole_normality !== null && data.lvidend_systole_normality}
                                        handleTextChange={e => setData('lvidend_systole_abnormality', e.target.value)}
                                        value={data.lvidend_systole_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='LVID-End Diastole' echoValue={echocardiographies.lvidend_diastole} units='cm'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="lvidend_diastole_normality"
                                        handleRadioChange={e => setData('lvidend_diastole_normality', e.target.value)}
                                        selectedValue={data.lvidend_diastole_normality !== null && data.lvidend_diastole_normality}
                                        handleTextChange={e => setData('lvidend_diastole_abnormality', e.target.value)}
                                        value={data.lvidend_diastole_abnormality}
                                   />

                                   <FormInputNormality
                                        labelText='Ejection Fraction' echoValue={echocardiographies.ejection_fraction} units='%'
                                        reviewer={role.reviewer}
                                        options={normalityOptions}
                                        name="ejection_fraction_normality"
                                        handleRadioChange={e => setData('ejection_fraction_normality', e.target.value)}
                                        selectedValue={data.ejection_fraction_normality !== null && data.ejection_fraction_normality}
                                        handleTextChange={e => setData('ejection_fraction_abnormality', e.target.value)}
                                        value={data.ejection_fraction_abnormality}
                                   />
                              </> : <>

                                   <RenderFieldEchoDatas labelText="Peak Velocity" value={echocardiographies.peak_velocity} units='m/s' normality={echocardiographies.peak_velocity_normality} abnormality={echocardiographies.peak_velocity_abnormality} />
                                   <RenderFieldEchoDatas labelText=" Velocity Time Integral(Aortic Valve)"
                                        value={echocardiographies.velocity_time_integral} units='cm'
                                        normality={echocardiographies.velocity_time_integral_normality}
                                        abnormality={echocardiographies.velocity_time_integral_abnormality} />

                                   <RenderFieldEchoDatas labelText="Peak Gradient"
                                        value={echocardiographies.peak_gradient} units='mmHg'
                                        normality={echocardiographies.peak_gradient_normality}
                                        abnormality={echocardiographies.peak_gradient_abnormality} />

                                   <RenderFieldEchoDatas labelText="Mean Gradient"
                                        value={echocardiographies.mean_gradient} units='mmHg'
                                        normality={echocardiographies.mean_gradient_normality}
                                        abnormality={echocardiographies.mean_gradient_abnormality} />

                                   <RenderFieldEchoDatas labelText='Heart Rate'
                                        value={echocardiographies.heart_rate} units='bpm'
                                        normality={echocardiographies.heart_rate_normality}
                                        abnormality={echocardiographies.heart_rate_abnormality} />

                                   <RenderFieldEchoDatas labelText='Stroke Volume'
                                        value={echocardiographies.stroke_volume} units='ml'
                                        normality={echocardiographies.stroke_volume_normality}
                                        abnormality={echocardiographies.stroke_volume_abnormality} />

                                   <RenderFieldEchoDatas labelText='DVI' value={echocardiographies.dvi} units=''
                                        normality={echocardiographies.dvi_normality}
                                        abnormality={echocardiographies.dvi_abnormality} />

                                   <RenderFieldEchoDatas labelText='Effective Orifice Area (EOA)'
                                        value={echocardiographies.eoa} units='cm<sup>2</sup>/m<sup>2</sup>'
                                        normality={echocardiographies.eoa_normality} abnormality={echocardiographies.eoa_abnormality} />

                                   <RenderFieldEchoDatas labelText='Acceleration Time'
                                        value={echocardiographies.acceleration_time} units='millisec'
                                        normality={echocardiographies.acceleration_time_normality}
                                        abnormality={echocardiographies.acceleration_time_abnormality} />

                                   <RenderFieldEchoDatas labelText='LVOT VTI' value={echocardiographies.lvot_vti} units='cm'
                                        normality={echocardiographies.lvot_vti_normality} abnormality={echocardiographies.lvot_vti_abnormality} />

                                   <RenderFieldEchoDatas labelText='LV Mass' value={echocardiographies.lv_mass} units='g'
                                        normality={echocardiographies.lv_mass_normality} abnormality={echocardiographies.lv_mass_abnormality} />

                                   <RenderFieldEchoDatas labelText='IVS Diastole' value={echocardiographies.ivs_diastole} units='cm'
                                        normality={echocardiographies.ivs_diastole_normality} abnormality={echocardiographies.ivs_diastole_abnormality} />

                                   <RenderFieldEchoDatas labelText='PW Diastole' value={echocardiographies.pw_diastole} units='cm'
                                        normality={echocardiographies.pw_diastole_normality} abnormality={echocardiographies.pw_diastole_abnormality} />

                                   <RenderFieldEchoDatas labelText='LVID-End Systole' value={echocardiographies.lvidend_systole} units='cm'
                                        normality={echocardiographies.lvidend_systole_normality} abnormality={echocardiographies.lvidend_systole_abnormality} />

                                   <RenderFieldEchoDatas labelText='LVID-End Diastole' value={echocardiographies.lvidend_diastole} units='cm'
                                        normality={echocardiographies.lvidend_diastole_normality} abnormality={echocardiographies.lvidend_diastole_abnormality} />

                                   <RenderFieldEchoDatas labelText='Ejection Fraction' value={echocardiographies.ejection_fraction} units='%' normality={echocardiographies.ejection_fraction_normality} abnormality={echocardiographies.ejection_fraction_abnormality} />

                              </>}
</>}


                              {echodicomfiles !== null &&
                                   <>
                                        {
                                             echodicomfiles.length > 0 &&
                                             <Row>
                                                  <Col md={4} className='text-secondary'>Related Dicom Files</Col>
                                                  <Col md={8} >
                                                       <ul className="list-style-none">
                                                            {echodicomfiles.map((file) =>
                                                                 <li key={file.id}>
                                                                      <a href={route('dicomdownload', { echodicomfile: file })} >{file.file_name} </a>
                                                                 </li>)}
                                                       </ul></Col>
                                             </Row>

                                        }
                                   </>


                              }



                         </> : <span className="fw-normal text-secondary fst-italic">No Echocardiography data has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>


          </Card >


     )
}
