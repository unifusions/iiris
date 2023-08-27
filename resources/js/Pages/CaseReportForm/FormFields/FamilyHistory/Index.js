
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";


import CreateFamilyHistory from "./CreateFamilyHistory";
import PageTitle from "@/Pages/Shared/PageTitle";
import { BOOLYESNO } from "../Helper";
import UpdateFamilyHistory from "./UpdateFamilyHistory";


const Create = () => {
     const { auth, roles, postUrl, mode, familyhistories, crf, preoperative,   updateUrl,  backUrl, predefinedfamilyhistory } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          family_history: preoperative.family_history !== null ? preoperative.family_history ? '1' : '0' : null
     });


     function preopSubmit(e) {
          e.preventDefault();
          put(route(`${updateUrl}`, { crf: crf, preoperative: preoperative }))
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
               <Head title="Family History" />


               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Family History' role={roles} />

                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              <form onSubmit={preopSubmit}>

                                   <FormRadio
                                        labelText='Has Family History?'
                                        options={BOOLYESNO}
                                        name="familyhistory"
                                        handleChange={e => setData('family_history', e.target.value)}
                                        selectedValue={data.family_history !== null && data.family_history}
                                        error={errors.family_history}
                                        className={`${errors.family_history ? 'is-invalid' : ''}`}
                                   />
                                   <hr />
                                   <RenderBackButton backUrl={backUrl} className='me-3' />
                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                              </form>


                         </Card.Body>



                    </Card>

                    {preoperative.family_history !== null &&
                         <>
                              {predefinedfamilyhistory ? <UpdateFamilyHistory preoperative={preoperative} crf={crf} predefinedfamilyhistory={predefinedfamilyhistory} /> : <CreateFamilyHistory preoperative={preoperative} crf={crf} familyhistories={familyhistories} />}
                         </>

                    }

                    


                



               </Container>
          </Authenticated>
     )
}

export default Create;