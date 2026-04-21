
import React, { useEffect } from "react";

import { useForm, } from "@inertiajs/react";
import FormInput from "@/Pages/Shared/FormInput";
import FormButton from "@/Pages/Shared/FormButton";
import FormRadio from "@/Pages/Shared/FormRadio";





import { ENTITY_ID_FIELD_MAP } from "../FormFields/Helper";
import SectionFooter from "@/Components/ui-ext/section/section-footer";
import { Card, CardContent } from "@/Components/ui/card";
import FormRadioRow from "@/Pages/Shared/FormRadioRow";
import { toast } from "sonner";
import { Input } from "@/Components/ui/input";


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
    <div className="mb-3">
        <div md={3}>
            <span className="text-foreground/79">Duration</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
            {["days", "months", "years"].map(unit => (
                <div key={unit}>
                    <div className="input-group">
                        <Input
                            type="number"
                            className="form-control with-units"
                            // Access data via prop
                            value={data[field]?.[unit] ?? ""}
                            // Use the handler passed via prop
                            onChange={onDurationChange(field, unit)}
                        />
                        <span className="input-group-text text-foreground/70 input-units">
                            {unit}
                        </span>
                    </div>
                </div>
            ))}
        </div>

    </div>
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
    <>  <div className="border-t border-gray-200 my-4"></div>
        <FormRadioRow
            type="radio"
            labelText={label}
            name={name}
            options={boolRadios}
            selectedValue={data[name]}
            handleChange={(val) => setData(name, val)}
            error={errors[name]}
 
        />

        {data[name] === "1" && (
            <>

                <Card className="my-2">
                    <CardContent className="space-y-3">
                        {hasClass && (
                            <FormRadio
                                type="radio"
                                labelText="Class"
                                name={`${name}_class`}
                                options={classRadios}
                                selectedValue={data[`${name}_class`]}
                                handleChange={(val) =>
                                    setData(`${name}_class`, val)
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
                    </CardContent>
                </Card>
                
            </>

        )}


    </>
);

export default function SymptomDataForm({ crf, entity, entityType, symptom, title, onCancel, editMode }) {

    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];
    const { data, setData, errors, post, put, processing } = useForm({
        case_report_form_id: crf.id,
        [entityIdField]: entity?.id ?? null,

        symptoms: symptom ? normalizeBool(symptom?.symptoms) : '',

        angina: symptom ? normalizeBool(symptom?.angina) : '',
        angina_class: symptom ? symptom?.angina_class ?? null : '',
        angina_duration: symptom ? normalizeDuration(symptom.angina_duration) : '',

        dyspnea: symptom ? normalizeBool(symptom.dyspnea) : '',
        dyspnea_class: symptom ? symptom.dyspnea_class ?? null : '',
        dyspnea_duration: symptom ? normalizeDuration(symptom.dyspnea_duration) : '',

        syncope: symptom ? normalizeBool(symptom.syncope) : '',
        syncope_duration: symptom ? normalizeDuration(symptom.syncope_duration) : '',

        palpitation: symptom ? normalizeBool(symptom.palpitation) : '',
        palpitation_duration: symptom ? normalizeDuration(symptom.palpitation_duration) : '',

        giddiness: symptom ? normalizeBool(symptom.giddiness) : '',
        giddiness_duration: symptom ? normalizeDuration(symptom.giddiness_duration) : '',

        fever: symptom ? normalizeBool(symptom.fever) : '',
        fever_duration: symptom ? normalizeDuration(symptom.fever_duration) : '',

        heart_failure_admission: symptom ? normalizeBool(symptom.heart_failure_admission) : '',
        heart_failure_admission_duration: symptom ? normalizeDuration(symptom.heart_failure_admission_duration) : '',

        others: symptom ? normalizeBool(symptom.others) : '',
        others_text: symptom ? symptom.others_text ?? '' : '',
        others_duration: symptom ? normalizeDuration(symptom.others_duration) : ''
    });



    const routeParams = {
        crf,
        [entityType]: entity,
        symptom: symptom
    };

    function handlesubmit(e) {
        e.preventDefault();
        const options = {
            preserveScroll: true,
            onSuccess: () => {
                onCancel(); // 👈 this will call setActiveEdit(null)

            },
            onError: (errors) => {
                if (errors.error) {
                    toast.error(errors.error);
                }
            }
        };

        if (editMode === 'store')
            post(route(`crf.${entityType}.symptoms.store`, routeParams), options);

        if (editMode === 'update')
            put(route(`crf.${entityType}.symptoms.update`, routeParams), options);
    }

    const handleDurationChange = (field, unit) => e => {
        setData(field, {
            ...(data[field] ?? emptyDuration),
            [unit]: e.target.value,
        });
    };

    return (
        <>
            <form onSubmit={handlesubmit}>
                <CardContent className="mb-6">
                    <FormRadioRow
                        type="radio"
                        labelText={`History of ${title} Symptoms ?`}
                        name="symptoms"
                        options={boolRadios}
                        handleChange={(val) => setData('symptoms', val)}
                        selectedValue={data.symptoms}
                        error={errors.symptoms}

                    />


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
                                    onChange={e =>
                                        setData("others_text", e.target.value)
                                    }
                                    error={errors.others_text}
                                />
                            }
                        />

                    </>}



                </CardContent>

                <SectionFooter onCancel={onCancel} processing={processing} />
            </form>
        </>
    )
}