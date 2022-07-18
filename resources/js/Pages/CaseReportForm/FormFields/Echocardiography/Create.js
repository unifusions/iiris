
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : null,
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : null,

          echodate: '',
          peak_velocity: '',
          velocity_time_integral: '',
          peak_gradient: '',
          mean_gradient: '',
          heart_rate: '',
          stroke_volume: '',
          dvi: '',
          eoa: '',
          acceleration_time: '',
          lvot_vti: '',
          lv_mass: '',
          ivs_diastole: '',
          pw_diastole: '',
          lvidend_systole: '',
          lvidend_diastole: '',
          ejection_fraction: '',
          files: ''

     });




     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return post(route(`${postUrl}`, { crf: crf, preoperative: preoperative }));
               case 'postoperative':
                    return post(route(`${postUrl}`, { crf: crf, postoperative: postoperative }));
               case 'scheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, scheduledvisit: scheduledvisit }));
               case 'unscheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit }));

          }
     }



     return (
          <Authenticated
               auth={auth}
               errors={errors}
               role={roles}
               breadcrumb={<>
                    <li className='breadcrumb-item'>
                         <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                    </li>
                    <li className='breadcrumb-item'>
                         <span className="Active">Create</span>
                    </li>
               </>
               }
          >

               <Head title="Create Echocardiography" />
               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Create Echocardiography' role={roles} />
                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}>

                                   <FormCalendar
                                        labelText='Date of Investigation'
                                        value={data.echodate}
                                        handleChange={(date) => setData('echodate', new Date(date))}
                                        className={`${errors.ecg_date ? 'is-invalid' : ''}`}
                                   />


                                   <FormInputWithLabel
                                        labelText='Peak Velocity'
                                        type='number'
                                        name='peak_velocity'
                                        value={data.peak_velocity}
                                        error={errors.peak_velocity}
                                        units='mmHg'
                                        handleChange={e => setData('peak_velocity', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Velocity Time Integral(Aortic Valve)'
                                        type='number'
                                        name='velocity_time_integral'
                                        value={data.velocity_time_integral}
                                        error={errors.velocity_time_integral}
                                        units='cm'
                                        handleChange={e => setData('velocity_time_integral', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Peak Gradient'
                                        type='number'
                                        name='peak_gradient'
                                        value={data.peak_gradient}
                                        error={errors.peak_gradient}
                                        units='mmHg'
                                        handleChange={e => setData('peak_gradient', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Mean Gradient'
                                        type='number'
                                        name='mean_gradient'
                                        value={data.mean_gradient}
                                        error={errors.mean_gradient}
                                        units='mmHg'
                                        handleChange={e => setData('mean_gradient', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Heart Rate'
                                        type='number'
                                        name='heart_rate'
                                        value={data.heart_rate}
                                        error={errors.heart_rate}
                                        units='bpm'
                                        handleChange={e => setData('heart_rate', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Stroke Volume                                        '
                                        type='number'
                                        name='stroke_volume'
                                        value={data.stroke_volume}
                                        error={errors.stroke_volume}
                                        units='ml'
                                        handleChange={e => setData('stroke_volume', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInput
                                        labelText='DVI'
                                        type='number'
                                        name='dvi'
                                        value={data.dvi}
                                        error={errors.dvi}

                                        handleChange={e => setData('dvi', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Effective Orifice Area (EOA)'
                                        type='number'
                                        name='eoa'
                                        value={data.eoa}
                                        error={errors.eoa}
                                        units='cm<sup>2</sup>/m<sup>2</sup>'
                                        handleChange={e => setData('eoa', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Acceleration Time'
                                        type='number'
                                        name='acceleration_time'
                                        value={data.acceleration_time}
                                        error={errors.acceleration_time}
                                        units='millisec'
                                        handleChange={e => setData('acceleration_time', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='LVOT VTI'
                                        type='number'
                                        name='lvot_vti'
                                        value={data.lvot_vti}
                                        error={errors.lvot_vti}
                                        units='cm'
                                        handleChange={e => setData('lvot_vti', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='LV Mass'
                                        type='number'
                                        name='lv_mass'
                                        value={data.lv_mass}
                                        error={errors.lv_mass}
                                        units='g'
                                        handleChange={e => setData('lv_mass', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='IVS Diastole'
                                        type='number'
                                        name='ivs_diastole'
                                        value={data.ivs_diastole}
                                        error={errors.ivs_diastole}
                                        units='cm'
                                        handleChange={e => setData('ivs_diastole', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='PW Diastole'
                                        type='number'
                                        name='pw_diastole'
                                        value={data.pw_diastole}
                                        error={errors.pw_diastole}
                                        units='cm'
                                        handleChange={e => setData('pw_diastole', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='LVID-End Systole'
                                        type='number'
                                        name='lvidend_systole'
                                        value={data.lvidend_systole}
                                        error={errors.lvidend_systole}
                                        units='cm'
                                        handleChange={e => setData('lvidend_systole', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='LVID-End Diastole'
                                        type='number'
                                        name='lvidend_diastole'
                                        value={data.lvidend_diastole}
                                        error={errors.lvidend_diastole}
                                        units='cm'
                                        handleChange={e => setData('lvidend_diastole', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Ejection Fraction'
                                        type='number'
                                        name='ejection_fraction'
                                        value={data.ejection_fraction}
                                        error={errors.ejection_fraction}
                                        units='%'
                                        handleChange={e => setData('ejection_fraction', e.target.value.toString().slice(0, 7).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        min='1'
                                        max='100'
                                        step='0.1'
                                   />

                                   <Row>
                                        <Col lg={3} >
                                             Dicom Files
                                        </Col>
                                        <Col lg={9}>
                                             <div className="input-group">
                                                  <input type="file" className="form-control" name="echofiles" multiple onChange={e => setData('files', e.target.files)} />
                                             </div>

                                        </Col>
                                   </Row>






                                   <hr />






                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Create;