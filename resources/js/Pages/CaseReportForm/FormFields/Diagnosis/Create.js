
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";


import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, crf, preoperative, backUrl, title } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          diagnosis: '',

     });

     const BOOLRADIOS = [
          { labelText: 'Aortic Regurgitation', value: 'regurgitation' },
          { labelText: 'Aortic Stenosis', value: 'stenosis' }
     ];





     function handlesubmit(e) {
          e.preventDefault();
          return post(route('crf.preoperative.diagnosis.store', { crf: crf, preoperative: preoperative }));



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
                    <PageTitle backUrl={backUrl} pageTitle={`${title} Diagnosis`} role={roles} />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >

                                   <FormRadio
                                        labelText='Diagnosis'

                                        options={BOOLRADIOS}
                                        name="diagnosis"
                                        handleChange={e => setData('diagnosis', e.target.value)}
                                        selectedValue={data.diagnosis !== null && data.diagnosis}
                                        error={errors.diagnosis}
                                        className={`${errors.diagnosis ? 'is-invalid' : ''}`}
                                   />



                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Create;