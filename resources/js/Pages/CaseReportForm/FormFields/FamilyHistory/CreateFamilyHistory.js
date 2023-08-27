import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, FormSelect, Modal, Row } from "react-bootstrap";
import FormInputSelect from "@/Pages/Shared/FormInputSelect";
import { BOOLYESNO, FAMILY_HISTORY_FIELDS, RELATION_OPTIONS } from "../Helper";
import FormRadio from "@/Pages/Shared/FormRadio";


export default function CreateFamilyHistory({ crf, preoperative, familyhistories }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative.id,
          diabetes_mellitus_relation: [],
          hypertension_relation: [],
          coronary_artery_disease_relation: [],
          aortic_disease_relation: [],
          others_relation: [],

     })


     function handlesubmit(e) {
          e.preventDefault();
          // console.log(data);
          post(route('crf.preoperative.predefinedfamilyhistory.store', { crf: crf, preoperative: preoperative }), {
               preserveScroll: true,
               onSuccess: () => { reset(); setShow(false); }
          })


     }

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);

     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>


                    <form onSubmit={handlesubmit}>
                         {FAMILY_HISTORY_FIELDS.map((field) => <>

                              <FormRadio
                                   type="radio" labelText={field.labelText}
                                   name={field.fieldName}
                                   options={BOOLYESNO}
                                   selectedValue={data[field.fieldName]}
                                   handleChange={e => setData(`${field.fieldName}`, e.target.value)}
                                   error={errors[field.fieldName]}
                                   className={`${errors[field.fieldName] ? 'is-invalid' : ''}`} />

                              <Row className="mb-3">
                                   <Col md={3}>

                                   </Col>

                                   <Col md={9}>
                                        <label className="form-label me-3">Relation</label>
                                        {RELATION_OPTIONS.map((relation, relation_index) => (
                                             <div className="form-check form-check-inline" key={relation_index}>
                                                  <input className="form-check-input" type="checkbox" id={`${field.fieldName}_${relation.value}`} value={relation.value} name={`${field.fieldName}_relation[]`}


                                                       onChange={(e) => {
                                                            var updatedList = data[field.fieldName + '_relation'];
                                                            const { value, checked } = e.target
                                                            if (checked) {
                                                                 updatedList = [...data[field.fieldName + '_relation'], value];
                                                            } else {
                                                                 updatedList.splice(data[field.fieldName + '_relation'].indexOf(value), 1);
                                                            }
                                                            setData(`${field.fieldName}_relation`, updatedList);
                                                       }}

                                                  />

                                                  <label className="form-check-label" for={`${field.fieldName}_${relation.value}`}>{relation.value}</label>
                                             </div>
                                        ))}
                                   </Col>
                              </Row>



                         </>)}

                         <FormButton processing={processing} labelText='Save Family History' type="submit" mode="primary" className="btn-sm" />
                    </form>


               </Card.Body>

          </Card>

     )
}
