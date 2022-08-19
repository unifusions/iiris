
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";

import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";
import CreateMedications from "./CreateMedications";
import PageTitle from "@/Pages/Shared/PageTitle";
import RenderMedication from "./RenderMedication";





const Create = () => {
     const { auth, roles, postUrl, mode, createUrl, medications, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, updateUrl, backUrl, postopmedications, preopmedications } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors } = useForm({
          hasMedications: preoperative !== undefined ? preoperative.hasMedications !== null  ? preoperative.hasMedications ? '1' : '0' : null : null,
          postHasMedications: postoperative !== undefined ?postoperative.hasMedications !== null  ? postoperative.hasMedications ? '1' : '0' : null : null,
          svHasMedications: scheduledvisit !== undefined ? scheduledvisit.hasMedications !== null  ? scheduledvisit.hasMedications ? '1' : '0' : null : null,
          usvHasMedications: unscheduledvisit !== undefined ?unscheduledvisit.hasMedications !== null  ? unscheduledvisit.hasMedications ? '1' : '0' : null : null,
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
                    <PageTitle backUrl={backUrl} pageTitle='Medications' role={roles} />

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

                                   {scheduledvisit !== undefined &&
                                        <FormRadio
                                             labelText='Has Medications?'
                                             options={boolRadios}
                                             name="svHasMedications"
                                             handleChange={e => setData('svHasMedications', e.target.value)}
                                             selectedValue={data.svHasMedications}
                                             error={errors.svHasMedications}
                                             className={`${errors.svHasMedications ? 'is-invalid' : ''}`}
                                        />}

                                   <hr />
                                   <RenderBackButton backUrl={backUrl} className='me-3' />
                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                              </form>

                         </Card.Body>



                    </Card>

                    {/* <RenderMedication
                         crf={crf}
                         preoperative={preoperative}
                         postoperative={postoperative}
                         scheduledvisit={scheduledvisit}
                         unscheduledvisit={unscheduledvisit}
                         medications={medications !== undefined ? medications : ''}
                         postopmedications={postopmedications !== undefined ? postopmedications : ''}
                         preopmedications={preopmedications !== undefined ? preopmedications : ''}
                         createUrl={createUrl}
                    /> */}

                    {preoperative !== undefined &&
                         <>
                              {preoperative.hasMedications !== null && <>
                                   {preoperative.hasMedications ? <RenderMedication crf={crf} preoperative={preoperative}
                                        medications={medications !== undefined ? medications : ''}
                                        postopmedications={postopmedications !== undefined ? postopmedications : ''} mode={mode} 
                                        createUrl={createUrl}
                                        /> : ''}
                              </>}
                         </>
                    }

                    {postoperative !== undefined && <>
                         {postoperative.hasMedications !== null && <>
                              {postoperative.hasMedications ? <RenderMedication crf={crf} postoperative={postoperative} preopmedications={preopmedications !== undefined ? preopmedications : ''}
                                   medications={medications !== undefined ? medications : ''}
                                   mode={mode}  createUrl={createUrl}
                                   /> : ''}
                         </>
                         }
                    </>}

                    {scheduledvisit !== undefined && <>
                         {scheduledvisit.hasMedications !== null && <>
                              {scheduledvisit.hasMedications ? <RenderMedication crf={crf} scheduledvisit={scheduledvisit} medications={medications !== undefined ? medications : ''}
                                   mode={mode}  createUrl={createUrl}
                                    /> : ''}
                         </>
                         }
                    </>}

                    {unscheduledvisit !== undefined && <>
                         {unscheduledvisit.hasMedications !== null && <>
                              {unscheduledvisit.hasMedications ? <RenderMedication crf={crf} unscheduledvisit={unscheduledvisit} medications={medications !== undefined ? medications : ''}
                                   mode={mode}  createUrl={createUrl} /> : ''}
                         </>
                         }
                    </>}
               </Container>





          </Authenticated>
     )
}

export default Create;