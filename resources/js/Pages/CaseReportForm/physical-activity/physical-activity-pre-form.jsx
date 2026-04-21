import { CardContent } from "@/Components/ui/card";
import { BOOLYESNO, ENTITY_ACTIVITY_FIELD_MAP, normalizeBool } from "../FormFields/Helper";
import FormRadio from "@/Pages/Shared/FormRadio";

import { useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import { Button } from "@/Components/ui/button";
import FormButton from "@/Components/ui-ext/form-button";

 
export default function PhysicalActivityPreForm({
    crf, entity, entityType, onCancel
}) {
    const entityIdField = ENTITY_ACTIVITY_FIELD_MAP[entityType];

    const { data, setData, put, processing } = useForm({
        [entityIdField]: normalizeBool(entity?.physical_activity) ?? null
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
        put(route(`crf.${entityType}.update`, routeParams), options)
    }
    return (

        <form onSubmit={handlesubmit}>
            <div className="grid grid-cols-6 items-center border-b border-gray-200 pb-6">
                <div className="col-span-5">
                    <FormRadio
                        layout="row"
                        optionsLayout="horizontal"
                        labelText='Physical Activity?'

                        options={BOOLYESNO}
                        name="physicalactivity"
                    handleChange={(val) => setData(entityIdField,val)}
                    value={data[entityIdField]}
                  
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