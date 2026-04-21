import { useForm } from "@inertiajs/react"
import { ENTITY_ID_FIELD_MAP } from "../FormFields/Helper";
import { CardContent } from "@/Components/ui/card";
import SectionFooter from "@/Components/ui-ext/section/section-footer";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormInput from "@/Pages/Shared/FormInput";

export default function LabInvestigationForm(
    {
        crf, entity, entityType, labinvestigations,
        editMode, onCancel
    }
) {

    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];
    const { data, setData, post, put, processing, errors } = useForm({
        case_report_form_id: crf.id,
        [entityIdField]: entity?.id ?? null,
        li_date: labinvestigations?.li_date || '',
        rbc: labinvestigations?.rbc || '',
        wbc: labinvestigations?.wbc || '',
        hemoglobin: labinvestigations?.hemoglobin || '',
        hematocrit: labinvestigations?.hematocrit || '',
        platelet: labinvestigations?.platelet || '',
        blood_urea: labinvestigations?.blood_urea || '',
        serum_creatinine: labinvestigations?.serum_creatinine || '',
        alt: labinvestigations?.alt || '',
        ast: labinvestigations?.ast || '',
        alp: labinvestigations?.alp || '',
        albumin: labinvestigations?.albumin || '',
        total_protein: labinvestigations?.total_protein || '',
        bilirubin: labinvestigations?.bilirubin || '',
        pt_inr: labinvestigations?.pt_inr || '',
        subject: crf.subject_id || '',
        inr: labinvestigations?.inr || ''
    })

    const routeParams = {
        crf,
        [entityType]: entity,
        labinvestigation: labinvestigations
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
            post(route(`crf.${entityType}.labinvestigation.store`, routeParams), options);

        if (editMode === 'update')
            put(route(`crf.${entityType}.labinvestigation.update`, routeParams), options);
    }

    return (
        <form onSubmit={handlesubmit}>
            <CardContent className="mb-6 space-y-3">
                <FormCalendar
                    labelText='Date'
                    handleChange={(date) => date !== null ? setData('li_date', new Date(date)) : setData('li_date', '')}

                    value={data.li_date !== null ? data.li_date : ''}

                    className={`${errors.li_date ? 'is-invalid' : ''}`}
                />

                <div className="border-t border-gray-200 my-6"></div>

                <div className="grid grid-cols-2 gap-5">

                    <FormInputWithLabel
                        labelText='Red Blood Cell (RBC)'
                        type='number'
                        name='rbc'
                        value={data.rbc}
                        error={errors.rbc}
                        units='million/cu.mm'
                        onChange={e => setData('rbc', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                        step='0.01'

                    />


                    <FormInputWithLabel
                        labelText='White  Blood Cell (RBC)'
                        type='number'
                        name='wbc'
                        value={data.wbc}
                        error={errors.wbc}
                        units='cells/cu.mm'
                        onChange={e => setData('wbc', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                        step='0.01'

                    />

                       <FormInputWithLabel
                                        labelText='Hemoglobin'
                                        type='number'
                                        name='Hemoglobin'
                                        value={data.hemoglobin}
                                        error={errors.hemoglobin}
                                        units='g/dl'
                                        onChange={e => setData('hemoglobin', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                      <FormInputWithLabel
                                        labelText='Hematocrit'
                                        type='number'
                                        name='Hematocrit'
                                        value={data.hematocrit}
                                        error={errors.hematocrit}
                                        units='%'
                                        onChange={e => setData('hematocrit', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Platelet Count'
                                        type='number'
                                        name='Platelet Count'
                                        value={data.platelet}
                                        error={errors.platelet}
                                        units='cells/cu.mm'
                                        onChange={e => setData('platelet', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                     <FormInputWithLabel
                                        labelText='Blood Urea'
                                        type='number'
                                        name='Blood Urea'
                                        value={data.blood_urea}
                                        error={errors.blood_urea}
                                        units='mg/dl'
                                        onChange={e => setData('blood_urea', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Serum Creatinine'
                                        type='number'
                                        name='Serum Creatinine'
                                        value={data.serum_creatinine}
                                        error={errors.serum_creatinine}
                                        units='mg/dl'
                                        onChange={e => setData('serum_creatinine', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Alanine Transaminase (ALT)'
                                        type='number'
                                        name='Alanine Transaminase (ALT)'
                                        value={data.alt}
                                        error={errors.alt}
                                        units='u/l'
                                        onChange={e => setData('alt', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Aspartate Transaminase (AST)'
                                        type='number'
                                        name='Aspartate Transaminase (AST)'
                                        value={data.ast}
                                        error={errors.ast}
                                        units='u/l'
                                        onChange={e => setData('ast', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Alkaline Phosphatase (ALP)'
                                        type='number'
                                        name='Alkaline Phosphatase (ALP)'
                                        value={data.alp}
                                        error={errors.alp}
                                        units='u/l'
                                        onChange={e => setData('alp', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Albumin'
                                        type='number'
                                        name='Albumin'
                                        value={data.albumin}
                                        error={errors.albumin}
                                        units='gm/dl'
                                        onChange={e => setData('albumin', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Total Protein'
                                        type='number'
                                        name='Total Protein'
                                        value={data.total_protein}
                                        error={errors.total_protein}
                                        units='gm/dl'
                                        onChange={e => setData('total_protein', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Bilirubin'
                                        type='number'
                                        name='Bilirubin'
                                        value={data.bilirubin}
                                        error={errors.bilirubin}
                                        units='mg/dl'
                                        onChange={e => setData('bilirubin', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />

                                   <FormInputWithLabel
                                        labelText='Prothrombin Time(PT)'
                                        type='number'
                                        name='Prothrombin Time(PT)'
                                        value={data.pt_inr}
                                        error={errors.pt_inr}
                                        units='seconds'
                                        onChange={e => setData('pt_inr', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        step='0.01'

                                   />


                                   <FormInput
                                        labelText='International Normalised Ratio'
                                        type='number'
                                        name='International normalised ratio'
                                        value={data.inr}
                                        error={errors.inr}
                                        step='0.01'

                                        onChange={e => setData('inr', e.target.value.toString().slice(0, 8).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                   />


                </div>




            </CardContent>
            <SectionFooter
                processing={processing}
                onCancel={onCancel}
            />
        </form>
    )
}