
import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import PageTitle from "@/Pages/Shared/PageTitle";


const Create = () => {
     const { auth, roles, postUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({

          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          structural_value_deterioration: '',
          valve_thrombosis: '',
          all_paravalvular_leak: '',
          major_paravalvular_leak: '',
          non_structural_value_deterioration: '',
          thromboembolism: '',
          all_bleeding: '',
          major_bleeding: '',
          endocarditis: '',
          all_mortality: '',
          valve_mortality: '',
          valve_related_operation: '',
          explant: '',
          haemolysis: '',
          sudden_unexplained_death: '',
          cardiac_death: ''
     });




     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {

               case 'postoperative':
                    return post(route(`${postUrl}`, { crf: crf, postoperative: postoperative }));;
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
               <Head title="Create New Case Report Form" />
               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Create Safety Parameter' />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >



                                   <FormInput
                                        value={data.structural_value_deterioration}
                                        className={`${errors.structural_value_deterioration && 'is-invalid '}`}
                                        error={errors.structural_value_deterioration} labelText="Structural Value Deterioration"
                                        handleChange={e => setData('structural_value_deterioration', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.valve_thrombosis}
                                        className={`${errors.valve_thrombosis && 'is-invalid '}`}
                                        error={errors.valve_thrombosis} labelText="Valve Thrombosis"
                                        handleChange={e => setData('valve_thrombosis', e.target.value)}
                                   />



                                   <FormInput
                                        value={data.all_paravalvular_leak}
                                        className={`${errors.all_paravalvular_leak && 'is-invalid '}`}
                                        error={errors.all_paravalvular_leak} labelText="All Paravalvular Leak"
                                        handleChange={e => setData('all_paravalvular_leak', e.target.value)}
                                   />
                                   <FormInput
                                        value={data.major_paravalvular_leak}
                                        className={`${errors.major_paravalvular_leak && 'is-invalid '}`}
                                        error={errors.major_paravalvular_leak} labelText="Major Paravalvular Leak"
                                        handleChange={e => setData('major_paravalvular_leak', e.target.value)}
                                   />
                                   <FormInput
                                        value={data.non_structural_value_deterioration}
                                        className={`${errors.non_structural_value_deterioration && 'is-invalid '}`}
                                        error={errors.non_structural_value_deterioration} labelText="Non-structural Valve Deterioration "
                                        handleChange={e => setData('non_structural_value_deterioration', e.target.value)}
                                   />
                                   <hr />
                                   <div className="fs-6 fw-bold mb-3">Clinical Safety Parameters</div>
                                   <FormInput
                                        value={data.thromboembolism}
                                        className={`${errors.thromboembolism && 'is-invalid '}`}
                                        error={errors.thromboembolism} labelText="Thromboembolism"
                                        handleChange={e => setData('thromboembolism', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.all_bleeding}
                                        className={`${errors.all_bleeding && 'is-invalid '}`}
                                        error={errors.all_bleeding} labelText="All Bleeding/Hemorrhage"
                                        handleChange={e => setData('all_bleeding', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.major_bleeding}
                                        className={`${errors.major_bleeding && 'is-invalid '}`}
                                        error={errors.major_bleeding} labelText="Major Bleeding/Hemorrhage"
                                        handleChange={e => setData('major_bleeding', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.endocarditis}
                                        className={`${errors.endocarditis && 'is-invalid '}`}
                                        error={errors.endocarditis} labelText="Endocarditis"
                                        handleChange={e => setData('endocarditis', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.all_mortality}
                                        className={`${errors.all_mortality && 'is-invalid '}`}
                                        error={errors.all_mortality} labelText="All-cause Mortality"
                                        handleChange={e => setData('all_mortality', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.valve_mortality}
                                        className={`${errors.valve_mortality && 'is-invalid '}`}
                                        error={errors.valve_mortality} labelText="Valve-related Mortality"
                                        handleChange={e => setData('valve_mortality', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.valve_related_operation}
                                        className={`${errors.valve_related_operation && 'is-invalid '}`}
                                        error={errors.valve_related_operation} labelText="Valve-related reoperation"
                                        handleChange={e => setData('valve_related_operation', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.explant}
                                        className={`${errors.explant && 'is-invalid '}`}
                                        error={errors.explant} labelText="Explant"
                                        handleChange={e => setData('explant', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.haemolysis}
                                        className={`${errors.haemolysis && 'is-invalid '}`}
                                        error={errors.haemolysis} labelText="Haemolysis"
                                        handleChange={e => setData('haemolysis', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.sudden_unexplained_death}
                                        className={`${errors.sudden_unexplained_death && 'is-invalid '}`}
                                        error={errors.sudden_unexplained_death} labelText="Sudden Unexplained
                                        Death"
                                        handleChange={e => setData('sudden_unexplained_death', e.target.value)}
                                   />

                                   <FormInput
                                        value={data.cardiac_death}
                                        className={`${errors.cardiac_death && 'is-invalid '}`}
                                        error={errors.cardiac_death} labelText="Cardiac
                                        Death"
                                        handleChange={e => setData('cardiac_death', e.target.value)}
                                   />


                                   <hr />

                                   <FormButton processing={processing} labelText='Create' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Create;