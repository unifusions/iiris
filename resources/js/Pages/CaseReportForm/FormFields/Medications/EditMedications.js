import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import FormRadio from "@/Pages/Shared/FormRadio";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";

import React, { useState } from "react";
import { Card, Col, Modal, Row, Container } from "react-bootstrap";



export default function CreateMedications({ crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, medication, mode, updateUrl, backUrl }) {
     const { auth, roles } = usePage().props;
     const { data, setData, processing, put, errors, reset } = useForm({
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : null,
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : null,
          medication: medication.medication || '',
          indication: medication.indication || '',
          status: medication.status || '',
          start_date: medication.start_date || '',
          stop_date: medication.stop_date || '',
          dosage: medication.dosage || '',
          reason: medication.reason || '',
     })

     const medicationOptions = [
          { labelText: 'Ongoing', value: 'Ongoing' },
          { labelText: 'Discontinued', value: 'Discontinued' },
     ];

     function handlesubmit(e) {
          e.preventDefault();
          //return put(route(updateUrl));

          switch (mode) {
               case 'preoperative':
                    return put(route('crf.preoperative.medication.update', { crf: crf, preoperative: postoperative, medication:medication }));
               case 'postoperative':
                    return put(route('crf.postoperative.medication.update', { crf: crf, postoperative: postoperative, medication:medication }));
               case 'scheduledvisit':
                    return put(route('crf.scheduledvisit.medication.update', { crf: crf, scheduledvisit: scheduledvisit, medication:medication }));
               case 'unscheduledvisit':
                    return put(route('crf.unscheduledvisit.medication.update', { crf: crf, unscheduledvisit: unscheduledvisit, medication:medication }));

          }




     }
     return (
          <>
          
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
                    <Container>
                    <PageTitle backUrl={backUrl} pageTitle='New Medication' role={roles} />
                         <Card className='' >
                              <Card.Body>
                                   <form onSubmit={handlesubmit}>
                                         <FormInput
                                             labelText='Medication'
                                             value={data.medication}
                                             handleChange={e => setData('medication', e.target.value)} />

                                        <FormInput
                                             labelText='Indication'
                                             value={data.indication}
                                             handleChange={e => setData('indication', e.target.value)} />
                                        <FormRadio
                                             type="radio"
                                             labelText="Status"
                                             name="status"
                                             selectedValue={data.status}
                                             options={medicationOptions}
                                             handleChange={e => setData('status', e.target.value)}

                                             error={errors.status}
                                             className={`${errors.status ? 'is-invalid' : ''}`} />

                                        <FormCalendar
                                             labelText='Start Date'
                                             name='start_date'
                                             value={data.start_date}
                                             handleChange={(date) => setData('start_date', new Date(date))}
                                             className={`${errors.start_date ? 'is-invalid' : ''}`}
                                        />
                                        {data.status === 'Discontinued' && <>
                                             <FormCalendar labelText='Stop Date'
                                                  name='stop_date'
                                                  minDate={data.start_date}
                                                  value={data.stop_date}
                                                  handleChange={(date) => setData('stop_date', new Date(date))}
                                                  className={`${errors.stop_date ? 'is-invalid' : ''}`} />

                                        </>}

                                        <FormInput
                                             labelText='Dosage'
                                             value={data.dosage}
                                             handleChange={e => setData('dosage', e.target.value)} />


                                        {data.status === 'Discontinued' && <>
                                             <FormInput labelText='Reason for discontinuation'
                                                  value={data.reason}
                                                  handleChange={e => setData('reason', e.target.value)} />

                                        </>} 

                                        <FormButton processing={processing} labelText='update Medication' type="submit" mode="warning" className="btn-sm" />
                                   </form>
                              </Card.Body>
                         </Card>
                    </Container>

               </Authenticated>

          </>
     )
}
