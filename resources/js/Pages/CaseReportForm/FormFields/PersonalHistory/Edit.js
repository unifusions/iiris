
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


const Edit = () => {
     const { auth, roles, putUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl, personalhistories } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : '',
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : '',
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : '',
          smoking: personalhistories.smoking,
          cigarettes: personalhistories.cigarettes,
          smoking_since: personalhistories.smoking_since !== null ? personalhistories.smoking_since : '',
          smoking_stopped: personalhistories.smoking_stopped !== null ? personalhistories.smoking_stopped : '',
          alchohol: personalhistories.alchohol,
          quantity: personalhistories.quantity,
          alchohol_since: personalhistories.alchohol_since !== null ? personalhistories.alchohol_since : '',
          alchohol_stopped: personalhistories.alchohol_stopped !== null ? personalhistories.alchohol_stopped : '',
          tobacco: personalhistories.tobacco,
          tobacco_type: personalhistories.tobacco_type,
          tobacco_quantity: personalhistories.tobacco_quantity,
          tobacco_since: personalhistories.tobacco_since !== null ? personalhistories.tobacco_since : '',
          tobacco_stopped: personalhistories.tobacco_stopped !== null ? personalhistories.tobacco_stopped : '',
     });





     const consumptionOptions = [
          { labelText: 'Never', value: 'Never' },
          { labelText: 'Used to consume in the past', value: 'Used to consume in the past' },
          { labelText: 'Occasional', value: 'Occasional' },
          { labelText: 'Daily', value: 'Daily' }
     ];



     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return put(route(`${putUrl}`, { crf: crf, preoperative: preoperative, personalhistory: personalhistories }));
               case 'postoperative':
                    return put(route(`${putUrl}`, { crf: crf, postoperative: postoperative, personalhistory: personalhistories }));;


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

               <Head title="Create Personal History" />
               {console.log(personalhistories)}
               <Container>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms</h2>
                         <Link href={backUrl} className="btn btn-primary" method="get" type="button" as="button">Back</Link>
                    </div>
                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}>

                                   <FormRadio
                                        type="radio"
                                        labelText="Smoking"
                                        name="Smoking"
                                        selectedValue={data.smoking}
                                        options={consumptionOptions}
                                        handleChange={e => setData('smoking', e.target.value)}
                                        checked={data.smoking !== '' && data.smoking}
                                        error={errors.smoking}
                                        className={`${errors.smoking ? 'is-invalid' : ''}`}
                                   />
                              
                                   
                                   {data.smoking !== '' ? <>
                                        {data.smoking !== 'Never' &&
                                             <>
                                                  <FormInput
                                                       labelText='No. of Cigaretters/day'
                                                       type="number"
                                                       error={errors.cigarettes}
                                                       handleChange={e => setData('cigarettes', e.target.value)}
                                                       className={`${errors.cigarettes ? 'is-invalid' : ''}`}
                                                  />

                                                  <FormCalendar
                                                       labelText='Smoking Since'
                                                       name='smokingsince'
                                                       value={data.smoking_since}
                                                       handleChange={(date) => setData('smoking_since', new Date(date))}
                                                       className={`${errors.smoking_since ? 'is-invalid' : ''}`}
                                                  />
                                                  {data.smoking === 'Used to consume in the past' &&
                                                       <FormCalendar
                                                            labelText='Stopped Since:'
                                                            name=''
                                                            minDate={data.smoking_since}
                                                            value={data.smoking_stopped}
                                                            handleChange={(date) => setData('smoking_stopped', new Date(date))}
                                                            className={`${errors.smoking_stopped ? 'is-invalid' : ''}`}
                                                       />
                                                  }
                                             </>
                                        }

                                   </> : ''}
                                   <hr />

                                   <FormRadio
                                        type="radio"
                                        labelText="Alcohol"
                                        name="Alcohol"
                                        selectedValue={data.alchohol}
                                        options={consumptionOptions}
                                        handleChange={e => setData('alchohol', e.target.value)}
                                       // checked={data.alchohol !== '' && data.alchohol}
                                        error={errors.alchohol}
                                        className={`${errors.alchohol ? 'is-invalid' : ''}`}
                                   />
                                   {data.alchohol !== '' ? <>
                                        {data.alchohol !== 'Never' &&
                                             <>
                                                  <FormInput
                                                       labelText='Quantity ml/day'
                                                       type="number"
                                                       value={data.quantity}
                                                       error={errors.quantity}
                                                       handleChange={e => setData('quantity', e.target.value)}
                                                       className={`${errors.quantity ? 'is-invalid' : ''}`}
                                                  />

                                                  <FormCalendar
                                                       labelText='Smoking Since'
                                                       name=''
                                                       value={data.alchohol_since}
                                                       handleChange={(date) => setData('alchohol_since', new Date(date))}
                                                       className={`${errors.alchohol_since ? 'is-invalid' : ''}`}
                                                  />
                                                  {data.alchohol === 'Used to consume in the past' &&
                                                       <FormCalendar
                                                            labelText='Stopped Since:'
                                                            name=''
                                                            minDate={data.alchohol_since}
                                                            value={data.alchohol_stopped}
                                                            handleChange={(date) => setData('alchohol_stopped', new Date(date))}
                                                            className={`${errors.alchohol_stopped ? 'is-invalid' : ''}`}
                                                       />
                                                  }
                                             </>
                                        }

                                   </> : ''}
                                   <hr />


                                   <FormRadio
                                        type="radio"
                                        labelText="Tobacco"
                                        name="tobacco"
                                        selectedValue={data.tobacco}
                                        options={consumptionOptions}
                                        handleChange={e => setData('tobacco', e.target.value)}
                                        checked={data.tobacco !== '' && data.tobacco}
                                        error={errors.tobacco}
                                        className={`${errors.tobacco ? 'is-invalid' : ''}`}
                                   />

                                   {data.tobacco !== '' ? <>
                                        {data.tobacco !== 'Never' &&
                                             <>
                                                  <FormInput
                                                       labelText='Type of Tobacco'
                                                       value={data.tobacco_type}
                                                       error={errors.tobacco_type}
                                                       handleChange={e => setData('tobacco_type', e.target.value)}
                                                       className={`${errors.tobacco_type ? 'is-invalid' : ''}`}
                                                  />

                                                  <FormInput
                                                       labelText='Quantity'
                                                       type="number"
                                                       error={errors.tobacco_quantity}
                                                       handleChange={e => setData('tobacco_quantity', e.target.value)}
                                                       className={`${errors.tobacco_quantity ? 'is-invalid' : ''}`}
                                                  />

                                                  <FormCalendar
                                                       labelText='Smoking Since'
                                                       name=''
                                                       value={data.tobacco_since}
                                                       handleChange={(date) => setData('tobacco_since', new Date(date))}
                                                       className={`${errors.tobacco_since ? 'is-invalid' : ''}`}
                                                  />
                                                  {data.tobacco === 'Used to consume in the past' &&
                                                       <FormCalendar
                                                            labelText='Stopped Since:'
                                                            name=''
                                                            minDate={data.tobacco_since}
                                                            value={data.tobacco_stopped}
                                                            handleChange={(date) => setData('tobacco_stopped', new Date(date))}
                                                            className={`${errors.tobacco_stopped ? 'is-invalid' : ''}`}
                                                       />
                                                  }
                                             </>
                                        }

                                   </> : ''}

                                   <hr />






                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Edit;