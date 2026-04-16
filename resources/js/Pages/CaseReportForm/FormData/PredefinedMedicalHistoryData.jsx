import { Card  } from "react-bootstrap";
import { RenderCreateButton, RenderEditButton } from "./FormDataHelper";

 import DisplayFieldData from "../FormFields/MedicalHistory/DisplayFieldData";

export default function PredefinedMedicalHistoryData(
    {id,  medicalhistory, role, enableActions, hasMedHis, createUrl, editUrl }
) {
    return (
        <Card id={id} className="mb-3 shadow-sm scroll-section">
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

                   
                    <DisplayFieldData medicalhistory={medicalhistory} />
                        
                  

                    {/*  : 'No medical history found'

                    // } */}                </> : <span className="fw-normal text-secondary fst-italic">No medical history has been recorded. Go ahead and create one.</span>}
            </Card.Body>
        </Card>
    );
}