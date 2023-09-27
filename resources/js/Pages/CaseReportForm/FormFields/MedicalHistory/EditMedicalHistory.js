import FormButton from "@/Pages/Shared/FormButton";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import MedicalHistoryField from "./MedicalHistoryField";
import { PREDEFINED_MEDICAL_HISTORY_FIELDS } from "../Helper";


export default function EditMedicalHistory({ crf, preoperative, medicalhistory }) {

    const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
        pre_operative_data_id: medicalhistory.pre_operative_data_id,
        hasMedHis: medicalhistory.hasMedHis !== null ? medicalhistory.hasMedHis ? '1' : '0' : null,
        diabetes_mellitus: medicalhistory.diabetes_mellitus !== null ? medicalhistory.diabetes_mellitus ? '1' : '0' : null,
        diabetes_mellitus_duration: medicalhistory.diabetes_mellitus_duration,
        diabetes_mellitus_treatment: medicalhistory.diabetes_mellitus_treatment !== null ? medicalhistory.diabetes_mellitus_treatment ? '1' : '0' : null,
        hypertension: medicalhistory.hypertension !== null ? medicalhistory.hypertension ? '1' : '0' : null,
        hypertension_duration: medicalhistory.hypertension_duration,
        hypertension_treatment: medicalhistory.hypertension_treatment !== null ? medicalhistory.hypertension_treatment ? '1' : '0' : null,
        copd: medicalhistory.copd !== null ? medicalhistory.copd ? '1' : '0' : null,
        copd_duration: medicalhistory.copd_duration,
        copd_treatment: medicalhistory.copd_treatment !== null ? medicalhistory.copd_treatment ? '1' : '0' : null,
        respiratory_failure: medicalhistory.respiratory_failure !== null ? medicalhistory.respiratory_failure ? '1' : '0' : null,
        respiratory_failure_duration: medicalhistory.respiratory_failure_duration,
        respiratory_failure_treatment: medicalhistory.respiratory_failure_treatment !== null ? medicalhistory.respiratory_failure_treatment ? '1' : '0' : null,
        stroke: medicalhistory.stroke !== null ? medicalhistory.stroke ? '1' : '0' : null,
        stroke_duration: medicalhistory.stroke_duration,
        stroke_treatment: medicalhistory.stroke_treatment !== null ? medicalhistory.stroke_treatment ? '1' : '0' : null,
        peripheral_vascular_disease: medicalhistory.peripheral_vascular_disease !== null ? medicalhistory.peripheral_vascular_disease ? '1' : '0' : null,
        peripheral_vascular_disease_duration: medicalhistory.peripheral_vascular_disease_duration,
        peripheral_vascular_disease_treatment: medicalhistory.peripheral_vascular_disease_treatment !== null ? medicalhistory.peripheral_vascular_disease_treatment ? '1' : '0' : null,
        others: medicalhistory.others !== null ? medicalhistory.others ? '1' : '0' : null,
        others_specify: medicalhistory.others_specify,
        others_duration: medicalhistory.others_duration,
        others_treatment: medicalhistory.others_treatment !== null ? medicalhistory.others_treatment ? '1' : '0' : null,
    });

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    function handlesubmit(e) {
        e.preventDefault();
        return put(route('crf.preoperative.predefinedmedicalhistory.update', { crf: crf, preoperative: preoperative, predefinedmedicalhistory: medicalhistory }), {
            onSuccess: () => setShow(false),
        });
    }
    return (
        <>

            <button onClick={handleShow} className='btn btn-sm btn-warning'>Edit Medical History</button>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}

            >


                <Modal.Header closeButton>
                    <Modal.Title>Edit Medical History</Modal.Title>
                </Modal.Header>

                <form onSubmit={handlesubmit}>
                    <Modal.Body>

                        {PREDEFINED_MEDICAL_HISTORY_FIELDS.map((field, i) => <>

                            <MedicalHistoryField
                                key={i}
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
                            /></>
                        )}

                    </Modal.Body>
                    <Modal.Footer>
                        <FormButton processing={processing} labelText='Save Medical History' type="submit" mode="primary" className="btn-sm" />
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

