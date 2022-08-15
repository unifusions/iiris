
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


const Edit = () => {
     const { auth, roles, putUrl, mode, crf, preoperative, postoperative, scheduledvisit,
           unscheduledvisit, backUrl, symptom,
           title  } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: symptom.pre_operative_data_id,
          post_operative_data_id: symptom.post_operative_data_id,

          symptoms: symptom.symptoms !== null ? symptom.symptoms ? '1' : '0' : null,
          angina: symptom.angina !== null ? symptom.angina ? '1' : '0' : null,
          angina_class: symptom.angina_class !== null ? symptom.angina_class : null,
          angina_duration: symptom.angina_duration !== null ? symptom.angina_duration : '',

          dyspnea: symptom.dyspnea !== null ? symptom.dyspnea ? '1' : '0' : null,
          dyspnea_class: '',
          dyspnea_duration: symptom.dyspnea_duration !== null ? symptom.dyspnea_duration : '',
         

          syncope: symptom.syncope !== null ? symptom.syncope ? '1' : '0' : null,
          syncope_duration: symptom.syncope_duration !== null? symptom.syncope_duration :'',

          palpitation: symptom.palpitation !== null ? symptom.palpitation ? '1' : '0' : null,
          palpitation_duration: symptom.palpitation_duration !== null ? symptom.palpitation_duration : '',

          giddiness: symptom.giddiness !== null ? symptom.giddiness ? '1' : '0' : null,
          giddiness_duration: symptom.giddiness_duration !== null ? symptom.giddiness_duration : '',

          fever: symptom.fever !== null ? symptom.fever ? '1' : '0' : null,
          fever_duration: symptom.fever_duration !== null ? symptom.fever_duration:'',

          heart_failure_admission: symptom.heart_failure_admission !== null ? symptom.heart_failure_admission ? '1' : '0' : null,
          heart_failure_admission_duration: symptom.heart_failure_admission_duration !== null ? symptom.heart_failure_admission_duration : '',

          others: symptom.others !== null ? symptom.others ? '1' : '0' : null,
          others_text: symptom.others_text || '',
          others_duration: symptom.others_duration  !== null ? symptom.others_duration: ''
     });



     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ]

     const anginaClassRadios = [
          { labelText: 'Class I', value: 'Class I' },
          { labelText: 'Class II', value: 'Class II' },
          { labelText: 'Class III', value: 'Class III' },
          { labelText: 'Class IV', value: 'Class IV' },
     ];




     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return put(route(`${putUrl}`, { crf: crf, preoperative: preoperative, symptom: symptom }));
               case 'postoperative':
                    return put(route(`${putUrl}`, { crf: crf, postoperative: postoperative, symptom: symptom }));;
               case 'scheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, scheduledvisit: scheduledvisit }));
               case 'unscheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit }));

          }
     }
     function handleAnginaDurationDays(e) {
          const varDur = { ...data.angina_duration, 'days': e.target.value };
          setData('angina_duration', varDur)
     }
     function handleAnginaDurationMonths(e) {
          const varDur = { ...data.angina_duration, 'months': e.target.value };
          setData('angina_duration', varDur)

     }
     function handleAnginaDurationYears(e) {
          const varDur = { ...data.angina_duration, 'years': e.target.value };
          setData('angina_duration', varDur)
     }

     //Dyspnea
     function handleDyspneaDurationDays(e) {
          const varDur = { ...data.dyspnea_duration, 'days': e.target.value };
          setData('dyspnea_duration', varDur)
     }
     function handleDyspneaDurationMonths(e) {
          const varDur = { ...data.dyspnea_duration, 'months': e.target.value };
          setData('dyspnea_duration', varDur)
     }

     function handleDyspneaDurationYears(e) {
          const varDur = { ...data.dyspnea_duration, 'years': e.target.value };
          setData('dyspnea_duration', varDur)
     }

     //Syncope
     function handleSyncopeDurationDays(e) {
          const varDur = { ...data.syncope_duration, 'days': e.target.value };
          setData('syncope_duration', varDur)
     }
     function handleSyncopeDurationMonths(e) {
          const varDur = { ...data.syncope_duration, 'months': e.target.value };
          setData('syncope_duration', varDur)
     }

     function handleSyncopeDurationYears(e) {
          const varDur = { ...data.syncope_duration, 'years': e.target.value };
          setData('syncope_duration', varDur)
     }

     //Palpitation
     function handlePalpitationDurationDays(e) {
          const varDur = { ...data.palpitation_duration, 'days': e.target.value };
          setData('palpitation_duration', varDur)
     }
     function handlePalpitationDurationMonths(e) {
          const varDur = { ...data.palpitation_duration, 'months': e.target.value };
          setData('palpitation_duration', varDur)
     }
     function handlePalpitationDurationYears(e) {
          const varDur = { ...data.palpitation_duration, 'years': e.target.value };
          setData('palpitation_duration', varDur)
     }

     // Giddiness
     function handleGiddinessDurationDays(e) {
          const varDur = { ...data.giddiness_duration, 'days': e.target.value };
          setData('giddiness_duration', varDur)
     }
     function handleGiddinessDurationMonths(e) {
          const varDur = { ...data.giddiness_duration, 'months': e.target.value };
          setData('giddiness_duration', varDur)
     }
     function handleGiddinessDurationYears(e) {
          const varDur = { ...data.giddiness_duration, 'years': e.target.value };
          setData('giddiness_duration', varDur)
     }

     // Fever
     function handleFeverDurationDays(e) {
          const varDur = { ...data.fever_duration, 'days': e.target.value };
          setData('fever_duration', varDur)
     }
     function handleFeverDurationMonths(e) {
          const varDur = { ...data.fever_duration, 'months': e.target.value };
          setData('fever_duration', varDur)
     }
     function handleFeverDurationYears(e) {
          const varDur = { ...data.fever_duration, 'years': e.target.value };
          setData('fever_duration', varDur)
     }

     // Heart Failure
     function handleHeartFailureDurationDays(e) {
          const varDur = { ...data.heart_failure_admission_duration, 'days': e.target.value };
          setData('heart_failure_admission_duration', varDur)
     }
     function handleHeartFailureDurationMonths(e) {
          const varDur = { ...data.heart_failure_admission_duration, 'months': e.target.value };
          setData('heart_failure_admission_duration', varDur)
     }
     function handleHeartFailureDurationYears(e) {
          const varDur = { ...data.heart_failure_admission_duration, 'years': e.target.value };
          setData('heart_failure_admission_duration', varDur)
     }

     // Others
     function handleOthersDurationDays(e) {
          const varDur = { ...data.others_duration, 'days': e.target.value };
          setData('others_duration', varDur)
     }
     function handleOthersDurationMonths(e) {
          const varDur = { ...data.others_duration, 'months': e.target.value };
          setData('others_duration', varDur)
     }

     function handleOthersDurationYears(e) {
          const varDur = { ...data.others_duration, 'years': e.target.value };
          setData('others_duration', varDur)
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
                                        type="radio"
                                        labelText={`History of ${title} Symptoms ?`}
                                        name="symptoms"
                                        options={boolRadios}
                                        handleChange={e => setData('symptoms', e.target.value)}
                                        selectedValue={data.symptoms}
                                        error={errors.symptoms}
                                        className={`${errors.symptoms ? 'is-invalid' : ''}`}
                                   />

                                   <hr />
                                   {data.symptoms === '1' && <>
                                        <FormRadio
                                             type="radio"

                                             labelText="Angina on Exertion"
                                             name="angina"
                                             options={boolRadios}
                                             handleChange={e => setData('angina', e.target.value)}
                                             selectedValue={data.angina}
                                             error={errors.angina}
                                             className={`${errors.angina ? 'is-invalid' : ''}`}
                                        />
                                        {data.angina === '1' && <>
                                             <FormRadio
                                                  type="radio"
                                                  labelText="Class"
                                                  name="angina_class"
                                                  options={anginaClassRadios}
                                                  handleChange={e => setData('angina_class', e.target.value)}
                                                  selectedValue={data.angina_class}
                                                  error={errors.angina_class}
                                                  className={`${errors.angina_class ? 'is-invalid' : ''}`}
                                             />
                                             <Row className="mb-3">
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleAnginaDurationDays(e)} 
                                                                 value = {data.angina_duration.days !== undefined && data.angina_duration.days }
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleAnginaDurationMonths(e)} 
                                                                 value = {data.angina_duration.months}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleAnginaDurationYears(e)} 
                                                                 value = {data.angina_duration.years}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio
                                             type="radio"
                                             labelText="Dyspnea on Exertion"
                                             name="dyspnea"
                                             options={boolRadios}
                                             handleChange={e => setData('dyspnea', e.target.value)}
                                             selectedValue={data.dyspnea}
                                             error={errors.dyspnea}
                                             className={`${errors.dyspnea ? 'is-invalid' : ''}`}
                                        />
                                        {data.dyspnea === '1' && <>
                                             <FormRadio
                                                  type="radio"
                                                  labelText="Class"
                                                  name="dyspnea_class"
                                                  options={anginaClassRadios}
                                                  handleChange={e => setData('dyspnea_class', e.target.value)}
                                                  selectedValue={data.dyspnea_class}
                                                  error={errors.dyspnea_class}
                                                  className={`${errors.dyspnea_class ? 'is-invalid' : ''}`}
                                             />
                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleDyspneaDurationDays(e)} 
                                                                 value = {data.dyspnea_duration.days}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleDyspneaDurationMonths(e)} 
                                                                 value = {data.dyspnea_duration.months}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleDyspneaDurationYears(e)} 
                                                                 value = {data.dyspnea_duration.years}/>
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio type="radio"
                                             labelText="Syncope"
                                             name="syncope"
                                             options={boolRadios}
                                             handleChange={e => setData('syncope', e.target.value)}
                                             selectedValue={data.syncope}
                                             error={errors.syncope}
                                             className={`${errors.syncope ? 'is-invalid' : ''}`}
                                        />
                                        {data.syncope === '1' && <>

                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleSyncopeDurationDays(e)} 
                                                                 value = {data.syncope_duration.days}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleSyncopeDurationMonths(e)} 
                                                                 value = {data.syncope_duration.months}/>
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleSyncopeDurationYears(e)} 
                                                                 value = {data.syncope_duration.years}/>
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio type="radio"
                                             labelText="Palpitation"
                                             name="palpitation"
                                             options={boolRadios}
                                             handleChange={e => setData('palpitation', e.target.value)}
                                             selectedValue={data.palpitation}
                                             error={errors.palpitation}
                                             className={`${errors.palpitation ? 'is-invalid' : ''}`}
                                        />
                                        {data.palpitation === '1' && <>

                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handlePalpitationDurationDays(e)}
                                                                 value = {data.palpitation_duration.days !== undefined && data.palpitation_duration.days}
                                                                  />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handlePalpitationDurationMonths(e)}
                                                                 value = {data.palpitation_duration.months} />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handlePalpitationDurationYears(e)} 
                                                                 value = {data.palpitation_duration.years}/>
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio type="radio"
                                             labelText="Giddiness"
                                             name="giddiness"
                                             options={boolRadios}
                                             handleChange={e => setData('giddiness', e.target.value)}
                                             selectedValue={data.giddiness}
                                             error={errors.giddiness}
                                             className={`${errors.giddiness ? 'is-invalid' : ''}`}
                                        />
                                        {data.giddiness === '1' && <>

                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleGiddinessDurationDays(e)}
                                                                 value = {data.giddiness_duration.days}/>
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleGiddinessDurationMonths(e)} 
                                                                 value = {data.giddiness_duration.months}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleGiddinessDurationYears(e)} 
                                                                 value = {data.giddiness_duration.years}/>
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio type="radio"
                                             labelText="Fever"
                                             name="fever"
                                             options={boolRadios}
                                             handleChange={e => setData('fever', e.target.value)}
                                             selectedValue={data.fever}
                                             error={errors.fever}
                                             className={`${errors.fever ? 'is-invalid' : ''}`}
                                        />
                                        {data.fever === '1' && <>

                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleFeverDurationDays(e)} 
                                                                 value = {data.fever_duration.days}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleFeverDurationMonths(e)} 
                                                                 value = {data.fever_duration.months}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleFeverDurationYears(e)} 
                                                                 value = {data.fever_duration.years} />
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio type="radio"
                                             labelText="Heart Failure Admission"
                                             name="heart_failure_admission"
                                             options={boolRadios}
                                             handleChange={e => setData('heart_failure_admission', e.target.value)}
                                             selectedValue={data.heart_failure_admission}
                                             error={errors.heart_failure_admission}
                                             className={`${errors.heart_failure_admission ? 'is-invalid' : ''}`}
                                        />
                                        {data.heart_failure_admission === '1' && <>

                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleHeartFailureDurationDays(e)} 
                                                                 value = {data.heart_failure_admission_duration.days}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleHeartFailureDurationMonths(e)} 
                                                                 value = {data.heart_failure_admission_duration.months}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleHeartFailureDurationYears(e)} 
                                                                 value = {data.heart_failure_admission_duration.years} />
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                        <FormRadio type="radio"
                                             labelText="Others"
                                             name="others"
                                             options={boolRadios}
                                             handleChange={e => setData('others', e.target.value)}
                                             selectedValue={data.others}
                                             error={errors.others}
                                             className={`${errors.others ? 'is-invalid' : ''}`}
                                        />
                                        {data.others === '1' && <>
                                             <FormInput type="text"
                                                  name="others_text"
                                                  labelText="Others"
                                                  handleChange={e => setData('others_text', e.target.value)}
                                                  error={errors.others_text}
                                                  className={`${errors.others_text ? 'is-invalid' : ''}`}
                                             />
                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleOthersDurationDays(e)} 
                                                                 value = {data.others_duration.days}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleOthersDurationMonths(e)} 
                                                                 value = {data.others_duration.months}
                                                                 />
                                                            <span className="input-group-text text-secondary input-units">months</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleOthersDurationYears(e)} 
                                                                 value = {data.others_duration.years}/>
                                                            <span className="input-group-text text-secondary input-units">years</span>
                                                       </div>
                                                  </Col>

                                             </Row>

                                        </>}
                                        <hr />

                                   </>}

                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>
     )
}

export default Edit;