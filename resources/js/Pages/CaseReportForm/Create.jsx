import React, { useEffect, useRef } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { BreadcrumbItem, Row, Col, Container } from 'react-bootstrap';


import FormInput from '../Shared/FormInput';
import FormCalendar from '../Shared/FormCalendar';
import FormRadio from '../Shared/FormRadio';
import FormButton from '../Shared/FormButton';
import PageTitle from '../Shared/PageTitle';
import { LinkButton } from '@/Components/ui-ext/LinkButton';
import { ChevronLeftIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import SectionFooter from '@/Components/ui-ext/section/section-footer';
import { Label } from '@/Components/ui/label';





const Create = () => {
     const { auth, facility, roles, subject_id } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors } = useForm({
          subject_id: subject_id,
          date_of_consent: '',
          uhid: '',
          gender: '',
          date_of_birth: ''
     });
     const FORM_PREHEAD = [
          { label: "Subject ID", value: subject_id },
          { label: "Protocol Number", value: '2021-04' },
          { label: "Facility", value: facility }
     ]
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

               pageTitle="Case Report Form"


          >
               <Head title="Create New Case Report Form" />
               <div className=' flex justify-between items-center mb-3'>
                    <div className='w-1/2'>
                         <h1 className="text-xl font-bold">Case Report Form   </h1>

                    </div>



                    <LinkButton variant="outline" href={route('crf.index')}    >
                         <ChevronLeftIcon />Back</LinkButton>
               </div>

               <form onSubmit={handlesubmit} className="m-auto w-1/2">
                    <Card>

                         <CardHeader className="border-b border-gray-200 space-y-3">
                              <CardTitle className="border-b border-gray-200 pb-3 ">Create Subject</CardTitle>
                              <CardDescription>
                                   {FORM_PREHEAD.map((prehead, index) =>
                                        <div key={index} className='flex items-center justify-between'>

                                             <Label>{prehead.label}</Label>


                                             <span className="font-bold">{prehead.value} </span>

                                        </div>

                                   )}


                              </CardDescription>
                         </CardHeader>
                         <CardContent className="mb-6 space-y-5">

                         <FormCalendar
                              labelText="Date of Consent" error={errors.date_of_consent}
                              name="date_of_consent"
                              value={data.date_of_consent}
                              handleChange={(date) => date !== null ? setData('date_of_consent', new Date(date)) : setData('date_of_consent', '')}
                              className={`${errors.date_of_consent && 'is-invalid'}`}
                         />

                            <FormInput
                              type="text"
                              layout="row"
                              className={`${errors.uhid && 'is-invalid '}`}
                              error={errors.uhid} labelText="UHID"
                              onChange={e => setData('uhid', e.target.value)} />
 

                         <FormRadio
                              type="radio" labelText="Gender"
                              name="gender"
                              
                              layout="row"
                              optionsLayout='horizontal'
                              selectedValue={data.gender}
                              options={genderRadios}
                              handleChange={(val) => setData('gender', val)}
                              error={errors.gender}
                            
                         />

                          <FormCalendar
                              name="date_of_birth"
                              labelText="Date of Birth" error={errors.date_of_birth}
                              value={data.date_of_birth}
                              handleChange={(date) => date !== null ? setData('date_of_birth', new Date(date)) : setData('date_of_birth', '')}
                              className={`${errors.date_of_birth && 'is-invalid'}`}
                         />

                         </CardContent>
                         <SectionFooter processing={processing} onCancel={() => window.history.back()} />
                    </Card>
               </form>
              
          </Authenticated >
     )
}
 

export default Create;