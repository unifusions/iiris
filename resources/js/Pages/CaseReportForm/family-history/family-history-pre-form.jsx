import { useForm } from "@inertiajs/react";
import { BOOLYESNO, ENTITY_ACTIVITY_FIELD_MAP, normalizeBool } from "../FormFields/Helper";
import FormButton from "@/Components/ui-ext/form-button";
import FormRadio from "@/Pages/Shared/FormRadio";

export default function FamilyHistoryPreForm({ crf, entity, entityType, }){
 
    const { data, setData, put, processing } = useForm({
        family_history: normalizeBool(entity?.family_history) ?? null
    });

    const routeParams = {
        crf: crf,
        [entityType]: entity,
        

    };
const options = {
        preserveScroll: true,
        onSuccess: () => {
            // onCancel(); // 👈 this will call setActiveEdit(null)

        },
    };
     const handlesubmit = (e) => {
        e.preventDefault();
        put(route(`crf.preoperative.update`, routeParams), options)
    }

    return (
         <form onSubmit={handlesubmit}>
            <div className="grid grid-cols-6 items-center  pb-6">
                <div className="col-span-5">
                     
                    <FormRadio
                        layout="row"
                        optionsLayout="horizontal"
                        labelText='Has Family History?'

                        options={BOOLYESNO}
                        name="familyhistory"
                    handleChange={(val) => setData('family_history',val)}
                    value={data.family_history}
                  
                    /> 
                   
                    </div>
                <div className="text-end">
                    <FormButton processing={processing} 
                    label="Update"

                    className="border-border border-orange-200 text-orange-800 hover:bg-orange-100"
                     variant="outline" disabled={processing}  size="sm"
                    />
                  
                </div>
            </div>

        </form>
    )
}