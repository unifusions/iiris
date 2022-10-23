
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import PageTitle from "@/Pages/Shared/PageTitle";
import FileUpload from "./FileUpload";
import FormInputNormality from "@/Pages/Shared/FormInputNormality";


const EditReview = ({ echocardiography }) => {

     const { data, setData, errors, patch, processing, hasErrors, transform } = useForm({


          r_echodate: echocardiography.r_echodate || '',
          r_peak_velocity: echocardiography.r_peak_velocity || '',
          r_velocity_time_integral: echocardiography.r_velocity_time_integral || '',
          r_peak_gradient: echocardiography.r_peak_gradient || '',
          r_mean_gradient: echocardiography.r_mean_gradient || '',
          r_heart_rate: echocardiography.r_heart_rate || '',
          r_stroke_volume: echocardiography.r_stroke_volume || '',
          r_dvi: echocardiography.r_dvi || '',
          r_eoa: echocardiography.r_eoa || '',
          r_acceleration_time: echocardiography.r_acceleration_time || '',
          r_lvot_vti: echocardiography.r_lvot_vti || '',
          r_lv_mass: echocardiography.r_lv_mass || '',
          r_ivs_diastole: echocardiography.r_ivs_diastole || '',
          r_pw_diastole: echocardiography.r_pw_diastole || '',
          r_lvidend_systole: echocardiography.r_lvidend_systole || '',
          r_lvidend_diastole: echocardiography.r_lvidend_diastole || '',
          r_ejection_fraction: echocardiography.r_ejection_fraction || '',
          
          peak_velocity_normality: echocardiography.peak_velocity_normality !==null ? echocardiography.peak_velocity_normality ? '1' : '0' : null,
          velocity_time_integral_normality: echocardiography.velocity_time_integral_normality!==null ? echocardiography.velocity_time_integral_normality ? '1' : '0' : null ,
          peak_gradient_normality: echocardiography.peak_gradient_normality!==null ? echocardiography.peak_gradient_normality ? '1' : '0' : null,
          mean_gradient_normality: echocardiography.mean_gradient_normality!==null ? echocardiography.mean_gradient_normality ? '1' : '0' : null,
          heart_rate_normality: echocardiography.heart_rate_normality !==null ? echocardiography.heart_rate_normality ? '1' : '0' : null,
          stroke_volume_normality: echocardiography.stroke_volume_normality !==null ? echocardiography.stroke_volume_normality ? '1' : '0' : null,
          dvi_normality: echocardiography.dvi_normality !==null ? echocardiography.dvi_normality ? '1' : '0' : null,
          eoa_normality: echocardiography.eoa_normality !==null ? echocardiography.eoa_normality ? '1' : '0' : null,
          acceleration_time_normality: echocardiography.acceleration_time_normality!==null ? echocardiography.acceleration_time_normality ? '1' : '0' : null,
          lvot_vti_normality: echocardiography.lvot_vti_normality !==null ? echocardiography.lvot_vti_normality ? '1' : '0' : null,
          lv_mass_normality: echocardiography.lv_mass_normality !==null ? echocardiography.lv_mass_normality ? '1' : '0' : null,
          ivs_diastole_normality: echocardiography.ivs_diastole_normality !==null ? echocardiography.ivs_diastole_normality ? '1' : '0' : null,
          pw_diastole_normality: echocardiography.pw_diastole_normality !==null ? echocardiography.pw_diastole_normality ? '1' : '0' : null,
          lvidend_systole_normality: echocardiography.lvidend_systole_normality !==null ? echocardiography.lvidend_systole_normality ? '1' : '0' : null,
          lvidend_diastole_normality: echocardiography.lvidend_diastole_normality !==null ? echocardiography.lvidend_diastole_normality ? '1' : '0' : null,
          ejection_fraction_normality: echocardiography.ejection_fraction_normality!==null ? echocardiography.ejection_fraction_normality ? '1' : '0' : null,

          peak_velocity_abnormality: echocardiography.peak_velocity_abnormality || '',
          velocity_time_integral_abnormality: echocardiography.velocity_time_integral_abnormality || '',
          peak_gradient_abnormality: echocardiography.peak_gradient_abnormality || '',
          mean_gradient_abnormality: echocardiography.mean_gradient_abnormality || '',
          heart_rate_abnormality: echocardiography.heart_rate_abnormality || '',
          stroke_volume_abnormality: echocardiography.stroke_volume_abnormality || '',
          dvi_abnormality: echocardiography.dvi_abnormality || '',
          eoa_abnormality: echocardiography.eoa_abnormality || '',
          acceleration_time_abnormality: echocardiography.acceleration_time_abnormality || '',
          lvot_vti_abnormality: echocardiography.lvot_vti_abnormality || '',
          lv_mass_abnormality: echocardiography.lv_mass_abnormality || '',
          ivs_diastole_abnormality: echocardiography.ivs_diastole_abnormality || '',
          pw_diastole_abnormality: echocardiography.pw_diastole_abnormality || '',
          lvidend_systole_abnormality: echocardiography.lvidend_systole_abnormality || '',
          lvidend_diastole_abnormality: echocardiography.lvidend_diastole_abnormality || '',
          ejection_fraction_abnormality: echocardiography.ejection_fraction_abnormality || '',

     });




     function handlesubmit(e) {
          e.preventDefault();
          return patch(route('submitreview', { echocardiography: echocardiography }));

     }
     
     const normalityOptions = [
          { labelText: 'Normal', value: '1' },
          { labelText: 'Abnormal', value: '0' }
     ];




     return (
          <>

               <form onSubmit={handlesubmit}>

                    <FormCalendar
                         labelText='Date of Review'
                         value={data.r_echodate}
                         handleChange={(date) => date !== null ? setData('r_echodate', new Date(date)) : setData('echodate', '')}
                         className={`${errors.ecg_date ? 'is-invalid' : ''}`}
                    />

              

                    <FormInputNormality
                         labelText="Peak Velocity"
                         
                         echoValue={data.r_peak_velocity}
                         options={normalityOptions}
                         name="peak_velocity"
                         handleValueChange={e => setData('r_peak_velocity', e.target.value)}
                         handleRadioChange={e => setData('peak_velocity_normality', e.target.value)}
                         handleTextChange={e => setData('peak_velocity_abnormality', e.target.value)}
                         selectedValue={data.peak_velocity_normality}
                         value={data.peak_velocity_abnormality}
                         units='m/s'
                    />

                    <FormInputNormality
                         labelText=" Velocity Time Integral(Aortic Valve)"
                         echoValue={data.r_velocity_time_integral} units='cm'
                         options={normalityOptions}
                         name="velocity_time_integral_normality"
                         handleValueChange={e => setData('r_velocity_time_integral', e.target.value)}
                         handleRadioChange={e => setData('velocity_time_integral_normality', e.target.value)}
                         handleTextChange={e => setData('velocity_time_integral_abnormality', e.target.value)}
                         selectedValue={data.velocity_time_integral_normality !== null && data.velocity_time_integral_normality}
                         value={data.velocity_time_integral_abnormality}
                    />

                    <FormInputNormality
                         labelText="Peak Gradient"
                         echoValue={data.r_peak_gradient} units='mmHg'
                         options={normalityOptions}
                         name="peak_gradient_normality"
                         handleValueChange={e => setData('r_peak_gradient', e.target.value)}
                         handleRadioChange={e => setData('peak_gradient_normality', e.target.value)}
                         handleTextChange={e => setData('peak_gradient_abnormality', e.target.value)}
                         selectedValue={data.peak_gradient_normality !== null && data.peak_gradient_normality}
                         value={data.peak_gradient_abnormality}
                    />

                    
                    <FormInputNormality
                         labelText="Mean Gradient"
                         echoValue={data.r_mean_gradient} units='mmHg'
                         options={normalityOptions}
                         name="mean_gradient_normality"
                         handleValueChange={e => setData('r_mean_gradient', e.target.value)}
                         handleRadioChange={e => setData('mean_gradient_normality', e.target.value)}
                         selectedValue={data.mean_gradient_normality !== null && data.mean_gradient_normality}

                         handleTextChange={e => setData('mean_gradient_abnormality', e.target.value)}
                         value={data.mean_gradient_abnormality}
                    />

                    <FormInputNormality
                         labelText='Heart Rate' echoValue={data.r_heart_rate} units='bpm'
                         options={normalityOptions}
                         name="heart_rate_normality"
                         handleValueChange={e => setData('r_heart_rate', e.target.value)}
                         handleRadioChange={e => setData('heart_rate_normality', e.target.value)}
                         selectedValue={data.heart_rate_normality !== null && data.heart_rate_normality}
                         handleTextChange={e => setData('heart_rate_abnormality', e.target.value)}
                         value={data.heart_rate_abnormality}
                    />

                    <FormInputNormality
                         labelText='Stroke Volume' echoValue={data.r_stroke_volume} units='ml'
                         options={normalityOptions}
                         name="stroke_volume_normality"
                         handleValueChange={e => setData('r_stroke_volume', e.target.value)}
                         handleRadioChange={e => setData('stroke_volume_normality', e.target.value)}
                         selectedValue={data.stroke_volume_normality !== null && data.stroke_volume_normality}
                         handleTextChange={e => setData('stroke_volume_abnormality', e.target.value)}
                         value={data.stroke_volume_abnormality}
                    />


                    <FormInputNormality
                         labelText='DVI' echoValue={data.r_dvi} units=''
                         options={normalityOptions}
                         name="dvi_normality"
                         handleValueChange={e => setData('r_dvi', e.target.value)}
                         handleRadioChange={e => setData('dvi_normality', e.target.value)}
                         selectedValue={data.dvi_normality !== null && data.dvi_normality}

                         handleTextChange={e => setData('dvi_abnormality', e.target.value)}
                         value={data.dvi_abnormality}
                    />

                    <FormInputNormality
                         labelText='Effective Orifice Area (EOA)' echoValue={data.r_eoa} units='cm<sup>2</sup>/m<sup>2</sup>'

                         options={normalityOptions}
                         name="eoa_normality"
                         handleValueChange={e => setData('r_eoa', e.target.value)}
                         handleRadioChange={e => setData('eoa_normality', e.target.value)}
                         selectedValue={data.eoa_normality !== null && data.eoa_normality}

                         handleTextChange={e => setData('eoa_abnormality', e.target.value)}
                         value={data.eoa_abnormality}
                    />

                    <FormInputNormality
                         labelText='Acceleration Time' echoValue={data.r_acceleration_time} units='millisec'
                         options={normalityOptions}
                         name="acceleration_time_normality"
                         handleValueChange={e => setData('r_acceleration_time', e.target.value)}
                         handleRadioChange={e => setData('acceleration_time_normality', e.target.value)}
                         selectedValue={data.acceleration_time_normality !== null && data.acceleration_time_normality}
                         handleTextChange={e => setData('acceleration_time_abnormality', e.target.value)}
                         value={data.acceleration_time_abnormality}
                    />

                    <FormInputNormality
                         labelText='LVOT VTI' echoValue={data.r_lvot_vti} units='cm'
                         options={normalityOptions}
                         name="lvot_vti_normality"
                         handleValueChange={e => setData('r_lvot_vti', e.target.value)}
                         handleRadioChange={e => setData('lvot_vti_normality', e.target.value)}
                         selectedValue={data.lvot_vti_normality !== null && data.lvot_vti_normality}

                         handleTextChange={e => setData('lvot_vti_abnormality', e.target.value)}
                         value={data.lvot_vti_abnormality}
                    />


                    <FormInputNormality
                         labelText='LV Mass' echoValue={data.r_lv_mass} units='g'
                         options={normalityOptions}
                         name="lv_mass_normality"
                         handleValueChange={e => setData('r_lv_mass', e.target.value)}
                         handleRadioChange={e => setData('lv_mass_normality', e.target.value)}
                         selectedValue={data.lv_mass_normality !== null && data.lv_mass_normality}

                         handleTextChange={e => setData('lv_mass_abnormality', e.target.value)}
                         value={data.lv_mass_abnormality}
                    />

                    <FormInputNormality
                         labelText='IVS Diastole' echoValue={data.r_ivs_diastole} units='cm'
                                                  options={normalityOptions}
                         name="ivs_diastole_normality"
                         handleValueChange={e => setData('r_ivs_diastole', e.target.value)}
                         handleRadioChange={e => setData('ivs_diastole_normality', e.target.value)}
                         selectedValue={data.ivs_diastole_normality !== null && data.ivs_diastole_normality}
                         handleTextChange={e => setData('ivs_diastole_abnormality', e.target.value)}
                         value={data.ivs_diastole_abnormality}
                    />

                    <FormInputNormality
                         labelText='PW Diastole' echoValue={data.r_pw_diastole} units='cm'
                         
                         options={normalityOptions}
                         name="pw_diastole_normality"
                         handleValueChange={e => setData('r_pw_diastole', e.target.value)}
                         handleRadioChange={e => setData('pw_diastole_normality', e.target.value)}
                         selectedValue={data.pw_diastole_normality !== null && data.pw_diastole_normality}

                         handleTextChange={e => setData('pw_diastole_abnormality', e.target.value)}
                         value={data.pw_diastole_abnormality}
                    />



                    <FormInputNormality
                         labelText='LVID-End Systole' echoValue={data.r_lvidend_systole} units='cm'
                                                  options={normalityOptions}
                         name="lvidend_systole_normality"
                         handleValueChange={e => setData('r_lvidend_systole', e.target.value)}
                         handleRadioChange={e => setData('lvidend_systole_normality', e.target.value)}
                         selectedValue={data.lvidend_systole_normality !== null && data.lvidend_systole_normality}
                         handleTextChange={e => setData('lvidend_systole_abnormality', e.target.value)}
                         value={data.lvidend_systole_abnormality}
                    />

                    <FormInputNormality
                         labelText='LVID-End Diastole' echoValue={data.r_lvidend_diastole} units='cm'
                                                  options={normalityOptions}
                         name="lvidend_diastole_normality"
                         handleValueChange={e => setData('r_lvidend_diastole', e.target.value)}
                         handleRadioChange={e => setData('lvidend_diastole_normality', e.target.value)}
                         selectedValue={data.lvidend_diastole_normality !== null && data.lvidend_diastole_normality}
                         handleTextChange={e => setData('lvidend_diastole_abnormality', e.target.value)}
                         value={data.lvidend_diastole_abnormality}
                    />

                    <FormInputNormality
                         labelText='Ejection Fraction' echoValue={data.r_ejection_fraction} units='%'
                                                  options={normalityOptions}
                         name="ejection_fraction_normality"
                         handleValueChange={e => setData('r_ejection_fraction', e.target.value)}
                         handleRadioChange={e => setData('ejection_fraction_normality', e.target.value)}
                         selectedValue={data.ejection_fraction_normality !== null && data.ejection_fraction_normality}
                         handleTextChange={e => setData('ejection_fraction_abnormality', e.target.value)}
                         value={data.ejection_fraction_abnormality}
                    />


                    <hr />

                    <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

               </form>


          </>
     )
}

export default EditReview;