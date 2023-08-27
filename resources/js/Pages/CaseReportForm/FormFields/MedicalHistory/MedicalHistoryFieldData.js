import { Col, Row } from "react-bootstrap";
import { NotAvailable, PREDEFINED_MEDICAL_HISTORY_FIELDS, RenderBoolYesNo } from "../Helper";
import EditMedicalHistory from "./EditMedicalHistory";

export default function MedicalHistoryFieldData({ crf, preoperative, medicalhistory }) {



    return (
        <>
            {
                PREDEFINED_MEDICAL_HISTORY_FIELDS.map((field) =>
                    <>
                        <Row className='mb-3'>
                            <Col md={4} className='text-secondary'>
                                {field.labelText}
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col md={4}>
                                        <RenderBoolYesNo boolValue={medicalhistory[field.fieldName]} />

                                    </Col>

                                    <Col md={4}>
                                        Duration :
                                        {medicalhistory[`${field.fieldName}_duration`] !== null ? medicalhistory[`${field.fieldName}_duration`] : <NotAvailable />}
                                    </Col>
                                    <Col md={4}>
                                        On Treatment : <RenderBoolYesNo boolValue={medicalhistory[`${field.fieldName}_treatment`]} />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>


                    </>
                )


            }
            < hr />
            <EditMedicalHistory medicalhistory={medicalhistory} crf={crf}
                preoperative={preoperative} />
        </>
    );
}