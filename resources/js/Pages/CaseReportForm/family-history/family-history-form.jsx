import { CardContent } from "@/Components/ui/card";
import FamilyHistoryPreForm from "./family-history-pre-form";
import { BOOLYESNO, FAMILY_HISTORY_FIELDS, normalizeBool, RELATION_OPTIONS } from "../FormFields/Helper";
import { useForm } from "@inertiajs/react";
import FormRadio from "@/Pages/Shared/FormRadio";
import FormCheckboxGroup from "@/Components/ui-ext/form-checkbox";
import { Button } from "@/Components/ui/button";
import FormButton from "@/Components/ui-ext/form-button";
import FormInput from "@/Pages/Shared/FormInput";
import SectionFooter from "@/Components/ui-ext/section/section-footer";

export default function FamilyHistoryForm({ crf, entity, entityType, onCancel, isFamHis, familyhistory, editMode }) {


    const { data, setData, processing, post, put, errors, reset } = useForm({
        pre_operative_data_id: entity.id,
        diabetes_mellitus: normalizeBool(familyhistory?.diabetes_mellitus) ?? null,
        hypertension: normalizeBool(familyhistory?.hypertension) ?? null,
        coronary_artery_disease: normalizeBool(familyhistory?.coronary_artery_disease) ?? null,
        aortic_disease: normalizeBool(familyhistory?.aortic_disease) ?? null,
        others : normalizeBool(familyhistory?.others) ?? null,
        diabetes_mellitus_relation: familyhistory?.diabetes_mellitus_relation || [],
        hypertension_relation: familyhistory?.hypertension_relation || [],
        coronary_artery_disease_relation: familyhistory?.coronary_artery_disease_relation || [],
        aortic_disease_relation: familyhistory?.aortic_disease_relation || [],
        others_relation: familyhistory?.others_relation || [],
        others_specify : familyhistory?.others_specify ?? ''

    })

    function handlesubmit(e) {
        e.preventDefault();
        if(editMode === 'store')
        post(route('crf.preoperative.predefinedfamilyhistory.store', { crf: crf, [entityType]: entity }), {
            preserveScroll: true,
            onSuccess: () => { onCancel() }
        })
        if(editMode==='update')
             put(route('crf.preoperative.predefinedfamilyhistory.update', { crf: crf, [entityType]: entity, predefinedfamilyhistory:familyhistory }), {
            preserveScroll: true,
            onSuccess: () => { onCancel() }
        })
    }


    return (
         <form onSubmit={handlesubmit}>
        <CardContent className=" mb-6 space-y-3">

            {(isFamHis === undefined || isFamHis === null) && <FamilyHistoryPreForm
                crf={crf}
                entity={entity}
                entityType={entityType}
                onCancel={onCancel}
            />}
 
            {entity?.family_history &&

                FAMILY_HISTORY_FIELDS.map((field) => {

                    
                  
                    return (
                        <div className="grid grid-cols-2 border-t border-gray-200 space-y-3 pt-3">

                            <FormRadio
                            className=""
                                optionsLayout="horizontal"
                                type="radio" labelText={field.labelText}
                                name={field.fieldName}
                                options={BOOLYESNO}
                                value={data[field.fieldName]}
                                handleChange={(val) => setData(field.fieldName, (val))}

                                 others={field.fieldName==='others' && data.others &&
                                        <FormInput
                                             type="text"
                                            className="max-w-64"
                                             error={errors.others_specify}
                                             value={data.others_specify}
                                             placeholder="Any other family history"
                                             onChange={e => setData('others_specify', e.target.value)} />}
                                   

                            />


                            <FormCheckboxGroup
                                label={field.labelText}
                                  name={`${field.fieldName}_relation`}

                                options={RELATION_OPTIONS}
                              value={data[`${field.fieldName}_relation`] || []}

                                handleChange={(updatedList) =>
                                    setData(`${field.fieldName}_relation`, updatedList)
                                }




                            />

                        </div>)


                })}

 
                

          

        </CardContent>
        <SectionFooter  onCancel={onCancel} processing={processing}/>
          </form>
    )
}