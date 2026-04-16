import { Col, Row } from "react-bootstrap";
import { NotAvailable, PREDEFINED_MEDICAL_HISTORY_FIELDS, RenderBoolYesNo } from "../Helper";
import EditMedicalHistory from "./EditMedicalHistory";
import DisplayFieldData from "./DisplayFieldData";

export default function MedicalHistoryFieldData({ crf, preoperative, medicalhistory }) {



    return (
        <>
           <DisplayFieldData medicalhistory={medicalhistory} />
            < hr className="mb-3" />
            <EditMedicalHistory medicalhistory={medicalhistory} crf={crf}
                preoperative={preoperative} />
        </>
    );
}