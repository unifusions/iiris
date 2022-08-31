
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";

import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";


import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';

import FormCalendar from "@/Pages/Shared/FormCalendar";
import PageTitle from "@/Pages/Shared/PageTitle";


const Edit = () => {
     const { auth, roles, putUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit,labinvestigation,  backUrl } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : null,
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : null,
          li_date: labinvestigation.li_date,
          rbc: labinvestigation.rbc,
          wbc: labinvestigation.wbc,
          hemoglobin: labinvestigation.hemoglobin,
          hematocrit: labinvestigation.hematocrit,
          platelet: labinvestigation.platelet,
          blood_urea: labinvestigation.blood_urea,
          serum_creatinine: labinvestigation.serum_creatinine,
          alt: labinvestigation.alt,
          ast: labinvestigation.ast,
          alp: labinvestigation.alp,
          albumin: labinvestigation.albumin,
          total_protein: labinvestigation.total_protein,
          bilirubin: labinvestigation.bilirubin,
          pt_inr: labinvestigation.pt_inr,
          subject: crf.subject_id
     });

     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return put(route(`${putUrl}`, { crf: crf, preoperative: preoperative, labinvestigation:labinvestigation }));
               case 'postoperative':
                    return put(route(`${putUrl}`, { crf: crf, postoperative: postoperative, labinvestigation:labinvestigation }));
               case 'scheduledvisit':
                    return put(route(`${putUrl}`, { crf: crf, scheduledvisit: scheduledvisit, labinvestigation:labinvestigation }));
               case 'unscheduledvisit':
                    return put(route(`${putUrl}`, { crf: crf, postoperative: unscheduledvisit, labinvestigation:labinvestigation }));

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
               <PageTitle backUrl={backUrl} pageTitle = 'Lab Investigation' role={roles}/>

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}>

                                   <FormCalendar
                                        labelText='Date'

                                        value={data.li_date !== null ? data.li_date : ''}
                                        handleChange={(date) => setData('li_date', new Date(date))}
                                        className={`${errors.li_date ? 'is-invalid' : ''}`}
                                   />
                                   <FormInputWithLabel
                                        labelText='Red Blood Cell (RBC)'
                                        type='number'
                                        name='rbc'
                                        value={data.rbc}
                                        error={errors.rbc}
                                        units='cells/cu.mm'
                                        handleChange={e => setData('rbc', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='White  Blood Cell (RBC)'
                                        type='number'
                                        name='wbc'
                                        value={data.wbc}
                                        error={errors.wbc}
                                        units='cells/cu.mm'
                                        handleChange={e => setData('wbc', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Hemoglobin'
                                        type='number'
                                        name='Hemoglobin'
                                        value={data.hemoglobin}
                                        error={errors.hemoglobin}
                                        units='g/dl'
                                        handleChange={e => setData('hemoglobin',e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Hematocrit'
                                        type='number'
                                        name='Hematocrit'
                                        value={data.hematocrit}
                                        error={errors.hematocrit}
                                        units='%'
                                        handleChange={e => setData('hematocrit', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Platelet Count'
                                        type='number'
                                        name='Platelet Count'
                                        value={data.platelet}
                                        error={errors.platelet}
                                        units='cells/cu.mm'
                                        handleChange={e => setData('platelet', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Blood Urea'
                                        type='number'
                                        name='Blood Urea'
                                        value={data.blood_urea}
                                        error={errors.blood_urea}
                                        units='mg/dl'
                                        handleChange={e => setData('blood_urea', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Serum Creatinine'
                                        type='number'
                                        name='Serum Creatinine'
                                        value={data.serum_creatinine}
                                        error={errors.serum_creatinine}
                                        units='mg/dl'
                                        handleChange={e => setData('serum_creatinine', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Alanine Transaminase (ALT)'
                                        type='number'
                                        name='Alanine Transaminase (ALT)'
                                        value={data.alt}
                                        error={errors.alt}
                                        units='u/l'
                                        handleChange={e => setData('alt', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Aspartate Transaminase (AST)'
                                        type='number'
                                        name='Aspartate Transaminase (AST)'
                                        value={data.ast}
                                        error={errors.ast}
                                        units='u/l'
                                        handleChange={e => setData('ast', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Alkaline Phosphatase (ALP)'
                                        type='number'
                                        name='Alkaline Phosphatase (ALP)'
                                        value={data.alp}
                                        error={errors.alp}
                                        units='u/l'
                                        handleChange={e => setData('alp', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Albumin'
                                        type='number'
                                        name='Albumin'
                                        value={data.albumin}
                                        error={errors.albumin}
                                        units='gm/dl'
                                        handleChange={e => setData('albumin',e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Total Protein'
                                        type='number'
                                        name='Total Protein'
                                        value={data.total_protein}
                                        error={errors.total_protein}
                                        units='gm/dl'
                                        handleChange={e => setData('total_protein',e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Bilirubin'
                                        type='number'
                                        name='Bilirubin'
                                        value={data.bilirubin}
                                        error={errors.bilirubin}
                                        units='mg/dl'
                                        handleChange={e => setData('bilirubin',e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
                                   />

                                   <FormInputWithLabel
                                        labelText='Prothrombin Time(PT) INR'
                                        type='number'
                                        name='Prothrombin Time(PT) INR'
                                        value={data.pt_inr}
                                        error={errors.pt_inr}
                                        units='seconds'
                                        handleChange={e => setData('pt_inr', e.target.value.toString().slice(0,8).split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."))}
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