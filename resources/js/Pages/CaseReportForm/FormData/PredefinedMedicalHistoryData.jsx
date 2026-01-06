import { Card, Col, Row } from "react-bootstrap";
import { RenderCreateButton, RenderEditButton } from "./FormDataHelper";

import { NotAvailable, PREDEFINED_MEDICAL_HISTORY_FIELDS, RenderBoolYesNo } from "../FormFields/Helper";

export default function PredefinedMedicalHistoryData(
    { medicalhistory, role, enableActions, hasMedHis, createUrl, editUrl }
) {
    return (
        <Card className="mb-3 shadow-sm rounded-5">
            <Card.Body>
                <div className="d-flex justify-content-between align-items center">
                    <div className='fs-6 fw-bold'>
                        Medical History
                    </div>

                    {!enableActions &&
                        <>
                            {role.coordinator &&
                                <>
                                    {hasMedHis === null ?
                                        <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                        <RenderEditButton editUrl={createUrl} className="btn-sm" />
                                    }
                                </>
                            }
                        </>

                    }
                </div>
                <hr />

                {medicalhistory !== null ? <>
                    {/* {medicalhistory.hasMedHis ?  */}

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
                    </>

                    {/*  : 'No medical history found'

                    // } */}                </> : <span className="fw-normal text-secondary fst-italic">No medical history has been recorded. Go ahead and create one.</span>}
            </Card.Body>
        </Card>
    );
}