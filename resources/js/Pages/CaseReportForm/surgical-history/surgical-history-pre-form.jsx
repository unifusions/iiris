import FormRadio from "@/Pages/Shared/FormRadio";
import { BOOLYESNO } from "../FormFields/Helper";
import { useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Save } from "lucide-react";

export default function SurgicalHistoryPreForm({ crf, entity, entityType, onCancel }) {

    const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
        pre_operative_data_id : entity?.id,
        surgical_history: entity.surgical_history !== null ? entity.surgical_history ? '1' : '0' : null
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

        <form  onSubmit={handlesubmit}>
            <div className="grid grid-cols-6 items-center border-b border-gray-200 pb-6">

                <div className="col-span-5">
                    <FormRadio
                        layout="row"
                        optionsLayout="horizontal"
                        labelText='Has Surgical History?'
                        options={BOOLYESNO}
                        name="medicalHistory"
                        handleChange={(val) => setData('surgical_history', val)}
                        value={data.surgical_history !== null && data.surgical_history}
                        error={errors.surgical_history}
                        className={`${errors.surgical_history ? 'is-invalid' : ''}`}
                    />

                </div>
                <div className="text-end">
                    <Button type="submit" className="gap-3 border-border border-orange-200 text-orange-800 hover:bg-orange-100  " variant="outline" disabled={processing}
                        size="sm" >

                        {processing ?
                            <> <svg aria-hidden="true" class="w-4 h-4 text-neutral-tertiary animate-spin fill-brand me-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>  Saving ...</>
                            :
                            <>
                                <Save /> Update
                            </>}  </Button>
                </div>
            </div>



        </form>
    )
}