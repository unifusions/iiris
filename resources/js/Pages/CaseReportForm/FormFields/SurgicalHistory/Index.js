
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";


import CreateSurgicalHistory from "./CreateSurgicalHistory";
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, surgicalhistories, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, updateUrl, flash, backUrl } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          surgical_history: preoperative.surgical_history !== null ? preoperative.surgical_history ? '1' : '0' : null
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
               <PageTitle backUrl={backUrl} pageTitle='Surgical History' role={roles}/>
                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              <form onSubmit={preopSubmit}>

                                   <FormRadio
                                        labelText='Has Surgical History?'

                                        options={boolRadios}
                                        name="medicalHistory"
                                        handleChange={e => setData('surgical_history', e.target.value)}
                                        selectedValue={data.surgical_history !== null && data.surgical_history}
                                        error={errors.surgical_history}
                                        className={`${errors.surgical_history ? 'is-invalid' : ''}`}
                                   />
                                   <hr />
                                   <RenderBackButton backUrl={backUrl} className='me-3' />
                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                              </form>


                         </Card.Body>



                    </Card>

                    {preoperative.surgical_history !== null &&
                    <>
                         {preoperative.surgical_history ?     <CreateSurgicalHistory preoperative={preoperative} crf={crf} surgicalhistories={surgicalhistories} />:''}
                    </>
                     

                    }
               </Container>





          </Authenticated>
     )
}

export default Create;