import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link, usePage, useForm, } from "@inertiajs/react";
import FormInput from "@/Pages/Shared/FormInput";
import FormButton from "@/Pages/Shared/FormButton";
import FormRadio from "@/Pages/Shared/FormRadio";
import { ENTITY_ID_FIELD_MAP } from "../Helper";
import CrfLayout from "@/Layouts/CrfLayout";
import { toTitleCase } from "../HelperFunctions";

const normalizeBool = v =>
    v !== null ? (v ? "1" : "0") : null;

const emptyDuration = { days: "", months: "", years: "" };
const normalizeDuration = v => v ?? emptyDuration;

const boolRadios = [
    { labelText: 'Yes', value: '1' },
    { labelText: 'No', value: '0' }
];

const classRadios = ["I", "II", "III", "IV"].map(c => ({
    labelText: `Class ${c}`,
    value: `Class ${c}`,
}));

// --- MOVED OUTSIDE ---
const DurationRow = ({ field, data, onDurationChange }) => (
    <Row className="mb-3">
        <Col md={3}>
            <span className="text-secondary">Duration</span>
        </Col>
        {["days", "months", "years"].map(unit => (
            <Col md={3} key={unit}>
                <div className="input-group">
                    <input
                        type="number"
                        className="form-control with-units"
                        // Access data via prop
                        value={data[field]?.[unit] ?? ""}
                        // Use the handler passed via prop
                        onChange={onDurationChange(field, unit)}
                    />
                    <span className="input-group-text text-secondary input-units">
                        {unit}
                    </span>
                </div>
            </Col>
        ))}
    </Row>
);

// --- MOVED OUTSIDE ---
const SymptomBlock = ({
    label,
    name,
    hasClass = false,
    durationField,
    extra,
    data,         // Received as prop
    setData,      // Received as prop
    errors,       // Received as prop
    onDurationChange // Received as prop
}) => (
    <>
        <FormRadio
            type="radio"
            labelText={label}
            name={name}
            options={boolRadios}
            selectedValue={data[name]}
            handleChange={e => setData(name, e.target.value)}
            error={errors[name]}
            className={errors[name] && "is-invalid"}
        />

        {data[name] === "1" && (
            <>
                {hasClass && (
                    <FormRadio
                        type="radio"
                        labelText="Class"
                        name={`${name}_class`}
                        options={classRadios}
                        selectedValue={data[`${name}_class`]}
                        handleChange={e =>
                            setData(`${name}_class`, e.target.value)
                        }
                        error={errors[`${name}_class`]}
                    />
                )}

                {extra}
                {/* Pass data and handler down to DurationRow */}
                <DurationRow 
                    field={durationField} 
                    data={data} 
                    onDurationChange={onDurationChange} 
                />
            </>
        )}

        <hr />
    </>
);

const Edit = () => {
    const { crf, entity, entityType, symptom, title } = usePage().props;

    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];

    const { data, setData, errors, put, processing } = useForm({
        case_report_form_id: crf.id,
        [entityIdField]: entity?.id ?? null,

        symptoms: normalizeBool(symptom.symptoms),

        angina: normalizeBool(symptom.angina),
        angina_class: symptom.angina_class ?? null,
        angina_duration: normalizeDuration(symptom.angina_duration),

        dyspnea: normalizeBool(symptom.dyspnea),
        dyspnea_class: symptom.dyspnea_class ?? null,
        dyspnea_duration: normalizeDuration(symptom.dyspnea_duration),

        syncope: normalizeBool(symptom.syncope),
        syncope_duration: normalizeDuration(symptom.syncope_duration),

        palpitation: normalizeBool(symptom.palpitation),
        palpitation_duration: normalizeDuration(symptom.palpitation_duration),

        giddiness: normalizeBool(symptom.giddiness),
        giddiness_duration: normalizeDuration(symptom.giddiness_duration),

        fever: normalizeBool(symptom.fever),
        fever_duration: normalizeDuration(symptom.fever_duration),

        heart_failure_admission: normalizeBool(symptom.heart_failure_admission),
        heart_failure_admission_duration: normalizeDuration(symptom.heart_failure_admission_duration),

        others: normalizeBool(symptom.others),
        others_text: symptom.others_text ?? '',
        others_duration: normalizeDuration(symptom.others_duration)
    });

    const routeParams = {
        crf,
        [entityType]: entity,
        symptom: symptom
    };

    function handlesubmit(e) {
        e.preventDefault();
        put(route(`crf.${entityType}.symptoms.update`, routeParams), { preserveScroll: true });
    }

    const handleDurationChange = (field, unit) => e => {
        setData(field, {
            ...(data[field] ?? emptyDuration),
            [unit]: e.target.value,
        });
    };

    return (
        <CrfLayout
            crf={crf}
            backUrl={route(`crf.${entityType}.show`, routeParams)}
            screenTitle={`${toTitleCase(entityType)}  \\ Symptoms`}
            breadcrumb={<>
                <li className='breadcrumb-item'>
                    <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                </li>
                <li className='breadcrumb-item'>
                    <span className="Active">Create</span>
                </li>
            </>
            }
        >
            <Card className='card shadow-sm'>
                <Card.Body>
                    <form onSubmit={handlesubmit}>
                        <FormRadio
                            type="radio"
                            labelText={`History of ${title} Symptoms ?`}
                            name="symptoms"
                            options={boolRadios}
                            handleChange={e => setData('symptoms', e.target.value)}
                            selectedValue={data.symptoms}
                            error={errors.symptoms}
                            className={`${errors.symptoms ? 'is-invalid' : ''}`}
                        />

                        <hr />
                        {data.symptoms === '1' && <>

                            <SymptomBlock
                                label="Angina on Exertion"
                                name="angina"
                                hasClass
                                durationField="angina_duration"
                                // Pass Props
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Dyspnea on Exertion"
                                name="dyspnea"
                                hasClass
                                durationField="dyspnea_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Syncope"
                                name="syncope"
                                durationField="syncope_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Palpitation"
                                name="palpitation"
                                durationField="palpitation_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Giddiness"
                                name="giddiness"
                                durationField="giddiness_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Fever"
                                name="fever"
                                durationField="fever_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Heart Failure Admission"
                                name="heart_failure_admission"
                                durationField="heart_failure_admission_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                            />

                            <SymptomBlock
                                label="Others"
                                name="others"
                                durationField="others_duration"
                                data={data}
                                setData={setData}
                                errors={errors}
                                onDurationChange={handleDurationChange}
                                extra={
                                    <FormInput
                                        labelText="Others"
                                        name="others_text"
                                        value={data.others_text}
                                        handleChange={e =>
                                            setData("others_text", e.target.value)
                                        }
                                        error={errors.others_text}
                                    />
                                }
                            />

                        </>}

                        <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />

                    </form>
                </Card.Body>
            </Card>

        </CrfLayout>
    )
}

export default Edit;