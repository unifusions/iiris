import React, { useEffect, useRef } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage, useForm, InertiaLink } from '@inertiajs/inertia-react';
import { Card, BreadcrumbItem, Row, Col, Container } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

import FormInput from '../Shared/FormInput';
import FormCalendar from '../Shared/FormCalendar';
import FormRadio from '../Shared/FormRadio';
import FormButton from '../Shared/FormButton';
import PageTitle from '../Shared/PageTitle';







const LabelData = ({ labelKey, labelValue }) => {
     return (
          <Row className='mb-3'>
               <Col sm={3}>
                    <span className="text-secondary">{labelKey}</span>
               </Col>
               <Col sm={4}>
                    <span className="fw-bold">{labelValue}</span>
               </Col>
          </Row>
     )
}

const Create = () => {
     const { auth, facility, roles, subject_id } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors } = useForm({
          subject_id : subject_id,
          date_of_consent: '',
          uhid: '',
          gender: '',
          date_of_birth: ''
     });

     const genderRadios = [
          { labelText: 'Male', value: 'Male' },
          { labelText: 'Female', value: 'Female' },
          { labelText: 'Transgender', value: 'Transgender' },
     ]

     function handlesubmit(e) {
          e.preventDefault();
          post(route('crf.store'));
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
                    <PageTitle backUrl={route('crf.index')} role={roles} pageTitle='Create Case Report Forms' />

                    <Card className='card shadow-sm rounded-5'>
                         <Card.Body>
                              <form onSubmit={handlesubmit}
                              // className={hasErrors && 'was-validated'}
                              >
                                 
                                   <LabelData labelKey='Subject ID' labelValue={data.subject_id} />
                                   <LabelData labelKey='Protocol Number' labelValue='2021-04' />
                                   <LabelData labelKey='Facility' labelValue={facility} />

                                   <hr />

                                   <FormCalendar
                                        labelText="Date of Consent" error={errors.date_of_consent}
                                        name="date_of_consent"
                                        value={data.date_of_consent}
                                        handleChange={(date) => setData('date_of_consent', date)}
                                        className={`${errors.date_of_consent && 'is-invalid'}`}
                                   />


                                   <FormInput
                                        type="text"
                                        className={`${errors.uhid && 'is-invalid '}`}
                                        error={errors.uhid} labelText="UHID"
                                        handleChange={e => setData('uhid', e.target.value)} />

                                   <FormRadio
                                        type="radio" labelText="Gender"
                                        name="gender"
                                        selectedValue={data.gender}
                                        options={genderRadios}
                                        handleChange={e => setData('gender', e.target.value)}
                                        error={errors.gender}
                                        className={`${errors.gender ? 'is-invalid' : ''}`}
                                   />

                                   <FormCalendar
                                        name="date_of_birth"
                                        labelText="Date of Birth" error={errors.date_of_birth}
                                        value={data.date_of_birth}
                                        handleChange={(date) => setData('date_of_birth', date)}
                                        className={`${errors.date_of_birth && 'is-invalid'}`}
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

// export default class Index extends React.Component {


//      constructor(props) {
//           super(props);
//           this.handlesubmit = this.handlesubmit.bind(this);
//      }


//      render() {



//           return (

//           );
//      }

// }

export default Create;