
import React from "react";

import { usePage, useForm, } from "@inertiajs/react";
import FormButton from "@/Pages/Shared/FormButton";
import FormRadio from "@/Pages/Shared/FormRadio";
import { DIAGNOSIS_OPTIONS } from "./HelperOptions";
import CrfLayout from "@/Layouts/CrfLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Save } from "lucide-react";
 

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

export default Create;