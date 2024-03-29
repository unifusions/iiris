
import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import PageTitle from "@/Pages/Shared/PageTitle";



const Edit = () => {
     const { auth, roles, postUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, physicalexamination, backUrl } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: physicalexamination.pre_operative_data_id || '',
          post_operative_data_id: physicalexamination.post_operative_data_id || '',
          scheduled_visits_id: physicalexamination.scheduled_visits_id || '',
          unscheduled_visits_id: physicalexamination.unscheduled_visits_id || '',
          height: physicalexamination.height || '',
          weight: physicalexamination.weight || '',
          bsa: physicalexamination.bsa || '',
          heart_rate: physicalexamination.heart_rate || '',
          systolic_bp: physicalexamination.systolic_bp || '',
          diastolic_bp: physicalexamination.diastolic_bp || '',
          subject: crf.subject_id
     });


     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return put(route(`${postUrl}`, { crf: crf, preoperative: preoperative, physicalexamination: physicalexamination }));
               case 'postoperative':
                    return put(route(`${postUrl}`, { crf: crf, postoperative: postoperative, physicalexamination: physicalexamination }));;
               case 'scheduledvisit':
                    return put(route(`${postUrl}`, { crf: crf, scheduledvisit: scheduledvisit, physicalexamination: physicalexamination }));
               case 'unscheduledvisit':
                    return put(route(`${postUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit, physicalexamination: physicalexamination }));

          }
     }
     useEffect(
          () => {
               let bsa = Math.sqrt((data.height * data.weight) / 3600).toFixed(2)
               setData('bsa', bsa);
          },
          [data.height, data.weight],
     );

     function updateBsa(e) {
          let bsa = Math.sqrt((data.height * data.weight) / 3600).toFixed(2)
          setData('bsa', bsa);
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
                         <span className="Active">Update</span>
                    </li>
               </>
               }
          >

               <Head title="Create New Case Report Form" />
               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Physical Examination' role={roles} />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit} >
                                   {mode !== 'postoperative' && <>
                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.height && 'is-invalid '}`}
                                             error={errors.height} labelText="Height"
                                             handleChange={e => setData('height', e.target.value)}
                                             units='cms'

                                             onBlur={e => setData('height', Number.parseFloat(data.height).toFixed(2))}
                                             //  onBlur={updateBsa}
                                             value={data.height}
                                             required />

                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.weight && 'is-invalid '}`}
                                             error={errors.weight} labelText="Weight"
                                             handleChange={e => setData('weight', e.target.value)}
                                             // onBlur={updateBsa}
                                             onBlur={e => setData('weight', Number.parseFloat(data.weight).toFixed(2))}
                                             units='kgs'
                                             value={data.weight}
                                             required />

                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.bsa && 'is-invalid '}`}
                                             error={errors.bsa} labelText="BSA"
                                             value={data.bsa}
                                             // handleChange={e => setData('bsa', Math.sqrt((state.height * state.weight) / 3000).toFixed(2))}
                                             units='m<sup>2</sup>'
                                             disabled
                                        />
                                   </>}
                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.heart_rate && 'is-invalid '}`}
                                        error={errors.heart_rate} labelText="Heart Rate"
                                        handleChange={e => setData('heart_rate', e.target.value)}
                                        units='bpm'
                                        required
                                        remarks='BSA will be calculated automatically from the given height & weight'
                                        value={data.heart_rate}

                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.systolic_bp && 'is-invalid '}`}
                                        error={errors.systolic_bp}
                                        labelText="Systolic BP"
                                        handleChange={e => setData('systolic_bp', e.target.value)}
                                        units='mmHg'

                                        value={data.systolic_bp}
                                        required
                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.diastolic_bp && 'is-invalid '}`}
                                        error={errors.diastolic_bp}
                                        labelText="Diastolic BP"
                                        handleChange={e => setData('diastolic_bp', e.target.value)}

                                        required
                                        value={data.diastolic_bp}
                                        units='mmHg' />

                                   <hr />

                                   <FormButton processing={processing} labelText='Update' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Edit;