
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


const Create = () => {
     const { auth, roles, postUrl, mode, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, backUrl } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          symptoms: '',
          angina: '', angina_class: '', angina_duration: '',
          dyspnea: '', dyspnea_class: '', dyspnea_duration: '',
          syncope: '', syncope_duration: '',
          palpitation: '', palpitation_duration: '',
          giddiness: '', giddiness_duration: '',
          fever: '', fever_duration: '',
          heart_failure_admission: '', heart_failure_admission_duration: '',
          others: '', others_text: '', others_duration: ''
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
                    return post(route(`${postUrl}`, { crf: crf, preoperative: preoperative }));
               case 'postoperative':
                    return post(route(`${postUrl}`, { crf: crf, postoperative: postoperative }));;


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
          setData('syncope_duration', varDur)
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
               <PageTitle backUrl={backUrl} pageTitle='Create Symptoms' role={roles} />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >

                                   <FormRadio
                                        type="radio"
                                        labelText="Symptoms"
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
                                                                 onChange={e => handleAnginaDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleAnginaDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleAnginaDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                                                 onChange={e => handleDyspneaDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleDyspneaDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleDyspneaDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                                                 onChange={e => handleSyncopeDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleSyncopeDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleSyncopeDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                                                 onChange={e => handlePalpitationDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handlePalpitationDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handlePalpitationDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                                                 onChange={e => handleGiddinessDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleGiddinessDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleGiddinessDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                                                 onChange={e => handleFeverDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleFeverDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleFeverDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                             selectedValue={data.heart_failure_admission }
                                             error={errors.heart_failure_admission}
                                             className={`${errors.heart_failure_admission ? 'is-invalid' : ''}`}
                                        />
                                        {data.heart_failure_admission === '1' && <>

                                             <Row>
                                                  <Col md={3}><span className="text-secondary">Duration</span></Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleHeartFailureDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleHeartFailureDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleHeartFailureDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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
                                                                 onChange={e => handleOthersDurationDays(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleOthersDurationMonths(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
                                                       </div>
                                                  </Col>
                                                  <Col md={3}>
                                                       <div className="input-group">
                                                            <input type="number" className="form-control with-units"
                                                                 onChange={e => handleOthersDurationYears(e)} />
                                                            <span className="input-group-text text-secondary input-units">days</span>
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

export default Create;