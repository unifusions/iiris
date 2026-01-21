
import React from "react";
import { Card, } from "react-bootstrap";
import { usePage, useForm, } from "@inertiajs/react";
import FormButton from "@/Pages/Shared/FormButton";
import FormRadio from "@/Pages/Shared/FormRadio";
import { DIAGNOSIS_OPTIONS } from "./HelperOptions";
import CrfLayout from "@/Layouts/CrfLayout";

const Create = () => {
     const { crf, preoperative } = usePage().props;
     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          diagnosis: '',

     });

     function handlesubmit(e) {
          e.preventDefault();
          return post(route('crf.preoperative.diagnosis.store', { crf: crf, preoperative: preoperative }));
     }



     return (
          <CrfLayout
               crf={crf}
               pageTitle={`${crf.subject_id} | Preoperative | Diagnosis`} 
            screenTitle="Preoperative Diagnosis \ Create"
               >



               <Card className='card shadow-sm'>
                    <Card.Body>
                         <form onSubmit={handlesubmit}
                         // className={hasErrors && 'was-validated'}
                         >

                              <FormRadio
                                   labelText='Diagnosis'
                                   options={DIAGNOSIS_OPTIONS}
                                   name="diagnosis"
                                   handleChange={e => setData('diagnosis', e.target.value)}
                                   selectedValue={data.diagnosis !== null && data.diagnosis}
                                   error={errors.diagnosis}
                                   className={`${errors.diagnosis ? 'is-invalid' : ''}`}
                              />


                              <hr />
                              <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

                         </form>
                    </Card.Body>
               </Card>

          </CrfLayout>

     )
}

export default Create;