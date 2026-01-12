import FormRadio from "@/Pages/Shared/FormRadio";
import { BOOLYESNO } from "../Helper";
import { Col, Row } from "react-bootstrap";
import FormInput from "@/Pages/Shared/FormInput";


export default function MedicalHistoryField({ labelText, fieldName, handleFieldData,
    errorfieldData, selectedValue,
    duration, handleDuration, errorDuration,
    treatment, handleTreatementChange, errorTreatment,
    othersValue, handleOthersValue
}) {

    const mountedStyle = {
        animation: "inAnimation 250ms ease-in"
    };

    const unmountedStyle = {
        animation: "outAnimation 270ms ease-out",
        animationFillMode: "forwards"
    };

    return (
        <div style={{ overflow: 'hidden' }}>
            <FormRadio
                type="radio"
                labelText={labelText}
                options={BOOLYESNO}
                name={fieldName}
                handleChange={handleFieldData}
                selectedValue={selectedValue !== null && selectedValue}
                error={errorfieldData}
                className={`${errorfieldData ? 'is-invalid' : ''}`}
            />
            {selectedValue === '1' && (
                <Row className="mb-3" style={selectedValue === '1' ? mountedStyle : unmountedStyle}>
                    <Col md={3}></Col>
                    <Col md={9}>
                        {fieldName === 'others' && (
                            <FormInput
                                labelText='Specify'
                                name={`${fieldName}_specify`}
                                value={othersValue}
                                handleChange={handleOthersValue}
                                error={errorDuration}
                                className={`${errorDuration ? 'is-invalid' : ''}`}
                            />
                        )}

                        <FormInput
                            labelText='Duration'
                            value={duration}
                            name={`${fieldName}_duration`}
                            handleChange={handleDuration} />

                        <FormRadio
                            labelText="On Treatment?"
                            options={BOOLYESNO}
                            name={fieldName + '_treatment'}
                            handleChange={handleTreatementChange}
                            selectedValue={treatment !== null && treatment}
                            error={errorTreatment}
                            className={`${errorTreatment ? 'is-invalid' : ''}`}
                        />
                    </Col>

                </Row>

            )

            }
        </div>
    );

}