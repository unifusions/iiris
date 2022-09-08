
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormInputDuration from "@/Pages/Shared/FormInputDuration";

import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : null,
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : null,
          ecg_date: '',
          rhythm: '',
          rhythm_others: '',
          rate: '',
          lvh: '',
          lvs: '',
          printerval: '',
          qrsduration: ''

     });


     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ]

     const rhythmOptions = [
          { labelText: 'Sinus', value: 'Sinus' },
          { labelText: 'Atrial Fibrilation', value: 'Atrial Fibrilation' },
          { labelText: 'Atrial Flutter', value: 'Atrial Flutter' },
          { labelText: 'Others', value: 'Others' },
     ]


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
                    return post(route(`${postUrl}`, { crf: crf, postoperative: unscheduledvisit }));

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

               <Head title="Electrocardiogram" />
               <Container>
               <PageTitle backUrl={backUrl} pageTitle = 'Electrocardiogram' role={roles}/>
                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}>

                                   <FormCalendar
                                        labelText='Date of Investigation'
                                        handleChange={(date) => date !== null ? setData('ecg_date', new Date(date)) : setData('ecg_date', '')}

                                        value={data.ecg_date}
                                        
                                        className={`${errors.ecg_date ? 'is-invalid' : ''}`}
                                   />

                                   <FormRadio
                                        type="radio"
                                        labelText="Rhythm"
                                        name="rhythm"
                                        options={rhythmOptions}
                                        handleChange={e => setData('rhythm', e.target.value)}
                                        selectedValue={data.rhythm}
                                        error={errors.rhythm}
                                        className={`${errors.rhythm ? 'is-invalid' : ''}`}
                                   />

                                   {data.rhythm === 'Others' &&
                                        <FormInput
                                             labelText='If Rhythm is others, pls specify'
                                             handleChange={e => setData('rhythm_others', e.target.value)}
                                             error={data.rhythm_others}
                                             value={data.rhythm_others}
                                        />
                                   }



                                   <FormInputWithLabel
                                        labelText='Rate'
                                        type='number'
                                        name='rate'
                                        value={data.rate}
                                        error={errors.rate}
                                        units='bpm'
                                        handleChange={e => setData('rate', e.target.value.toString().slice(0,6).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormRadio
                                        type="radio"
                                        labelText="LVH"
                                        name="lvh"
                                        options={boolRadios}
                                        handleChange={e => setData('lvh', e.target.value)}
                                        selectedValue={data.lvh}
                                        error={errors.lvh}
                                        className={`${errors.lvh ? 'is-invalid' : ''}`}
                                   />

                                   <FormRadio
                                        type="radio"
                                        labelText="LVS"
                                        name="lvs"
                                        options={boolRadios}
                                        handleChange={e => setData('lvs', e.target.value)}
                                        selectedValue={data.lvs}
                                        error={errors.lvs}
                                        className={`${errors.lvs ? 'is-invalid' : ''}`}
                                   />

                                   <FormInputWithLabel
                                        labelText='PR Interval
                                        '
                                        type='number'
                                        name='pr_interval'
                                        value={data.printerval}
                                        error={errors.printerval}
                                        units='ms'
                                        handleChange={e => setData('printerval', e.target.value.toString().slice(0,6).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

<FormInputWithLabel
                                        labelText='QRS Duration'
                                        type='number'
                                        name='qrs_duration'
                                        value={data.qrsduration}
                                        error={errors.qrsduration}
                                        units='ms'
                                        handleChange={e => setData('qrsduration', e.target.value.toString().slice(0,6).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />


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