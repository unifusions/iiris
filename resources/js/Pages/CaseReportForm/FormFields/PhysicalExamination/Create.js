
import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : null,
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : null,
          height: '',
          weight: '',
          bsa: '',
          heart_rate: '',
          systolic_bp: '',
          diastolic_bp: '',
     });




     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return post(route(`${postUrl}`, { crf: crf, preoperative: preoperative }));
               case 'postoperative':
                    return post(route(`${postUrl}`, { crf: crf, postoperative: postoperative }));;
               case 'scheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, scheduledvisit: scheduledvisit }));
               case 'unscheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit }));

          }
     }

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
                         <span className="Active">Create</span>
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
                                             // handleChange={e => setData('height', e.target.value.toString().split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                             handleChange={e => setData('height', e.target.value.toString().slice(0, 6).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join(".")) }
                                        units='cms'
                                        value={data.height}


                                        onBlur={updateBsa}
                                             required />

                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.weight && 'is-invalid '}`}
                                             error={errors.weight} labelText="Weight"
                                             handleChange={e => setData('weight', e.target.value.toString().split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                             onBlur={updateBsa}
                                             value={data.weight}
                                             units='kgs'
                                             required />

                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.bsa && 'is-invalid '}`}
                                             error={errors.bsa} labelText="BSA"
                                             value={data.bsa}
                                             units='m<sup>2</sup>'
                                             disabled
                                        />
                                   </>}



                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.bpm && 'is-invalid '}`}
                                        error={errors.bpm} labelText="Heart Rate"
                                        handleChange={e => setData('heart_rate', e.target.value)}
                                        units='bpm'
                                        required

                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.systolic_bp && 'is-invalid '}`}
                                        error={errors.systolic_bp} labelText="Systolic BP"
                                        handleChange={e => setData('systolic_bp', e.target.value)}
                                        units='mmHg'

                                        required
                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.diastolic_bp && 'is-invalid '}`}
                                        error={errors.diastolic_bp} labelText="Diastolic BP"
                                        handleChange={e => setData('diastolic_bp', e.target.value)}

                                        required
                                        units='mmHg' />

                                   <hr />

                                   <FormButton processing={processing} labelText='Create' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Create;