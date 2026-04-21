import { useForm } from "@inertiajs/react";
import { ENTITY_ID_FIELD_MAP } from "../FormFields/Helper";
import SectionFooter from "@/Components/ui-ext/section/section-footer";
import { CardContent } from "@/Components/ui/card";
import FormInput from "@/Pages/Shared/FormInput";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormRadio from "@/Pages/Shared/FormRadio";


const CONSUMPTION_OPTIONS = [
    { labelText: 'Never', value: 'Never' },
    { labelText: 'Used to consume in the past', value: 'Used to consume in the past' },
    { labelText: 'Occasional', value: 'Occasional' },
    { labelText: 'Daily', value: 'Daily' }
];

export default function PersonalHistoryForm({
    crf, entity, entityType, personalhistories, title, onCancel, editMode
}) {
    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];

    const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
        [entityIdField]: entity?.id ?? null,
        smoking: '',
        cigarettes: '',
        smoking_since: '',
        smoking_stopped: '',
        alchohol: '',
        quantity: '',
        alchohol_since: '',
        alchohol_stopped: '',
        tobacco: '',
        tobacco_type: '',
        tobacco_quantity: '',
        tobacco_since: '',
        tobacco_stopped: '',
    });

    function handlesubmit(e) {
        e.preventDefault();
        const formRoute = `crf.${entityType}.personalhistory.${editMode}`;
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
            post(route(formRoute, routeParams), options);

        if (editMode === 'update')
            put(route(formRoute, routeParams), options);
    }

    return (
        <form onSubmit={handlesubmit}>
            <CardContent>
                <FormRadio
                layout="row"
                optionsLayout="horizontal"
                    type="radio"
                    labelText="Smoking"
                    name="Smoking"
                    value={data.smoking}
                    options={CONSUMPTION_OPTIONS}
                    handleChange={(val) => setData('smoking', val)}
                   
                    error={errors.smoking}
                    className={`${errors.smoking ? 'is-invalid' : ''}`}
                    required
                />

                {data.smoking !== '' ? <>
                    {data.smoking !== 'Never' &&
                        <>
                            <FormInput
                                labelText='No. of Cigarettes/day'
                                type="number"
                                error={errors.cigarettes}
                                handleChange={e => setData('cigarettes', e.target.value)}
                                className={`${errors.cigarettes ? 'is-invalid' : ''}`}
                            />

                            <FormCalendar
                                labelText='Smoking Since'
                                name=''
                                value={data.smoking_since}
                                handleChange={(date) => date !== null ? setData('smoking_since', new Date(date)) : setData('smoking_since', '')}

                                className={`${errors.smoking_since ? 'is-invalid' : ''}`}
                                showYearPicker
                                dateFormat='Y'
                            />
                            {data.smoking === 'Used to consume in the past' &&
                                <FormCalendar
                                    labelText='Stopped Since:'
                                    name=''
                                    minDate={data.smoking_since}
                                    value={data.smoking_stopped}
                                    handleChange={(date) => date !== null ? setData('smoking_stopped', new Date(date)) : setData('smoking_stopped', '')}

                                    className={`${errors.smoking_stopped ? 'is-invalid' : ''}`}
                                    showYearPicker
                                    dateFormat='Y'
                                />
                            }
                        </>
                    }

                </> : ''}
                <hr />

                <FormRadio
                    type="radio"
                    labelText="Alcohol"
                    name="Alcohol"
                    selectedValue={data.alchohol}
                    options={CONSUMPTION_OPTIONS}
                    handleChange={e => setData('alchohol', e.target.value)}

                    error={errors.alchohol}
                    className={`${errors.alchohol ? 'is-invalid' : ''}`}
                    required
                />
                {data.alchohol !== '' ? <>
                    {data.alchohol !== 'Never' &&
                        <>
                            <FormInput
                                labelText='Quantity ml/day'
                                type="number"
                                error={errors.quantity}
                                handleChange={e => setData('quantity', e.target.value)}
                                className={`${errors.quantity ? 'is-invalid' : ''}`}

                            />

                            <FormCalendar
                                labelText='Alcohol Since'
                                name=''
                                value={data.alchohol_since}
                                handleChange={(date) => date !== null ? setData('alchohol_since', new Date(date)) : setData('alchohol_since', '')}
                                className={`${errors.alchohol_since ? 'is-invalid' : ''}`}
                                showYearPicker
                                dateFormat='Y'
                            />
                            {data.alchohol === 'Used to consume in the past' &&
                                <FormCalendar
                                    labelText='Stopped Since:'
                                    name=''
                                    minDate={data.alchohol_since}
                                    value={data.alchohol_stopped}
                                    handleChange={(date) => date !== null ? setData('alchohol_stopped', new Date(date)) : setData('alchohol_stopped', '')}
                                    className={`${errors.alchohol_stopped ? 'is-invalid' : ''}`}
                                    showYearPicker
                                    dateFormat='Y'

                                />
                            }
                        </>
                    }

                </> : ''}
                <hr />


                <FormRadio
                    type="radio"
                    labelText="Tobacco"
                    name="tobacco"
                    selectedValue={data.tobacco}
                    options={CONSUMPTION_OPTIONS}
                    handleChange={e => setData('tobacco', e.target.value)}
                    checked={data.tobacco !== '' && data.tobacco}
                    error={errors.tobacco}
                    className={`${errors.tobacco ? 'is-invalid' : ''}`}
                    required
                />

                {data.tobacco !== '' ? <>
                    {data.tobacco !== 'Never' &&
                        <>
                            <FormInput
                                labelText='Type of Tobacco'

                                error={errors.tobacco_type}
                                handleChange={e => setData('tobacco_type', e.target.value)}
                                className={`${errors.tobacco_type ? 'is-invalid' : ''}`}

                            />

                            <FormInputWithLabel
                                labelText='Quantity'
                                type="number"
                                error={errors.quantity}
                                handleChange={e => setData('tobacco_quantity', e.target.value)}
                                className={`${errors.quantity ? 'is-invalid' : ''}`}
                                units='gms'
                            />

                            <FormCalendar
                                labelText='Tobacco Since'
                                name=''
                                value={data.tobacco_since}
                                handleChange={(date) => date !== null ? setData('tobacco_since', new Date(date)) : setData('tobacco_since', '')}
                                className={`${errors.tobacco_since ? 'is-invalid' : ''}`}
                                showYearPicker
                                dateFormat='Y'
                            />
                            {data.tobacco === 'Used to consume in the past' &&
                                <FormCalendar
                                    labelText='Stopped Since:'
                                    name=''
                                    minDate={data.tobacco_since}
                                    value={data.tobacco_stopped}
                                    handleChange={(date) => date !== null ? setData('tobacco_stopped', new Date(date)) : setData('tobacco_stopped', '')}
                                    className={`${errors.tobacco_stopped ? 'is-invalid' : ''}`}
                                    showYearPicker
                                    dateFormat='Y'
                                />
                            }
                        </>
                    }

                </> : ''}
            </CardContent>
            <SectionFooter processing={processing} />
        </form>
    )
}