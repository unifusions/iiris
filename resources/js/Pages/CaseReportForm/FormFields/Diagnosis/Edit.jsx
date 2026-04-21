
import React, { useEffect, useState } from "react";
 

import { Head, Link, usePage, useForm, } from "@inertiajs/react";
 

 
import FormRadio from "@/Pages/Shared/FormRadio";
 
import { DIAGNOSIS_OPTIONS } from "./HelperOptions";
import CrfLayout from "@/Layouts/CrfLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Save } from "lucide-react";


const Edit = () => {
     const { auth, roles, crf, preoperative, backUrl, diagnosis,
          title } = usePage().props;
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          diagnosis: diagnosis.diagnosis_data,
     });





     function handlesubmit(e) {
          e.preventDefault();
          return put(route('crf.preoperative.diagnosis.update', { crf: crf, preoperative: preoperative, diagnosi: diagnosis }));




     }


     return (
          <CrfLayout
               crf={crf}
               backUrl={backUrl}

               screenTitle="Preoperative Diagnosis \ Edit"
                  pageTitle={`${crf.subject_id} | Preoperative | Diagnosis`} 
          >

 
                  
 <Card  >
                    <form onSubmit={handlesubmit}
                    // className={hasErrors && 'was-validated'}
                    >
                         <CardHeader className="border-b border-gray-200">
                              <CardTitle >
                                   <div className="flex items-center justify-between">
                                        <div className='fs-6 font-bold'>
                                             Diagnosis
                                        </div>
                                   </div>
                              </CardTitle>
                         </CardHeader>
                         <CardContent>



                              <FormRadio
                                   labelText='Diagnosis'
                                   options={DIAGNOSIS_OPTIONS}
                                   name="diagnosis"
                                   handleChange={e => setData('diagnosis', e.target.value)}
                                   selectedValue={data.diagnosis !== null && data.diagnosis}
                                   error={errors.diagnosis}
                                   className={`${errors.diagnosis ? 'is-invalid' : ''}`}
                              />




                         </CardContent>

                         <CardFooter className="border-t border-gray-200">
                              <Button processing={processing} labelText='Save' type="submit" mode="primary" > <Save /> Save </Button>
                         </CardFooter>
                    </form>
               </Card>

                 
                
          </CrfLayout>
     )
}

export default Edit;