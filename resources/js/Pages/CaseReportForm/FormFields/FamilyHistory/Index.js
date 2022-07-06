
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";


import CreateFamilyHistory from "./CreateFamilyHistory";
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, familyhistories, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, updateUrl, flash, backUrl } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          family_history: preoperative.family_history !== null ? preoperative.family_history ? '1' : '0' : null
     });

     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ];

     function preopSubmit(e) {
          e.preventDefault();
          put(route(`${updateUrl}`, { crf: crf, preoperative: preoperative }))
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
               <Head title="Medical History" />


               <Container>
               <PageTitle backUrl={backUrl} pageTitle = 'Family History' />

                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              <form onSubmit={preopSubmit}>

                                   <FormRadio
                                        labelText='Has Family History?'

                                        options={boolRadios}
                                        name="familyhistory"
                                        handleChange={e => setData('family_history', e.target.value)}
                                        selectedValue={data.family_history !== null && data.family_history}
                                        error={errors.family_history}
                                        className={`${errors.family_history ? 'is-invalid' : ''}`}
                                   />
                                   <hr />
                                   <RenderBackButton backUrl={backUrl} className='me-3' />
                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                              </form>


                         </Card.Body>



                    </Card>

                    {preoperative.family_history !== null &&
                         <>
                              {preoperative.family_history ? <CreateFamilyHistory preoperative={preoperative} crf={crf} familyhistories={familyhistories} /> : ''}
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