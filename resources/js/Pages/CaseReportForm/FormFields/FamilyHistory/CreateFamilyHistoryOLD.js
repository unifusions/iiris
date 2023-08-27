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

                    {/* <button onClick={handleShow} className='btn btn-primary'>Add New Family History</button>
                    <hr /> */}
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

                    {familyhistories.length > 0 &&

                         <>
                              <Row className="fw-bold">
                                   <Col>#</Col>
                                   <Col>Diagnosis</Col>
                                   <Col>Relation</Col>
                                   <Col>Actions</Col>
                              </Row>
                              <hr />
                              {familyhistories.map((familyhistory, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>

                                   <Col>{familyhistory.diagnosis}</Col>
                                   <Col>{familyhistory.relation}</Col>
                                   <Col>
                                        <Link href={route('crf.preoperative.familyhistory.destroy', { crf: crf, preoperative: preoperative, familyhistory: familyhistory })}
                                             type="submit" method="delete" as="button"
                                             className='btn btn-danger btn-sm'>Delete</Link>
                                   </Col>
                              </Row>)}
                         </>


                    }
               </Card.Body>
               <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    keyboard={false}
               >
                    {
                         preoperative.family_history !== null &&
                         <>
                              {preoperative.family_history ? <>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Create Family History</Modal.Title>
                                   </Modal.Header>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Body>

                                             <FormInput
                                                  labelText='Diagnosis'
                                                  value={data.diagnosis}
                                                  handleChange={e => setData('diagnosis', e.target.value)} />

                                             <FormInputSelect
                                                  labelText='Relation'
                                                  selectedValue={data.relation}
                                                  handleChange={e => setData('relation', e.target.value)}
                                                  options={RELATION_OPTIONS}
                                             />

                                        </Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Add Family History' type="submit" mode="primary" className="btn-sm" />
                                        </Modal.Footer>
                                   </form>
                              </> : 'No medical history found'}
                         </>

                    }
               </Modal>
          </Card>

     )
}
