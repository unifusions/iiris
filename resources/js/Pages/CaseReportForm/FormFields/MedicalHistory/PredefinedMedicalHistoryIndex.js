
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Modal } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/inertia-react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import FormRadio from "@/Pages/Shared/FormRadio";
import { RenderBackButton, RenderCreateButton, RenderUpdateButton } from "../../FormData/FormDataHelper";
import MedicalHistoryData from "../../FormData/MedicalHistoryData";
import CreateMedicalHistory from "./CreateMedicalHistory";
import PageTitle from "@/Pages/Shared/PageTitle";
import { BOOLYESNO } from "../Helper";
import EditMedicalHistory from "./EditMedicalHistory";


const Create = () => {
     const { auth, roles, postUrl, mode, medicalhistories, crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, updateUrl, flash, backUrl, predefinedmedicalhistories } = usePage().props;
     const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          medical_history: preoperative.medical_history !== null ? preoperative.medical_history ? '1' : '0' : null
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
               <Head title="Medical History" />


               <Container>
                    <PageTitle backUrl={backUrl} pageTitle='Medical History' role={roles} />
                    <CreateMedicalHistory preoperative={preoperative} crf={crf} medicalhistories={medicalhistories} predefinedmedicalhistories={predefinedmedicalhistories}/> 
                    
                 
               </Container>





          </Authenticated>
     )
}

export default Create;