import FormButton from "@/Pages/Shared/FormButton";
import FormInput from "@/Pages/Shared/FormInput";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { BOOLYESNO, PREDEFINED_MEDICAL_HISTORY_FIELDS } from "../Helper";
import MedicalHistoryField from "./MedicalHistoryField";
import MedicalHistoryFieldData from "./MedicalHistoryFieldData";


export default function CreateMedicalHistory({ crf, preoperative, medicalhistories, predefinedmedicalhistories }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative.id,
     })


     function handlesubmit(e) {
          e.preventDefault();
          post(route('crf.preoperative.predefinedmedicalhistory.store', { crf: crf, preoperative: preoperative }), {
               preserveScroll: true,
          })
     }


     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>


                    {predefinedmedicalhistories !== null ?
                         <MedicalHistoryFieldData
                              crf={crf}
                              preoperative={preoperative}
                              medicalhistory={predefinedmedicalhistories}
                         />
                         : (
                              <form onSubmit={handlesubmit}>

                                   <FormRadio
                                        labelText='Has Medical History?'
                                        options={BOOLYESNO}
                                        name="hasMedHis"
                                        handleChange={e => setData('hasMedHis', e.target.value)}
                                        selectedValue={data.hasMedHis !== null && data.hasMedHis}
                                        error={errors.hasMedHis}
                                        className={`${errors.hasMedHis ? 'is-invalid' : ''}`}
                                   />
                                   <hr />
                                   {data.hasMedHis !== null && <>
                                        {data.hasMedHis === '1' && <div>
                                             {PREDEFINED_MEDICAL_HISTORY_FIELDS.map((field) =>
                                                  <MedicalHistoryField
                                                       labelText={field.labelText}
                                                       fieldName={field.fieldName}
                                                       handleFieldData={e => setData(`${field.fieldName}`, e.target.value)}
                                                       selectedValue={data[field.fieldName]}
                                                       errorfieldData={errors[field.fieldName]}
                                                       duration={data[field.fieldName + '_duration']}
                                                       handleDuration={e => setData(`${field.fieldName}_duration`, e.target.value)}
                                                       errorDuration={errors[`${field.fieldName}_duration`]}
                                                       treatment={data[field.fieldName + '_treatment']}
                                                       handleTreatementChange={e => setData(`${field.fieldName}_treatment`, e.target.value)}
                                                       errorTreatment={errors[`${field.fieldName}_treatment`]}
                                                       othersValue={data[`${field.fieldName}_value`]}
                                                       handleOthersValue={e => setData(`${field.fieldName}_value`, e.target.value)}
                                                  />
                                             )}
                                          <hr/>
                                        </div> }
                                      
                                   </>
                                   }


                                   <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />
                              </form>
                         )}



               </Card.Body>
          </Card>

     )
}
