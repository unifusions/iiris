import SectionFooter from "@/Components/ui-ext/section/section-footer";
import { CardContent } from "@/Components/ui/card";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import { useForm } from "@inertiajs/react";
import { useEffect, useMemo } from "react";
import { ENTITY_ID_FIELD_MAP } from "../FormFields/Helper";

export default function PhysicalExaminationForm({ crf, entity, entityType, onCancel, physicalexamination,editMode }) {

    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];
    const { data, setData, errors, post, put, processing, hasErrors, transform } = useForm({
        case_report_form_id: crf.id,
        [entityIdField]: entity?.id ?? null,

      height: physicalexamination?.height || '',
          weight: physicalexamination?.weight || '',
          bsa: physicalexamination?.bsa || '',
          heart_rate: physicalexamination?.heart_rate || '',
          systolic_bp: physicalexamination?.systolic_bp || '',
          diastolic_bp: physicalexamination?.diastolic_bp || '',
          subject: crf.subject_id
    });
const options = {
    preserveScroll: true,
        onSuccess: () => {
            onCancel(); // 👈 this will call setActiveEdit(null)
            
        },
    };


     const routeParams = {
          crf : crf,
          [entityType]: entity,
          physicalexamination : physicalexamination
     };

    function handlesubmit(e) {

        e.preventDefault();
 
        if (editMode === 'store')
            post(route(`crf.${entityType}.physicalexamination.store`, routeParams), options);
        if (editMode === 'update') {
            put(route(`crf.${entityType}.physicalexamination.update`, routeParams), options)
        }

    }

    useEffect(
        () => {
            let bsa = Math.sqrt((data.height * data.weight) / 3600).toFixed(2)
            setData('bsa', bsa);
        },
        [data.height, data.weight],
    );

    const bsa = useMemo(() => {
        const h = parseFloat(data.height);
        const w = parseFloat(data.weight);

        if (!h || !w) return '';

        const result = Math.sqrt((h * w) / 3600);
        return Number.isFinite(result) ? result.toFixed(2) : '';
    }, [data.height, data.weight]);
    return (
        <form onSubmit={handlesubmit}>
            <CardContent className="mb-6">




                <div className="grid grid-cols-3 gap-5">
 
                    {entityType !== 'postoperative' && <>
                        <FormInputWithLabel
                            type="number"
                            className={`${errors.height && 'is-invalid '}`}
                            error={errors.height} labelText="Height"
                            // handleChange={e => setData('height', e.target.value.toString().split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                            // handleChange={e => setData('height', e.target.value.toString().slice(0, 6).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join(".")) }
                            onChange={e =>
                                // alert(e.target.value)
                                setData('height', e.target.value)
                            }
                            units='cms'
                            value={data.height}
                            onBlur={e => setData('height', Number.parseFloat(data.height).toFixed(2))}

                            // onBlur={updateBsa}
                            required />

                        <FormInputWithLabel
                            type="number"

                            error={errors.weight} labelText="Weight"
                            onChange={e =>
                                setData('weight', e.target.value)
                                // setData('weight', e.target.value.toString().split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))
                            }
                            // onBlur={updateBsa}
                            onBlur={e => setData('weight', Number.parseFloat(data.weight).toFixed(2))}
                            value={data.weight}
                            units='kgs'
                            required />

                        <FormInputWithLabel


                            labelText="BSA"
                            value={bsa}
                            units={<> m<sup>2</sup> </>}
                            readOnly
                        // remarks='BSA will be calculated automatically from the given height & weight'

                        />
                    </>}

                    <FormInputWithLabel
                        type="number"

                        labelText="Heart Rate"
                        onChange={e => setData('heart_rate', e.target.value)}
                        units='bpm'
                        value={data.heart_rate}
                        required
                    />

                    <FormInputWithLabel
                        type="number"
                       
                        labelText="Systolic BP"
                        onChange={e => setData('systolic_bp', e.target.value)}
                        units='mmHg'
value={data.systolic_bp}
                        required
                    />


                    <FormInputWithLabel
                        type="number"
                         labelText="Diastolic BP"
                        onChange={e => setData('diastolic_bp', e.target.value)}
value={data.diastolic_bp}
                        required
                        units='mmHg' />


                </div>


            </CardContent>
            <SectionFooter onCancel={onCancel} processing={processing} />
        </form>
    )
}