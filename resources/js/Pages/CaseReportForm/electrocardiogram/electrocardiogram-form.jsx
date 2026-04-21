import SectionFooter from "@/Components/ui-ext/section/section-footer";
import { CardContent } from "@/Components/ui/card";
import { useForm } from "@inertiajs/react";
import { BOOLYESNO, ENTITY_ID_FIELD_MAP } from "../FormFields/Helper";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormRadio from "@/Pages/Shared/FormRadio";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";



const rhythmOptions = [
    { labelText: 'Sinus', value: 'Sinus' },
    { labelText: 'Atrial Fibrilation', value: 'Atrial Fibrilation' },
    { labelText: 'Atrial Flutter', value: 'Atrial Flutter' },
    { labelText: 'Others', value: 'Others' },
]


export default function ElectrocardiogramForm({ crf, entity, entityType, onCancel, electrocardiograms, editMode }) {
    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];

    const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
        case_report_form_id: crf.id,
        [entityIdField]: entity?.id ?? null,
        ecg_date: electrocardiograms?.ecg_date || '',
        rhythm: electrocardiograms?.rhythm || '',
        rhythm_others: electrocardiograms?.rhythm_others || '',
        rate: electrocardiograms?.rate || '',
        lvh: electrocardiograms?.lvh || '',
        lvs: electrocardiograms?.lvs || '',
        printerval: electrocardiograms?.printerval || '',
        qrsduration: electrocardiograms?.qrsduration || ''
    });

    const options = {
        preserveScroll: true,
        onSuccess: () => {
            onCancel();

        },
    };


    const routeParams = {
        crf: crf,
        [entityType]: entity,
        electrocardiogram: electrocardiograms
    };
    function handlesubmit(e) {

        e.preventDefault();

        if (editMode === 'store')
            post(route(`crf.${entityType}.electrocardiogram.store`, routeParams), options);
        if (editMode === 'update') {
            put(route(`crf.${entityType}.electrocardiogram.update`, routeParams), options)
        }

    }
    return (
        <form onSubmit={handlesubmit}>

            <CardContent className="mb-6 space-y-3">
                <FormCalendar
                    labelText='Date of Investigation'
                    handleChange={(date) => date !== null ? setData('ecg_date', new Date(date)) : setData('ecg_date', '')}

                    value={data.ecg_date}

                    className={`${errors.ecg_date ? 'is-invalid' : ''}`}
                />

                <div className="space-y-3">
                    <FormRadio
                        layout="row"
                        optionsLayout="horizontal"
                        type="radio"
                        labelText="Rhythm"
                        name="rhythm"
                        options={rhythmOptions}
                        handleChange={(val) => setData('rhythm', val)}
                        selectedValue={data.rhythm}
                        error={errors.rhythm}

                    />

                    {data.rhythm === 'Others' &&
                        <div className="grid grid-cols-3">
                            <div className=" col-start-2 col-span-2">
                                <FormInput
                                    labelText='If Rhythm is others, pls specify'
                                    onChange={e => setData('rhythm_others', e.target.value)}

                                    value={data.rhythm_others}
                                />
                            </div>
                        </div>


                    }

                      <FormInputWithLabel
                        layout="row"
                        labelText='Rate'
                        type='number'
                        name='rate'
                        value={data.rate}
                        error={errors.rate}
                        units='bpm'
                        onChange={e => setData('rate', e.target.value.toString().slice(0, 6).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                    />

 <FormRadio
 layout="row"
 optionsLayout="horizontal"
                        type="radio"
                        labelText="LVH"
                        name="lvh"
                        options={BOOLYESNO}
                        handleChange={(val) => setData('lvh', val)}
                        selectedValue={data.lvh}
                        error={errors.lvh}
                        className={`${errors.lvh ? 'is-invalid' : ''}`}
                    />
 <FormRadio
                        layout="row"
 optionsLayout="horizontal"
                        labelText="LVS"
                        name="lvs"
                        options={BOOLYESNO}
                        handleChange={(val) => setData('lvs', val)}
                        selectedValue={data.lvs}
                        error={errors.lvs}
                        className={`${errors.lvs ? 'is-invalid' : ''}`}
                    />
                </div>
 <FormInputWithLabel
                        labelText='PR Interval'
                        layout="row"
                        type='number'
                        name='pr_interval'
                        value={data.printerval}
                        error={errors.printerval}
                        units='ms'
                        onChange={e => setData('printerval', e.target.value.toString().slice(0, 6).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                    />
             
                  


                   

                   

                   

                    <FormInputWithLabel
                        labelText='QRS Duration'
                        type='number'
                         layout="row"
                        name='qrs_duration'
                        value={data.qrsduration}
                        error={errors.qrsduration}
                        units='ms'
                        onChange={e => setData('qrsduration', e.target.value.toString().slice(0, 6).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                    />

             




            </CardContent>
            <SectionFooter onCancel={onCancel} processing={processing} />
        </form>
    )
}