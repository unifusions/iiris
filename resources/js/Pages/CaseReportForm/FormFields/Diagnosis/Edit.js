
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormInputDuration from "@/Pages/Shared/FormInputDuration";

import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import PageTitle from "@/Pages/Shared/PageTitle";
import { DIAGNOSIS_OPTIONS } from "./HelperOptions";


const Edit = () => {
     const { auth, roles, crf, preoperative, backUrl, diagnosis,
          title } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          diagnosis: diagnosis.diagnosis_data,
     });



  

     function handlesubmit(e) {
          e.preventDefault();
          return put(route('crf.preoperative.diagnosis.update', { crf: crf, preoperative: preoperative, diagnosi: diagnosis }));




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
                    <PageTitle backUrl={backUrl} pageTitle={`${title} Symptoms`} role={roles} />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >



                                   <FormRadio
                                        labelText='Diagnosis'

                                        options={DIAGNOSIS_OPTIONS}
                                        name="diagnosis"
                                        handleChange={e => setData('diagnosis', e.target.value)}
                                        selectedValue={data.diagnosis !== null && data.diagnosis}
                                        error={errors.diagnosis}
                                        className={`${errors.diagnosis ? 'is-invalid' : ''}`}
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

export default Edit;