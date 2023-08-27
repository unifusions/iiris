import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, FormSelect, Modal, Row } from "react-bootstrap";
import FormInputSelect from "@/Pages/Shared/FormInputSelect";
import { BOOLYESNO, FAMILY_HISTORY_FIELDS, RELATION_OPTIONS } from "../Helper";
import FormRadio from "@/Pages/Shared/FormRadio";


export default function UpdateFamilyHistory({ crf, preoperative, predefinedfamilyhistory }) {

    const { data, setData, processing, put, errors, reset } = useForm({
        pre_operative_data_id: preoperative.id,
        diabetes_mellitus: predefinedfamilyhistory.diabetes_mellitus !== null ? predefinedfamilyhistory.diabetes_mellitus === 1 ? '1' : '0' : '',
        hypertension: predefinedfamilyhistory.hypertension !== null ? predefinedfamilyhistory.hypertension === 1 ? '1' : '0' : '',
        coronary_artery_disease: predefinedfamilyhistory.coronary_artery_disease !== null ? predefinedfamilyhistory.coronary_artery_disease === 1 ? '1' : '0' : '',
        aortic_disease: predefinedfamilyhistory.aortic_disease !== null ? predefinedfamilyhistory.aortic_disease === 1 ? '1' : '0' : '',
        diabetes_mellitus_relation: predefinedfamilyhistory.diabetes_mellitus_relation || [],
        hypertension_relation: predefinedfamilyhistory.hypertension_relation || [],
        coronary_artery_disease_relation: predefinedfamilyhistory.coronary_artery_disease_relation || [],
        aortic_disease_relation: predefinedfamilyhistory.aortic_disease_relation || [],
        others_relation: predefinedfamilyhistory.others_relation || [],

    })


    function handlesubmit(e) {
        e.preventDefault();
        put(route('crf.preoperative.predefinedfamilyhistory.update', { crf: crf, preoperative: preoperative, predefinedfamilyhistory: predefinedfamilyhistory }), {
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
                                        <input className="form-check-input" type="checkbox"
                                            id={`${field.fieldName}_${relation.value}`}
                                            value={relation.value}
                                            name={`${field.fieldName}_relation[]`}
                                            checked={data[field.fieldName + '_relation'].some((i) => i === relation.value)}

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
                    <Row className="mb-3">
                        <Col md={3}>

                        </Col>
                        <Col md={9}>
                            <FormButton processing={processing} labelText='Update Family History' type="submit" mode="warning" className="btn-sm" />
                        </Col>
</Row>
                </form>


            </Card.Body>

        </Card>

    )
}
