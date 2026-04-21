import { Col, Row } from "react-bootstrap";
import { PREDEFINED_MEDICAL_HISTORY_FIELDS, RenderBoolYesNo } from "../Helper";
import { NotAvailable } from "../../FormData/FormDataHelper";

export default function DisplayFieldData({ medicalhistory }) {

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

                                        <div className="flex items-center gap-2">

                                            {field.fieldName === 'others' ? medicalhistory[field.fieldName] ? <span className="fst-italic">{medicalhistory[`${field.fieldName}_specify`]}</span> : null
                                                : <RenderBoolYesNo boolValue={medicalhistory[field.fieldName]} />
                                            }
                                        </div>


                                    </Col>

                                    <Col md={4}>

                                        {medicalhistory[field.fieldName] ?

                                            <>Duration : {medicalhistory[`${field.fieldName}_duration`] !== null ? medicalhistory[`${field.fieldName}_duration`] : <NotAvailable />}</> : '-'}

                                    </Col>
                                    <Col md={4}>

                                        {medicalhistory[field.fieldName] ? <> On Treatment : <RenderBoolYesNo boolValue={medicalhistory[`${field.fieldName}_treatment`]} /></> : '-'}


                                    </Col>
                                </Row>

                            </Col>
                        </Row>


                    </>
                )


            }

        </>)
}
