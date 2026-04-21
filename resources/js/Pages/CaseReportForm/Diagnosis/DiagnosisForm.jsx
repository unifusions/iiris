import { Button } from "@/Components/ui/button";
import { CardContent, CardFooter } from "@/Components/ui/card";
import { Save } from "lucide-react";
import { DIAGNOSIS_OPTIONS } from "../FormFields/Diagnosis/HelperOptions";
import FormRadio from "@/Pages/Shared/FormRadio";
import { useForm } from "@inertiajs/react";
import SectionFooter from "@/Components/ui-ext/section/section-footer";

export default function DiagnosisForm({ crf, diagnosis, isEditing, onCancel, editMode }) {

 const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          pre_operative_data_id: crf.preoperative !== undefined ? crf.preoperative.id : null,
          diagnosis: diagnosis?.diagnosis_data ? diagnosis.diagnosis_data : '',

     });

      const options = {
        preserveScroll : true,
        onSuccess: () => {
            onCancel(); // 👈 this will call setActiveEdit(null)
            
        },
    };


     function handlesubmit(e) {
          e.preventDefault();

          if (editMode === 'create') {
          return post(route('crf.preoperative.diagnosis.store', { crf: crf, preoperative: crf.preoperative }), options);
    
        }

        if(editMode === 'edit') {
          return put(route('crf.preoperative.diagnosis.update', { crf: crf, preoperative: crf.preoperative, diagnosi: diagnosis }), options);
        }
    }

    return (
        <form onSubmit={handlesubmit}>
            <CardContent className="mb-3">
                 <FormRadio
                                   labelText='Diagnosis'
                                   options={DIAGNOSIS_OPTIONS}
                                   name="diagnosis"
                                   handleChange={(val) => setData('diagnosis', val)}
                                   selectedValue={data.diagnosis !== null && data.diagnosis}
                                   error={errors.diagnosis}
                                   className={`${errors.diagnosis ? 'is-invalid' : ''}`}
                              />

            </CardContent>
            <SectionFooter
          
            processing={processing}
                onCancel={onCancel}
            />
           
        </form>
    )
}