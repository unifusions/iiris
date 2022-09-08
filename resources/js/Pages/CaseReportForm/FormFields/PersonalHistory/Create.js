
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
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : '',
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : '',
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : '',
          smoking: '',
          cigarettes: '',
          smoking_since: '',
          smoking_stopped: '',
          alchohol: '',
          quantity: '',
          alchohol_since: '',
          alchohol_stopped: '',
          tobacco: '',
          tobacco_type: '',
          tobacco_quantity: '',
          tobacco_since: '',
          tobacco_stopped: '',
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

               <Head title="Create Personal History" />
               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Personal History' role={roles} />

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
                                        required
                                   />

                                   {data.smoking !== '' ? <>
                                        {data.smoking !== 'Never' &&
                                             <>
                                                  <FormInput
                                                       labelText='No. of Cigarettes/day'
                                                       type="number"
                                                       error={errors.cigarettes}
                                                       handleChange={e => setData('cigarettes', e.target.value)}
                                                       className={`${errors.cigarettes ? 'is-invalid' : ''}`}
                                                  />

                                                  <FormCalendar
                                                       labelText='Smoking Since'
                                                       name=''
                                                       value={data.smoking_since}
                                                       handleChange={(date) => date !== null ? setData('smoking_since', new Date(date)) : setData('smoking_since', '')}

                                                       className={`${errors.smoking_since ? 'is-invalid' : ''}`}
                                                       showYearPicker
                                                       dateFormat='Y'
                                                  />
                                                  {data.smoking === 'Used to consume in the past' &&
                                                       <FormCalendar
                                                            labelText='Stopped Since:'
                                                            name=''
                                                            minDate={data.smoking_since}
                                                            value={data.smoking_stopped}
                                                            handleChange={(date) => date !== null ? setData('smoking_stopped', new Date(date)) : setData('smoking_stopped', '')}

                                                            className={`${errors.smoking_stopped ? 'is-invalid' : ''}`}
                                                            showYearPicker
                                                            dateFormat='Y'
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

                                        error={errors.alchohol}
                                        className={`${errors.alchohol ? 'is-invalid' : ''}`}
                                        required
                                   />
                                   {data.alchohol !== '' ? <>
                                        {data.alchohol !== 'Never' &&
                                             <>
                                                  <FormInput
                                                       labelText='Quantity ml/day'
                                                       type="number"
                                                       error={errors.quantity}
                                                       handleChange={e => setData('quantity', e.target.value)}
                                                       className={`${errors.quantity ? 'is-invalid' : ''}`}

                                                  />

                                                  <FormCalendar
                                                       labelText='Alcohol Since'
                                                       name=''
                                                       value={data.alchohol_since}
                                                       handleChange={(date) => date !== null ? setData('alchohol_since', new Date(date)) : setData('alchohol_since', '')}
                                                       className={`${errors.alchohol_since ? 'is-invalid' : ''}`}
                                                       showYearPicker
                                                       dateFormat='Y'
                                                  />
                                                  {data.alchohol === 'Used to consume in the past' &&
                                                       <FormCalendar
                                                            labelText='Stopped Since:'
                                                            name=''
                                                            minDate={data.alchohol_since}
                                                            value={data.alchohol_stopped}
                                                            handleChange={(date) => date !== null ? setData('alchohol_stopped', new Date(date)) : setData('alchohol_stopped', '')}
                                                            className={`${errors.alchohol_stopped ? 'is-invalid' : ''}`}
                                                            showYearPicker
                                                            dateFormat='Y'

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
                                        required
                                   />

                                   {data.tobacco !== '' ? <>
                                        {data.tobacco !== 'Never' &&
                                             <>
                                                  <FormInput
                                                       labelText='Type of Tobacco'

                                                       error={errors.tobacco_type}
                                                       handleChange={e => setData('tobacco_type', e.target.value)}
                                                       className={`${errors.tobacco_type ? 'is-invalid' : ''}`}

                                                  />

                                                  <FormInputWithLabel
                                                       labelText='Quantity'
                                                       type="number"
                                                       error={errors.quantity}
                                                       handleChange={e => setData('tobacco_quantity', e.target.value)}
                                                       className={`${errors.quantity ? 'is-invalid' : ''}`}
                                                       units='gms'
                                                  />

                                                  <FormCalendar
                                                       labelText='Tobacco Since'
                                                       name=''
                                                       value={data.tobacco_since}
                                                       handleChange={(date) => date !== null ? setData('tobacco_since', new Date(date)) : setData('tobacco_since', '')}
                                                       className={`${errors.tobacco_since ? 'is-invalid' : ''}`}
                                                       showYearPicker
                                                       dateFormat='Y'
                                                  />
                                                  {data.tobacco === 'Used to consume in the past' &&
                                                       <FormCalendar
                                                            labelText='Stopped Since:'
                                                            name=''
                                                            minDate={data.tobacco_since}
                                                            value={data.tobacco_stopped}
                                                            handleChange={(date) => date !== null ? setData('tobacco_stopped', new Date(date)) : setData('tobacco_stopped', '')}
                                                            className={`${errors.tobacco_stopped ? 'is-invalid' : ''}`}
                                                            showYearPicker
                                                            dateFormat='Y'
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

export default Create;