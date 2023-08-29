import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";
import { FAMILY_HISTORY_FIELDS } from "../FormFields/Helper";



export default function PredefinedFamilyHistoryData({ isFamHis, predefinedfamilyhistory, role, linkUrl, enableActions }) {
    return (

        <Card className="mb-3 rounded-5 shadow-sm">


            <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='fs-6 fw-bold'>
                        Family History
                    </div>

                    {!enableActions &&
                        <>
                            {role.coordinator &&
                                <>
                                    {isFamHis === null ?
                                        <div> <span className="text-secondary small">Family History status is null. Update with Yes/No</span>
                                            <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                        </div> : <>
                                            {isFamHis ?
                                                <RenderCreateButton createUrl={linkUrl} className='btn-sm' /> :
                                                <RenderEditButton editUrl={linkUrl} className='btn-sm' />}
                                        </>
                                    }
                                </>
                            }
                        </>
                    }


                </div>
                <hr />
                {isFamHis === null ? <span className="fw-normal text-secondary fst-italic">Family History Data has not been updated. Go ahead and update one.</span> : <>
                    {isFamHis ? <>


                        {predefinedfamilyhistory !== null ?

                            <>
                                <Row className="fw-bold mb-2">
                                    <Col>Diagnosis</Col>
                                    <Col>History</Col>
                                    <Col>Relation</Col>
                                </Row>

                                {FAMILY_HISTORY_FIELDS.map((field, index) =>
                            <Row className="mb-2" key={index}>
                                <Col>{field.labelText} </Col>
                                <Col>{predefinedfamilyhistory[field.fieldName] === 1 ? 'Yes' : 'No'}</Col>
                                <Col> {predefinedfamilyhistory[field.fieldName + '_relation'].map((relation) => <>{relation}, </>)}</Col>

                            </Row>)
                        }</>

                            : 'Family history has to be recorded yet'}

                    </> : 'No previous family history recorded'}

                </>}


            </Card.Body>
        </Card>
    )
}
