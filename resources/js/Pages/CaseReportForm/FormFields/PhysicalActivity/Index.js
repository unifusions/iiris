
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";


import CreatePhysicalActivity from "./CreatePhysicalActivity";
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, physicalactivities, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, updateUrl, flash, backUrl } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          physical_activity: preoperative.physical_activity !== null ? preoperative.physical_activity ? '1' : '0' : null,
          sv_physical_activity: scheduledvisit.physical_activity !== null ? scheduledvisit.physical_activity ? '1' : '0' : null


     });

     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ];

     function preopSubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return put(route(`${updateUrl}`, { crf: crf, preoperative: preoperative }), {
                         preserveScroll: true,

                    });
               case 'postoperative':
                    return put(route(`${updateUrl}`, { crf: crf, postoperative: postoperative }), {
                         preserveScroll: true,

                    });
               case 'scheduledvisit':
                    return put(route(`${updateUrl}`, { crf: crf, scheduledvisit: scheduledvisit }), {
                         preserveScroll: true,

                    });
               case 'unscheduledvisit':
                    return put(route(`${updateUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit }), {
                         preserveScroll: true,
                    });

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
               <Head title="Physical Activity" />


               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Physical Activity' role={roles} />

                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              <form onSubmit={preopSubmit}>
                                   {preoperative !== undefined &&
                                        <FormRadio
                                             labelText='Has Physical Activity?'

                                             options={boolRadios}
                                             name="physicalactivity"
                                             handleChange={e => setData('physical_activity', e.target.value)}
                                             selectedValue={data.physical_activity !== null && data.physical_activity}
                                             error={errors.physical_activity}
                                             className={`${errors.physical_activity ? 'is-invalid' : ''}`}
                                        />

                                   }

                                   {scheduledvisit !== undefined &&
                                        <FormRadio
                                             labelText='Has Physical Activity?'

                                             options={boolRadios}
                                             name="physicalactivity"
                                             handleChange={e => setData('sv_physical_activity', e.target.value)}
                                             selectedValue={data.sv_physical_activity !== null && data.physical_activity}
                                             error={errors.sv_physical_activity}
                                             className={`${errors.sv_physical_activity ? 'is-invalid' : ''}`}
                                        />

                                   }


                                   <hr />
                                   <RenderBackButton backUrl={backUrl} className='me-3' />
                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />
                              </form>


                         </Card.Body>



                    </Card>



                    {preoperative.physical_activity !== null &&
                         <>
                              {preoperative.physical_activity ? <CreatePhysicalActivity
                                   mode={mode} postUrl={postUrl} preoperative={preoperative} crf={crf} physicalactivities={physicalactivities} modalTitle='Create Physical Activity' /> : ''}
                         </>

                    }


                    {scheduledvisit.physical_activity !== null &&
                         <>
                              {scheduledvisit.physical_activity ? <CreatePhysicalActivity
                                   mode={mode} postUrl={postUrl} scheduledvisit={scheduledvisit} crf={crf} physicalactivities={physicalactivities} modalTitle='Create Physical Activity' /> : ''}
                         </>

                    }



               </Container>





               {/* <Container>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms</h2>
                         <Link href={route('crf.index')} className="btn btn-primary" method="get" type="button" as="button">Back</Link>
                    </div>
                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.height && 'is-invalid '}`}
                                        error={errors.height} labelText="Height"
                                        handleChange={e => setData('height', e.target.value)}
                                        units='cms'
                                        step = '0.01'
                                        min = {50}
                                        max = {250}
                                        onBlur={updateBsa} 
                                        required />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.weight && 'is-invalid '}`}
                                        error={errors.weight} labelText="Weight"
                                        handleChange={e => setData('weight', e.target.value)}
                                        onBlur={updateBsa}
                                        step = '0.01'
                                        min = {50}
                                        max = {250}
                                        units='kgs' 
                                        required/>

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.bsa && 'is-invalid '}`}
                                        error={errors.bsa} labelText="BSA"
                                        value={data.bsa}
                                        // handleChange={e => setData('bsa', Math.sqrt((state.height * state.weight) / 3000).toFixed(2))}
                                        units='m<sup>2</sup>'
                                        disabled
                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.bpm && 'is-invalid '}`}
                                        error={errors.bpm} labelText="Heart Rate"
                                        handleChange={e => setData('heart_rate', e.target.value)}
                                        units='bpm'
                                        required
                                        min = {50}
                                        max = {250}
                                         />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.systolic_bp && 'is-invalid '}`}
                                        error={errors.systolic_bp} labelText="Systolic BP"
                                        handleChange={e => setData('systolic_bp', e.target.value)}
                                        units='mmHg' 
                                        min = {50}
                                        max = {250}
                                        required
                                        />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.diastolic_bp && 'is-invalid '}`}
                                        error={errors.diastolic_bp} labelText="Diastolic BP"
                                        handleChange={e => setData('diastolic_bp', e.target.value)}
                                        min = {50}
                                        max = {250}
                                        required
                                        units='mmHg' />

                                   <hr />

                                   <FormButton processing={processing} labelText='Create' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container> */}
          </Authenticated>
     )
}

export default Create;