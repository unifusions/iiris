
import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import PageTitle from "@/Pages/Shared/PageTitle";
import FormRadio from "@/Pages/Shared/FormRadio";
import FormCalendar from "@/Pages/Shared/FormCalendar";


const Create = () => {
     const { auth, roles, putUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl, safetyparameter } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({

          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          structural_value_deterioration: safetyparameter.structural_value_deterioration || '',
          valve_thrombosis: safetyparameter.valve_thrombosis || '',
          all_paravalvular_leak: safetyparameter.all_paravalvular_leak || '',
          major_paravalvular_leak: safetyparameter.major_paravalvular_leak || '',
          non_structural_value_deterioration: safetyparameter.non_structural_value_deterioration || '',
          thromboembolism: safetyparameter.thromboembolism || '',
          all_bleeding: safetyparameter.all_bleeding || '',
          major_bleeding: safetyparameter.major_bleeding || '',
          endocarditis: safetyparameter.endocarditis || '',
          all_mortality: safetyparameter.all_mortality || '',
          valve_mortality: safetyparameter.valve_mortality || '',
          valve_related_operation: safetyparameter.valve_related_operation || '',
          explant: safetyparameter.explant || '',
          haemolysis: safetyparameter.haemolysis || '',
          sudden_unexplained_death: safetyparameter.sudden_unexplained_death || '',
          cardiac_death: safetyparameter.cardiac_death || '',

          date_structural_value_deterioration: safetyparameter.date_structural_value_deterioration !== null ? safetyparameter.date_structural_value_deterioration : '',
          date_valve_thrombosis: safetyparameter.date_valve_thrombosis !== null ? safetyparameter.date_valve_thrombosis : '',
          date_all_paravalvular_leak: safetyparameter.date_all_paravalvular_leak !== null ? safetyparameter.date_all_paravalvular_leak : '',
          date_major_paravalvular_leak: safetyparameter.date_major_paravalvular_leak !== null ? safetyparameter.date_major_paravalvular_leak : '',
          date_non_structural_value_deterioration: safetyparameter.date_non_structural_value_deterioration !== null ? safetyparameter.date_non_structural_value_deterioration : '',
          date_thromboembolism: safetyparameter.date_thromboembolism !== null ? safetyparameter.date_thromboembolism : '',
          date_all_bleeding: safetyparameter.date_all_bleeding !== null ? safetyparameter.date_all_bleeding : '',
          date_major_bleeding: safetyparameter.date_major_bleeding !== null ? safetyparameter.date_major_bleeding : '',
          date_endocarditis: safetyparameter.date_endocarditis !== null ? safetyparameter.date_endocarditis : '',
          date_all_mortality: safetyparameter.date_all_mortality !== null ? safetyparameter.date_all_mortality : '',
          date_valve_mortality: safetyparameter.date_valve_mortality !== null ? safetyparameter.date_valve_mortality : '',
          date_valve_related_operation: safetyparameter.date_valve_related_operation !== null ? safetyparameter.date_valve_related_operation : '',
          date_explant: safetyparameter.date_explant !== null ? safetyparameter.date_explant : '',
          date_haemolysis: safetyparameter.date_haemolysis !== null ? safetyparameter.date_haemolysis : '',
          date_sudden_unexplained_death: safetyparameter.date_sudden_unexplained_death !== null ? safetyparameter.date_sudden_unexplained_death : '',
          date_cardiac_death: safetyparameter.date_cardiac_death !== null ? safetyparameter.date_cardiac_death : '',

          has_structural_value_deterioration: safetyparameter.has_structural_value_deterioration !== null ? safetyparameter.has_structural_value_deterioration ? '1' : '0' : '',
          has_valve_thrombosis: safetyparameter.has_valve_thrombosis !== null ? safetyparameter.has_valve_thrombosis ? '1' : '0' : '',
          has_all_paravalvular_leak: safetyparameter.has_all_paravalvular_leak !== null ? safetyparameter.has_all_paravalvular_leak ? '1' : '0' : '',
          has_major_paravalvular_leak: safetyparameter.has_major_paravalvular_leak !== null ? safetyparameter.has_major_paravalvular_leak ? '1' : '0' : '',
          has_non_structural_value_deterioration: safetyparameter.has_non_structural_value_deterioration !== null ? safetyparameter.has_non_structural_value_deterioration ? '1' : '0' : '',
          has_thromboembolism: safetyparameter.has_thromboembolism !== null ? safetyparameter.has_thromboembolism ? '1' : '0' : '',
          has_all_bleeding: safetyparameter.has_all_bleeding !== null ? safetyparameter.has_all_bleeding ? '1' : '0' : '',
          has_major_bleeding: safetyparameter.has_major_bleeding !== null ? safetyparameter.has_major_bleeding ? '1' : '0' : '',
          has_endocarditis: safetyparameter.has_endocarditis !== null ? safetyparameter.has_endocarditis ? '1' : '0' : '',
          has_all_mortality: safetyparameter.has_all_mortality !== null ? safetyparameter.has_all_mortality ? '1' : '0' : '',
          has_valve_mortality: safetyparameter.has_valve_mortality !== null ? safetyparameter.has_valve_mortality ? '1' : '0' : '',
          has_valve_related_operation: safetyparameter.has_valve_related_operation !== null ? safetyparameter.has_valve_related_operation ? '1' : '0' : '',
          has_explant: safetyparameter.has_explant !== null ? safetyparameter.has_explant ? '1' : '0' : '',
          has_haemolysis: safetyparameter.has_haemolysis !== null ? safetyparameter.has_haemolysis ? '1' : '0' : '',
          has_sudden_unexplained_death: safetyparameter.has_sudden_unexplained_death !== null ? safetyparameter.has_sudden_unexplained_death ? '1' : '0' : '',
          has_cardiac_death: safetyparameter.has_cardiac_death !== null ? safetyparameter.has_cardiac_death ? '1' : '0' : ''
     });

     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ];



     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {

               case 'postoperative':
                    return put(route(`${putUrl}`, { crf: crf, postoperative: postoperative, safetyparameter: safetyparameter }));;
               case 'scheduledvisit':
                    return put(route(`${putUrl}`, { crf: crf, scheduledvisit: scheduledvisit, safetyparameter: safetyparameter }));
               case 'unscheduledvisit':
                    return put(route(`${putUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit, safetyparameter: safetyparameter }));

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
                    <PageTitle backUrl={backUrl} pageTitle='Safety Parameters' role={roles} />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >

                                   <FormRadio
                                        labelText="Structural Value Deterioration"
                                        options={boolRadios}
                                        name="has_structural_value_deterioration"
                                        handleChange={e => setData('has_structural_value_deterioration', e.target.value)}
                                        selectedValue={data.has_structural_value_deterioration !== null && data.has_structural_value_deterioration}
                                        error={errors.has_structural_value_deterioration}
                                        className={`${errors.has_structural_value_deterioration ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_structural_value_deterioration === '1' &&
                                        <Row>
                                             <Col md={3}></Col>
                                             <Col md={9}>
                                                  <FormCalendar
                                                       labelText='Date'
                                                       value={data.date_structural_value_deterioration}
                                                       handleChange={(date) => date !== null ? setData('date_structural_value_deterioration', new Date(date)) : setData('date_structural_value_deterioration', '')}
                                                       className={`${errors.date_structural_value_deterioration ? 'is-invalid' : ''}`}
                                                  />
                                                  <FormInput
                                                       labelText='Comments'
                                                       value={data.structural_value_deterioration}
                                                       className={`${errors.structural_value_deterioration && 'is-invalid '}`}
                                                       error={errors.structural_value_deterioration}
                                                       handleChange={e => setData('structural_value_deterioration', e.target.value)}
                                                  />

                                             </Col>
                                        </Row>
                                   }

                                   <FormRadio
                                        labelText="Valve Thrombosis"
                                        options={boolRadios}
                                        name="has_valve_thrombosis"
                                        handleChange={e => setData('has_valve_thrombosis', e.target.value)}
                                        selectedValue={data.has_valve_thrombosis !== null && data.has_valve_thrombosis}
                                        error={errors.has_valve_thrombosis}
                                        className={`${errors.has_valve_thrombosis ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_valve_thrombosis === '1' &&
                                      <Row>
                                      <Col md={3}></Col>
                                      <Col md={9}>
                                           <FormCalendar
                                                labelText='Date'
                                                value={data.date_valve_thrombosis}
                                                handleChange={(date) => date !== null ? setData('date_valve_thrombosis', new Date(date)) : setData('date_valve_thrombosis', '')}
                                                className={`${errors.date_valve_thrombosis ? 'is-invalid' : ''}`}
                                           />
                                           <FormInput
                                                labelText='Comments'
                                                value={data.valve_thrombosis}
                                                className={`${errors.valve_thrombosis && 'is-invalid '}`}
                                                error={errors.valve_thrombosis}
                                                handleChange={e => setData('valve_thrombosis', e.target.value)}
                                           />

                                      </Col>
                                 </Row>

                                   }


                                   <FormRadio
                                        labelText="All Paravalvular Leak"
                                        options={boolRadios}
                                        name="has_all_paravalvular_leak"
                                        handleChange={e => setData('has_all_paravalvular_leak', e.target.value)}
                                        selectedValue={data.has_all_paravalvular_leak !== null && data.has_all_paravalvular_leak}
                                        error={errors.has_all_paravalvular_leak}
                                        className={`${errors.has_all_paravalvular_leak ? 'is-invalid' : ''}`}
                                   />

                                   {data.has_all_paravalvular_leak === '1' &&
                                          <Row>
                                          <Col md={3}></Col>
                                          <Col md={9}>
                                               <FormCalendar
                                                    labelText='Date'
                                                    value={data.date_all_paravalvular_leak}
                                                    handleChange={(date) => date !== null ? setData('date_all_paravalvular_leak', new Date(date)) : setData('date_all_paravalvular_leak', '')}
                                                    className={`${errors.date_all_paravalvular_leak ? 'is-invalid' : ''}`}
                                               />
                                               <FormInput
                                                    labelText='Comments'
                                                    value={data.all_paravalvular_leak}
                                                    className={`${errors.all_paravalvular_leak && 'is-invalid '}`}
                                                    error={errors.all_paravalvular_leak}
                                                    handleChange={e => setData('all_paravalvular_leak', e.target.value)}
                                               />

                                          </Col>
                                     </Row>

                                   }

                                   <FormRadio
                                        labelText="Valve Thrombosis"
                                        options={boolRadios}
                                        name="has_major_paravalvular_leak"
                                        handleChange={e => setData('has_major_paravalvular_leak', e.target.value)}
                                        selectedValue={data.has_major_paravalvular_leak !== null && data.has_major_paravalvular_leak}
                                        error={errors.has_major_paravalvular_leak}
                                        className={`${errors.has_major_paravalvular_leak ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_major_paravalvular_leak === '1' &&
                                     <Row>
                                     <Col md={3}></Col>
                                     <Col md={9}>
                                          <FormCalendar
                                               labelText='Date'
                                               value={data.date_major_paravalvular_leak}
                                               handleChange={(date) => date !== null ? setData('date_major_paravalvular_leak', new Date(date)) : setData('date_major_paravalvular_leak', '')}
                                               className={`${errors.date_major_paravalvular_leak ? 'is-invalid' : ''}`}
                                          />
                                          <FormInput
                                               labelText='Comments'
                                               value={data.major_paravalvular_leak}
                                               className={`${errors.major_paravalvular_leak && 'is-invalid '}`}
                                               error={errors.major_paravalvular_leak}
                                               handleChange={e => setData('major_paravalvular_leak', e.target.value)}
                                          />
                                     </Col>
                                </Row>
                                   }

                                   <FormRadio
                                        labelText="Valve Thrombosis"
                                        options={boolRadios}
                                        name="has_non_structural_value_deterioration"
                                        handleChange={e => setData('has_non_structural_value_deterioration', e.target.value)}
                                        selectedValue={data.has_non_structural_value_deterioration !== null && data.has_non_structural_value_deterioration}
                                        error={errors.has_non_structural_value_deterioration}
                                        className={`${errors.has_non_structural_value_deterioration ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_non_structural_value_deterioration === '1' &&
                                   
                                   <Row>
                                   <Col md={3}></Col>
                                   <Col md={9}>
                                        <FormCalendar
                                             labelText='Date'
                                             value={data.date_non_structural_value_deterioration}
                                             handleChange={(date) => date !== null ? setData('date_non_structural_value_deterioration', new Date(date)) : setData('date_non_structural_value_deterioration', '')}
                                             className={`${errors.date_non_structural_value_deterioration ? 'is-invalid' : ''}`}
                                        />
                                        <FormInput
                                             labelText='Comments'
                                             value={data.non_structural_value_deterioration}
                                             className={`${errors.non_structural_value_deterioration && 'is-invalid '}`}
                                             error={errors.non_structural_value_deterioration}
                                             handleChange={e => setData('non_structural_value_deterioration', e.target.value)}
                                        />
                                   </Col>
                              </Row>}
                                   <hr />
                                   <div className="fs-6 fw-bold mb-3">Clinical Safety Parameters</div>

                                   <FormRadio
                                        labelText="Thromboembolism"
                                        options={boolRadios}
                                        name="has_thromboembolism"
                                        handleChange={e => setData('has_thromboembolism', e.target.value)}
                                        selectedValue={data.has_thromboembolism !== null && data.has_thromboembolism}
                                        error={errors.has_thromboembolism}
                                        className={`${errors.has_thromboembolism ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_thromboembolism === '1' &&     <Row>
                                             <Col md={3}></Col>
                                             <Col md={9}>
                                                  <FormCalendar
                                                       labelText='Date'
                                                       value={data.date_thromboembolism}
                                                       handleChange={(date) => date !== null ? setData('date_thromboembolism', new Date(date)) : setData('date_thromboembolism', '')}
                                                       className={`${errors.date_thromboembolism ? 'is-invalid' : ''}`}
                                                  />
                                                  <FormInput
                                                       labelText='Comments'
                                                       value={data.thromboembolism}
                                                       className={`${errors.thromboembolism && 'is-invalid '}`}
                                                       error={errors.thromboembolism}
                                                       handleChange={e => setData('thromboembolism', e.target.value)}
                                                  />
                                             </Col>
                                        </Row>

                                   }

                                   <FormRadio
                                        labelText="All Bleeding/Hemorrhage"
                                        options={boolRadios}
                                        name="has_all_bleeding"
                                        handleChange={e => setData('has_all_bleeding', e.target.value)}
                                        selectedValue={data.has_all_bleeding !== null && data.has_all_bleeding}
                                        error={errors.has_all_bleeding}
                                        className={`${errors.has_all_bleeding ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_all_bleeding === '1' &&
                                    
                                    <Row>
                                    <Col md={3}></Col>
                                    <Col md={9}>
                                         <FormCalendar
                                              labelText='Date'
                                              value={data.date_all_bleeding}
                                              handleChange={(date) => date !== null ? setData('date_all_bleeding', new Date(date)) : setData('date_all_bleeding', '')}
                                              className={`${errors.date_all_bleeding ? 'is-invalid' : ''}`}
                                         />
                                         <FormInput
                                              labelText='Comments'
                                              value={data.all_bleeding}
                                              className={`${errors.all_bleeding && 'is-invalid '}`}
                                              error={errors.all_bleeding}
                                              handleChange={e => setData('all_bleeding', e.target.value)}
                                         />
                                    </Col>
                               </Row>
                                   }

                                   <FormRadio
                                        labelText="Major Bleeding/Hemorrhage"
                                        options={boolRadios}
                                        name="has_major_bleeding"
                                        handleChange={e => setData('has_major_bleeding', e.target.value)}
                                        selectedValue={data.has_major_bleeding !== null && data.has_major_bleeding}
                                        error={errors.has_major_bleeding}
                                        className={`${errors.has_major_bleeding ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_major_bleeding === '1' &&
                                        <Row>
                                        <Col md={3}></Col>
                                        <Col md={9}>
                                             <FormCalendar
                                                  labelText='Date'
                                                  value={data.date_major_bleeding}
                                                  handleChange={(date) => date !== null ? setData('date_major_bleeding', new Date(date)) : setData('date_major_bleeding', '')}
                                                  className={`${errors.date_major_bleeding ? 'is-invalid' : ''}`}
                                             />
                                             <FormInput
                                                  labelText='Comments'
                                                  value={data.major_bleeding}
                                                  className={`${errors.major_bleeding && 'is-invalid '}`}
                                                  error={errors.major_bleeding}
                                                  handleChange={e => setData('major_bleeding', e.target.value)}
                                             />
                                        </Col>
                                   </Row>}


                                   <FormRadio
                                        labelText="Endocarditis"
                                        options={boolRadios}
                                        name="has_endocarditis"
                                        handleChange={e => setData('has_endocarditis', e.target.value)}
                                        selectedValue={data.has_endocarditis !== null && data.has_endocarditis}
                                        error={errors.has_endocarditis}
                                        className={`${errors.has_endocarditis ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_endocarditis === '1' &&
                                       
                                       <Row>
                                       <Col md={3}></Col>
                                       <Col md={9}>
                                            <FormCalendar
                                                 labelText='Date'
                                                 value={data.date_endocarditis}
                                                 handleChange={(date) => date !== null ? setData('date_endocarditis', new Date(date)) : setData('date_endocarditis', '')}
                                                 className={`${errors.date_endocarditis ? 'is-invalid' : ''}`}
                                            />
                                            <FormInput
                                                 labelText='Comments'
                                                 value={data.endocarditis}
                                                 className={`${errors.endocarditis && 'is-invalid '}`}
                                                 error={errors.endocarditis}
                                                 handleChange={e => setData('endocarditis', e.target.value)}
                                            />
                                       </Col>
                                  </Row>}


                                   <FormRadio
                                        labelText="All-cause Mortality"
                                        options={boolRadios}
                                        name="has_all_mortality"
                                        handleChange={e => setData('has_all_mortality', e.target.value)}
                                        selectedValue={data.has_all_mortality !== null && data.has_all_mortality}
                                        error={errors.has_all_mortality}
                                        className={`${errors.has_all_mortality ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_all_mortality === '1' &&
                                           <Row>
                                           <Col md={3}></Col>
                                           <Col md={9}>
                                                <FormCalendar
                                                     labelText='Date'
                                                     value={data.date_all_mortality}
                                                     handleChange={(date) => date !== null ? setData('date_all_mortality', new Date(date)) : setData('date_all_mortality', '')}
                                                     className={`${errors.date_all_mortality ? 'is-invalid' : ''}`}
                                                />
                                                <FormInput
                                                     labelText='Comments'
                                                     value={data.all_mortality}
                                                     className={`${errors.all_mortality && 'is-invalid '}`}
                                                     error={errors.all_mortality}
                                                     handleChange={e => setData('all_mortality', e.target.value)}
                                                />
                                           </Col>
                                      </Row>}


                                   <FormRadio
                                        labelText="Valve-related Mortality"
                                        options={boolRadios}
                                        name="has_valve_mortality"
                                        handleChange={e => setData('has_valve_mortality', e.target.value)}
                                        selectedValue={data.has_valve_mortality !== null && data.has_valve_mortality}
                                        error={errors.has_valve_mortality}
                                        className={`${errors.has_valve_mortality ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_valve_mortality === '1' &&
                                          <Row>
                                          <Col md={3}></Col>
                                          <Col md={9}>
                                               <FormCalendar
                                                    labelText='Date'
                                                    value={data.date_valve_mortality}
                                                    handleChange={(date) => date !== null ? setData('date_valve_mortality', new Date(date)) : setData('date_valve_mortality', '')}
                                                    className={`${errors.date_valve_mortality ? 'is-invalid' : ''}`}
                                               />
                                               <FormInput
                                                    labelText='Comments'
                                                    value={data.valve_mortality}
                                                    className={`${errors.valve_mortality && 'is-invalid '}`}
                                                    error={errors.valve_mortality}
                                                    handleChange={e => setData('valve_mortality', e.target.value)}
                                               />
                                          </Col>
                                     </Row>}


                                   <FormRadio
                                        labelText="Valve-related reoperation"
                                        options={boolRadios}
                                        name="has_valve_related_operation"
                                        handleChange={e => setData('has_valve_related_operation', e.target.value)}
                                        selectedValue={data.has_valve_related_operation !== null && data.has_valve_related_operation}
                                        error={errors.has_valve_related_operation}
                                        className={`${errors.has_valve_related_operation ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_valve_related_operation === '1' &&
                                      
                                      <Row>
                                      <Col md={3}></Col>
                                      <Col md={9}>
                                           <FormCalendar
                                                labelText='Date'
                                                value={data.date_valve_related_operation}
                                                handleChange={(date) => date !== null ? setData('date_valve_related_operation', new Date(date)) : setData('date_valve_related_operation', '')}
                                                className={`${errors.date_valve_related_operation ? 'is-invalid' : ''}`}
                                           />
                                           <FormInput
                                                labelText='Comments'
                                                value={data.valve_related_operation}
                                                className={`${errors.valve_related_operation && 'is-invalid '}`}
                                                error={errors.valve_related_operation}
                                                handleChange={e => setData('valve_related_operation', e.target.value)}
                                           />
                                      </Col>
                                 </Row>
                                   }

                                   <FormRadio
                                        labelText="Explant"
                                        options={boolRadios}
                                        name="has_explant"
                                        handleChange={e => setData('has_explant', e.target.value)}
                                        selectedValue={data.has_explant !== null && data.has_explant}
                                        error={errors.has_explant}
                                        className={`${errors.has_explant ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_explant === '1' &&
                                        <Row>
                                        <Col md={3}></Col>
                                        <Col md={9}>
                                             <FormCalendar
                                                  labelText='Date'
                                                  value={data.date_explant}
                                                  handleChange={(date) => date !== null ? setData('date_explant', new Date(date)) : setData('date_explant', '')}
                                                  className={`${errors.date_explant ? 'is-invalid' : ''}`}
                                             />
                                             <FormInput
                                                  labelText='Comments'
                                                  value={data.explant}
                                                  className={`${errors.explant && 'is-invalid '}`}
                                                  error={errors.explant}
                                                  handleChange={e => setData('explant', e.target.value)}
                                             />
                                        </Col>
                                   </Row>}


                                   <FormRadio
                                        labelText="Haemolysis"
                                        options={boolRadios}
                                        name="has_haemolysis"
                                        handleChange={e => setData('has_haemolysis', e.target.value)}
                                        selectedValue={data.has_haemolysis !== null && data.has_haemolysis}
                                        error={errors.has_haemolysis}
                                        className={`${errors.has_haemolysis ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_haemolysis === '1' &&
                                     
                                     <Row>
                                     <Col md={3}></Col>
                                     <Col md={9}>
                                          <FormCalendar
                                               labelText='Date'
                                               value={data.date_haemolysis}
                                               handleChange={(date) => date !== null ? setData('date_haemolysis', new Date(date)) : setData('date_haemolysis', '')}
                                               className={`${errors.date_haemolysis ? 'is-invalid' : ''}`}
                                          />
                                          <FormInput
                                               labelText='Comments'
                                               value={data.haemolysis}
                                               className={`${errors.haemolysis && 'is-invalid '}`}
                                               error={errors.haemolysis}
                                               handleChange={e => setData('haemolysis', e.target.value)}
                                          />
                                     </Col>
                                </Row>}


                                   <FormRadio
                                        labelText="Sudden Unexplained Death"
                                        options={boolRadios}
                                        name="has_sudden_unexplained_death"
                                        handleChange={e => setData('has_sudden_unexplained_death', e.target.value)}
                                        selectedValue={data.has_sudden_unexplained_death !== null && data.has_sudden_unexplained_death}
                                        error={errors.has_sudden_unexplained_death}
                                        className={`${errors.has_sudden_unexplained_death ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_sudden_unexplained_death === '1' &&
                                       
                                       <Row>
                                       <Col md={3}></Col>
                                       <Col md={9}>
                                            <FormCalendar
                                                 labelText='Date'
                                                 value={data.date_sudden_unexplained_death}
                                                 handleChange={(date) => date !== null ? setData('date_sudden_unexplained_death', new Date(date)) : setData('date_sudden_unexplained_death', '')}
                                                 className={`${errors.date_sudden_unexplained_death ? 'is-invalid' : ''}`}
                                            />
                                            <FormInput
                                                 labelText='Comments'
                                                 value={data.sudden_unexplained_death}
                                                 className={`${errors.sudden_unexplained_death && 'is-invalid '}`}
                                                 error={errors.sudden_unexplained_death}
                                                 handleChange={e => setData('sudden_unexplained_death', e.target.value)}
                                            />
                                       </Col>
                                  </Row>}


                                   <FormRadio
                                        labelText="Cardiac Death"
                                        options={boolRadios}
                                        name="has_cardiac_death"
                                        handleChange={e => setData('has_cardiac_death', e.target.value)}
                                        selectedValue={data.has_cardiac_death !== null && data.has_cardiac_death}
                                        error={errors.has_cardiac_death}
                                        className={`${errors.has_cardiac_death ? 'is-invalid' : ''}`}
                                   />
                                   {data.has_cardiac_death === '1' &&
                                      
                                      <Row>
                                      <Col md={3}></Col>
                                      <Col md={9}>
                                           <FormCalendar
                                                labelText='Date'
                                                value={data.date_cardiac_death}
                                                handleChange={(date) => date !== null ? setData('date_cardiac_death', new Date(date)) : setData('date_cardiac_death', '')}
                                                className={`${errors.date_cardiac_death ? 'is-invalid' : ''}`}
                                           />
                                           <FormInput
                                                labelText='Comments'
                                                value={data.cardiac_death}
                                                className={`${errors.cardiac_death && 'is-invalid '}`}
                                                error={errors.cardiac_death}
                                                handleChange={e => setData('cardiac_death', e.target.value)}
                                           />
                                      </Col>
                                 </Row>}


                                   <hr />

                                   <FormButton processing={processing} labelText='Update' type="submit" mode="warning" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Create;