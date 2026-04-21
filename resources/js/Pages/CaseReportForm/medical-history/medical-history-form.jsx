import SectionFooter from "@/Components/ui-ext/section/section-footer";
import { CardContent } from "@/Components/ui/card";
import FormRadioRow from "@/Pages/Shared/FormRadioRow";
import { useForm } from "@inertiajs/react";
import { BOOLYESNO, ENTITY_ID_FIELD_MAP, PREDEFINED_MEDICAL_HISTORY_FIELDS } from "../FormFields/Helper";
import MedicalHistoryField from "../FormFields/MedicalHistory/MedicalHistoryField";
const normalizeBool = v =>
    v !== null ? (v ? "1" : "0") : null;
export default function MedicalHistoryForm({ crf, entity, entityType, medicalhistory, editMode,  onCancel }) {
     const entityIdField = ENTITY_ID_FIELD_MAP[entityType];
    const { data, setData, processing, post, put, errors } = useForm({
        [entityIdField]: entity?.id ?? null,
        hasMedHis: normalizeBool(medicalhistory?.hasMedHis)?? '',
        diabetes_mellitus:  normalizeBool(medicalhistory?.diabetes_mellitus )??'',
        hypertension: normalizeBool( medicalhistory?.hypertension) ??'',
        copd: normalizeBool( medicalhistory?.copd) ??'',
        respiratory_failure:normalizeBool(  medicalhistory?.respiratory_failure) ??'',
        stroke: normalizeBool( medicalhistory?.stroke )??'',
        peripheral_vascular_disease: normalizeBool( medicalhistory?.peripheral_vascular_disease )??'',
        others: normalizeBool( medicalhistory?.others) ??'',

        diabetes_mellitus_duration:  medicalhistory?.diabetes_mellitus_duration ??'',
        hypertension_duration:  medicalhistory?.hypertension_duration ??'',
        copd_duration:  medicalhistory?.copd_duration ??'',
        respiratory_failure_duration: medicalhistory?.respiratory_failure_duration ?? '',
        stroke_duration:  medicalhistory?.stroke_duration ??'',
        peripheral_vascular_disease_duration:  medicalhistory?.peripheral_vascular_disease_duration ??'',
        others_duration:  medicalhistory?.others_duration ??'',

       
        diabetes_mellitus_treatment:  normalizeBool(medicalhistory?.diabetes_mellitus_treatment ) ?? '',
        hypertension_treatment: normalizeBool( medicalhistory?.hypertension_treatment) ??'',
        copd_treatment: normalizeBool( medicalhistory?.copd_treatment) ??'',
        respiratory_failure_treatment:normalizeBool(  medicalhistory?.respiratory_failure_treatment) ??'',
        stroke_treatment: normalizeBool( medicalhistory?.stroke_treatment )??'',
        peripheral_vascular_disease_treatment: normalizeBool( medicalhistory?.peripheral_vascular_disease_treatment )??'',
        others_treatment: normalizeBool( medicalhistory?.others_treatment) ??'',

    });

    function handlesubmit(e) {
        e.preventDefault();


    const routeParams = {
        crf,
        [entityType]: entity,
        predefinedmedicalhistory: medicalhistory
    };

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
        }
 if (editMode === 'store')
             post(route('crf.preoperative.predefinedmedicalhistory.store',routeParams), options)

        if (editMode === 'update')
            put(route(`crf.${entityType}.predefinedmedicalhistory.update`, routeParams), options);
       
    }
    return (
        < form onSubmit={handlesubmit}>
            
            <CardContent className="mb-6">
                <FormRadioRow
                    labelText='Has Medical History?'
                    options={BOOLYESNO}
                    name="hasMedHis"
                    handleChange={(val) => setData('hasMedHis', val)}
                    selectedValue={  data.hasMedHis}
                   

                />
                
 
                {
                    data.hasMedHis !== null && data.hasMedHis === '1' &&
                    <div className="border-t border-gray-200 mt-3 space-y-3" >
                        {PREDEFINED_MEDICAL_HISTORY_FIELDS.map((field, i) =>
                        <>
                       
                            <MedicalHistoryField
                                key={i}
                                labelText={field.labelText}
                                fieldName={field.fieldName}
                                handleFieldData={(val) => setData(`${field.fieldName}`, val)}
                                selectedValue={data[field.fieldName]}
                                errorfieldData={errors[field.fieldName]}
                                duration={data[field.fieldName + '_duration']}
                                handleDuration={e => setData(`${field.fieldName}_duration`, e.target.value)}
                                errorDuration={errors[`${field.fieldName}_duration`]}
                                treatment={data[field.fieldName + '_treatment']}
                                handleTreatementChange={(val) => setData(`${field.fieldName}_treatment`, val)}
                                errorTreatment={errors[`${field.fieldName}_treatment`]}
                                othersValue={data[`${field.fieldName}_specify`]}
                                handleOthersValue={e => setData(`${field.fieldName}_specify`, e.target.value)}
                            />

                            </>
                        )}
                    </div>
                }


            </CardContent>

            <SectionFooter onCancel={onCancel} processing={processing} />
        </form>
    )
}