
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";

import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";
import CreateMedications from "./CreateMedications";
import PageTitle from "@/Pages/Shared/PageTitle";





const Create = () => {
     const { auth, roles, postUrl, mode, medications, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, updateUrl, backUrl } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          hasMedications: preoperative !== undefined ? preoperative.hasMedications ? '1' : '0' : null,
          postHasMedications: postoperative !== undefined ? postoperative.hasMedications ? '1' : '0' : null
     });

     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ];

     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return put(route(`${updateUrl}`, { crf: crf, preoperative: preoperative }))
               case 'postoperative':
                    return put(route(`${updateUrl}`, { crf: crf, postoperative: postoperative }));
               case 'scheduledvisit':
                    return put(route(`${updateUrl}`, { crf: crf, scheduledvisit: scheduledvisit }));
               case 'unscheduledvisit':
                    return put(route(`${updateUrl}`, { crf: crf, postoperative: unscheduledvisit }));

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
               <Head title="Medications" />
               <Container>
               <PageTitle backUrl={backUrl} pageTitle = 'Medications'  role={roles}/>
                    
                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              <form onSubmit={handlesubmit}>
                                   {preoperative !== undefined &&
                                        <FormRadio
                                             labelText='Has Medications?'

                                             options={boolRadios}
                                             name="hasMedications"
                                             handleChange={e => setData('hasMedications', e.target.value)}
                                             selectedValue={data.hasMedications !== null && data.hasMedications}
                                             error={errors.hasMedications}
                                             className={`${errors.hasMedications ? 'is-invalid' : ''}`}
                                        />}

                                   {postoperative !== undefined &&
                                        <FormRadio
                                             labelText='Has Medications?'
                                             options={boolRadios}
                                             name="postHasMedications"
                                             handleChange={e => setData('postHasMedications', e.target.value)}
                                             selectedValue={data.postHasMedications}
                                             error={errors.postHasMedications}
                                             className={`${errors.postHasMedications ? 'is-invalid' : ''}`}
                                        />}



                                   <hr />
                                   <RenderBackButton backUrl={backUrl} className='me-3' />
                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                              </form>


                         </Card.Body>



                    </Card>

                    {preoperative !== undefined &&
                         <>
                              {preoperative.hasMedications !== null && <>
                                   {preoperative.hasMedications ? <CreateMedications crf={crf} preoperative={preoperative} medications={medications} mode={mode} /> : ''}
                              </>}
                         </>
                    }

                    {postoperative !== undefined && <>
                         {postoperative.hasMedications !== null && <>
                              {postoperative.hasMedications? <CreateMedications crf={crf} postoperative={postoperative} medications={medications} mode={mode} /> : ''}
                         </>
                         }
                    </>}
               </Container>





          </Authenticated>
     )
}

export default Create;