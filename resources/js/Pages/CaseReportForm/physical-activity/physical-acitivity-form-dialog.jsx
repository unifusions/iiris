
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
import { ENTITY_ID_FIELD_MAP } from "../FormFields/Helper"
import FormInput from "@/Pages/Shared/FormInput"
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel"
import { useState } from "react";
import { CirclePlus } from "lucide-react";
import FormDialogFooter from "@/Components/ui-ext/form-dialog-footer";


export default function PhysicalActivityFormDialog({ crf, entity, entityType }) {

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

    post(route(`crf.${entityType}.physicalactivity.store`, routeParams), options);

  }

  return (



    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>
        <Button variant=""><CirclePlus />  Add Physical Activity</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm bg-white ">

        <form onSubmit={handlesubmit} className="space-y-3">
          <DialogHeader className="border-b border-gray-200 pb-3">
            <DialogTitle>Add Physical Activity</DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <FormInput
              type="text"

              labelText='Activity Type'
              value={data.activity_type}
              onChange={e => setData('activity_type', e.target.value)}
              placeholder="e.g., Walking"
            />
            <FormInputWithLabel
              type="number"
              className={`${errors.duration && 'is-invalid '}`}
              error={errors.duration} labelText="Duration"
              onChange={e => setData('duration', e.target.value)}
              units='hrs/week'
              value={data.duration}

              placeholder="1, 2, 5"
              required />
          </FieldGroup>
          <FormDialogFooter />
        </form>
      </DialogContent>

    </Dialog>
  )
}

