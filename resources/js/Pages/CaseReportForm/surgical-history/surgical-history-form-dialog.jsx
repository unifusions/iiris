
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup } from "@/components/ui/field"

import { useForm } from "@inertiajs/react";
import { BOOLYESNO, ENTITY_ID_FIELD_MAP } from "../FormFields/Helper"
import FormInput from "@/Pages/Shared/FormInput"
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel"
import { useState } from "react";
import { CirclePlus, CircleX, Save, TriangleAlert } from "lucide-react";
import { Alert } from "@/Components/ui/alert";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormRadio from "@/Pages/Shared/FormRadio";
import FormDialogFooter from "@/Components/ui-ext/form-dialog-footer";


export default function SurgicalHistoryFormDialog({ crf, entity, entityType }) {

    const [open, setOpen] = useState(false);

    const entityIdField = ENTITY_ID_FIELD_MAP[entityType];

    const { data, setData, processing, post, errors, reset } = useForm({
        [entityIdField]: entity?.id ?? null,
        activity_type: '',
        duration: '',

    });



    function handlesubmit(e) {
        e.preventDefault();


        const routeParams = {
            crf: crf,
            [entityType]: entity,

        };

        const options = {
            preserveScroll: true,
            onSuccess: () => {
                setOpen(false)
                reset();
                // onCancel(); // 👈 this will call setActiveEdit(null)

            },
        };

        post(route(`crf.${entityType}.surgicalhistory.store`, routeParams), options);

    }

    return (



        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger asChild>
                <Button variant=""><CirclePlus />  Add Surgical History</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white ">

                <form onSubmit={handlesubmit} className="space-y-3">
                    <DialogHeader className="border-b border-gray-200 pb-3">
                        <DialogTitle> Add Surgical History</DialogTitle>
                        <DialogDescription>
                            <Alert className="border-orange-200 text-xs py-2 px-3 bg-orange-100 font-normal text-orange-900 items-center">

                                <div className="flex items-center gap-3">  <TriangleAlert /> <span>Add only cardiac related surgeries </span>
                                </div>
                            </Alert>
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <FormCalendar
                            labelText="Date of Surgery" error={errors.sh_date}
                            name="sh_date"
                            value={data.sh_date}
                            handleChange={(date) => date !== null ? setData('sh_date', new Date(date)) : setData('sh_date', '')}


                            className={`${errors.sh_date && 'is-invalid'}`}
                            required
                        />
                        <FormInput
                            layout="row"
                            labelText='Procedure'
                            value={data.diagnosis}
                            onChange={e => setData('diagnosis', e.target.value)} />


                        <FormRadio
                            layout="row"
                            optionsLayout="horizontal"
                            labelText="On Treatment?"
                            options={BOOLYESNO}
                            name="on_treatment"
                            handleChange={(val) => setData('on_treatment', val)}
                            value={data.on_treatment !== null && data.on_treatment}
                            error={errors.on_treatment}
                            className={`${errors.on_treatment ? 'is-invalid' : ''}`}
                        />

                    </FieldGroup>
                    <FormDialogFooter />
                </form>
            </DialogContent>

        </Dialog>
    )
}

